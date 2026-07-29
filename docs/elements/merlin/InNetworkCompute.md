---
title: In-Network Compute (INC)
---

## What is In-Network Compute?

*In-Network Compute* (INC) lets Merlin routers intercept packets **in-flight** and offload
collective operations (for example, reductions) to per-port *accelerator* subcomponents. Instead of
routing every operand all the way to the endpoint NICs and back, partial results are computed
inside the switches themselves as data flows up the tree.

For collective communication patterns such as `allreduce` and `broadcast`, this can significantly
reduce both **latency** and **bandwidth consumption** in HPC fabrics, because each level of the
topology reduces the volume of data that must be forwarded to the next level.

:::note At a Glance

**SST Names:** `merlin.collective_accel` (accelerator subcomponent), `merlin.inc_nic` (test NIC) &nbsp;  
**Router:** `merlin.hr_router` (accelerator-aware) &nbsp;  
**Topology awareness:** `merlin.fattree` (tree-level and up-port classification) &nbsp;  
**Backward compatible:** Yes — routers with no accelerators configured behave exactly as before

:::

If you just want to run an INC simulation, jump to the [INC QuickStart](./INCQuickStart) guide.

---

## How it works

INC is built from three cooperating pieces:

1. **Packet interception** in the router's port control logic.
2. **Per-port `Accelerator` subcomponents** that perform the actual computation.
3. **Topology awareness** so the router knows which direction (up/down the tree) a packet is
   travelling and which port acts as the collective *root*.

### 1. Packet interception

Each router port is driven by a `PortControl` object. When a packet arrives — either from an
endpoint NIC (NIC→Router) or from a neighbouring router (Router→Router) — `PortControl` first
offers it to the router's INC path:

```text
packet arrives on port P
        │
        ▼
  parent->startINC(P, event)  ──▶ returns true  ──▶ packet diverted to accelerator
        │                                            (removed from normal routing)
        └──── returns false ─────────────────────▶  normal buffering / routing
```

If `startINC()` returns `true`, the packet has been consumed by the accelerator and normal
buffering is skipped. If it returns `false` (the default whenever no accelerator is configured),
the packet follows the ordinary Merlin routing path unchanged. This is the mechanism that keeps
INC **fully backward compatible**: with no accelerators, `startINC()` always returns `false`.

### 2. The `Accelerator` subcomponent

`Accelerator` is a subcomponent base class (declared in `router.h`) that defines the interface a
router uses to drive in-network compute. Every accelerator implements:

| Method | Purpose |
| --- | --- |
| `startINC(internal_router_event*, bool compute)` | Begin processing an INC packet on this port |
| `getInAccelBusy()` | Report whether the accelerator is currently busy (for flow control) |
| `handle_compute(Event*)` | Perform the queued computation step |

The router (`hr_router`) owns one accelerator slot per port. It exposes a small set of INC hooks
that delegate to the relevant accelerator, all guarded by `nullptr` checks so that unconfigured
ports are simply skipped:

| Router INC method | Role |
| --- | --- |
| `startINC(port, event)` | Entry point called by `PortControl` on packet arrival |
| `sendINC(port, event)` | Inject a computed result back into the network |
| `xbarINC(port, event)` | Move an INC event across the router's crossbar |
| `getInAccelBusy(port)` | Query busy state of a specific port's accelerator |
| `getNumPorts()` / `getLevel()` / `getID()` | Expose router shape/identity to accelerators |

INC events are carried between routers and accelerators using the `incEvent` class, which records
the `job_id`, the payload `data`, and the `next_ports` / `root_ports` / `up_ports` vectors that
describe how the collective should progress through the topology.

### 3. Topology awareness

To route a collective correctly, the accelerator must know where it sits in the tree. The
`Topology` base class gains two virtual hooks (with safe defaults so non-tree topologies are
unaffected):

```cpp
virtual int  getRtrLevel()      { return 0; }      // which level of the tree this router is on
virtual bool isUpPort(int port) { return false; }  // does this port face "up" the tree?
```

The **fat-tree** topology (`merlin.fattree`) overrides both. `getRtrLevel()` returns the router's
level, and `isUpPort()` reports whether a given port connects toward the next level up. The router
uses `isUpPort()` to decide whether an arriving INC packet should be reduced locally (down-port)
or forwarded toward the collective root (up-port).

---

## The `collective_accel` ring accelerator

`merlin.collective_accel` is the reference accelerator implementation. Conceptually, the
accelerators attached to a single router are connected to one another in a **ring**, and a
collective walks that ring accumulating a partial result before forwarding it up the tree.

**Ports** — each accelerator exposes two links used to build the ring:

| Port | Meaning |
| --- | --- |
| `lport` | Link to the accelerator on the **left** in the ring |
| `rport` | Link to the accelerator on the **right** in the ring |

**Ring topology** — the accelerator supports three wiring modes, selected at compile time via the
`RING_TYPE` macro at the top of `collective_accel.h`:

| `RING_TYPE` | Ring style |
| --- | --- |
| `0` | Crossbar |
| `1` | Unidirectional ring *(default)* |
| `2` | Bidirectional ring |

With the default unidirectional ring, each accelerator's `rport` connects to the next
accelerator's `lport`, forming a cycle across all ports of the router.

**Timing** — the accelerator runs on a 1&nbsp;GHz clock, models one cycle per flit
(`CYCLES_PER_FLIT`), and uses internal self-links (`compute_link`, `xbar_link`) to model compute
and crossbar-traversal delays. As a partial result circulates the ring it is accumulated at the
`root_port`; once complete it is forwarded to the next tree level using the `up_ports` recorded in
the INC event.

---

## The `merlin.inc_nic` test endpoint

`merlin.inc_nic` is a lightweight NIC used to exercise the INC path in tests. It is a standard
network component (`COMPONENT_CATEGORY_NETWORK`) with a `networkIF` subcomponent slot for a
`SimpleNetwork` interface, and accepts these parameters:

| Parameter | Meaning |
| --- | --- |
| `job_id` | Identifier for the collective job |
| `id` | Logical node id of this endpoint |
| `message_size` | Size of each message contributed to the collective |
| `num_messages` | Number of messages to send |
| `next_ports` / `root_ports` / `up_ports` | Per-level port classification used to steer the collective through the fat-tree |

You do not normally instantiate `inc_nic` directly — the Python `INCJob` helper builds it for you
and computes the `next_ports` / `root_ports` / `up_ports` vectors from the topology shape. See the
[INC QuickStart](./INCQuickStart).

---

## Backward compatibility

INC is strictly additive:

- Accelerator subcomponents are **optional**. A router with no accelerators configured takes the
  ordinary routing path, and its INC hooks return without action.
- The new `Topology` methods (`getRtrLevel`, `isUpPort`) have safe defaults, so topologies that do
  not override them are unaffected.
- Existing simulations produce identical results — this was verified against `fattree_128_test.py`,
  which yields the same output with and without the INC infrastructure present.

The only change visible to non-INC users is that the port control default MTU was raised from
`2kB` to `8KB` to accommodate larger INC messages.
