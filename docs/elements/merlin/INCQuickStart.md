---
title: INC QuickStart
---

## Overview

This guide walks through a complete In-Network Compute (INC) simulation using the
`fattree_inc_test.py` example shipped with Merlin. If you have not read the conceptual
introduction yet, start with [In-Network Compute (INC)](./InNetworkCompute).

The example builds a small fat-tree, runs an `INCJob` collective across it, and wires a
`collective_accel` ring onto every router port. It completes in **430&nbsp;ns** of simulated time.

The example file lives at:

```text
sst-elements/src/sst/elements/merlin/tests/fattree_inc_test.py
```

Make sure SST-core and SST-elements are installed first. See
[SST-Downloads](http://sst-simulator.org/SSTPages/SSTMainDownloads/).

---

## Step 1 — Define the fat-tree topology

The topology shape `"4,2:4"` describes a two-level fat-tree with **16 hosts**:

- **Level 0:** 4 edge routers, radix 6 (4 down-ports to hosts + 2 up-ports)
- **Level 1:** 2 top routers, radix 4 (4 down-ports)

```py title="fattree_inc_test.py"
import sst
from sst.merlin.base import *
from sst.merlin.endpoint import *
from sst.merlin.interface import *
from sst.merlin.topology import *

### Setup the topology
topo = topoFatTree()
topo.shape = "4,2:4"
topo.link_latency = "20ns"
```

## Step 2 — Configure the router

INC uses the standard `hr_router`. Note `flit_size = "8B"` and a single virtual network
(`num_vns = 1`) for this example.

```py title="fattree_inc_test.py"
router = hr_router()
router.link_bw = "4GB/s"
router.flit_size = "8B"
router.xbar_bw = "4GB/s"
router.input_latency = "20ns"
router.output_latency = "20ns"
router.input_buf_size = "4kB"
router.output_buf_size = "4kB"
router.num_vns = 1
router.xbar_arb = "merlin.xbar_arb_lru"

topo.router = router
```

## Step 3 — Configure the INC endpoint

The endpoint is an `INCJob`. It builds a `merlin.inc_nic` per node and, crucially, derives the
`next_ports` / `root_ports` / `up_ports` vectors from the `shape` string — so the `shape` you pass
to the job **must match** the topology shape.

```py title="fattree_inc_test.py"
### Set up the INC endpoint
networkif = LinkControl()
networkif.link_bw = "4GB/s"
networkif.input_buf_size = "1kB"
networkif.output_buf_size = "1kB"

ep = INCJob(0, topo.getNumNodes())
ep.network_interface = networkif
ep.message_size = "64B"
ep.num_messages = 1
#highlight-next-line
ep.shape = "4,2:4"   # must match topo.shape
```

`INCJob` accepts the following parameters:

| Parameter | Meaning |
| --- | --- |
| `job_id` | Passed as the first constructor argument (`0` here) |
| `message_size` | Size of each message contributed to the collective |
| `num_messages` | Number of messages per endpoint |
| `shape` | Fat-tree shape string, used to compute per-level INC port routing |

## Step 4 — Build the system

```py title="fattree_inc_test.py"
system = System()
system.setTopology(topo)
system.allocateNodes(ep, "linear")
system.build()
```

## Step 5 — Wire the accelerator ring (post-build)

This is the step unique to INC. The `collective_accel` subcomponents are attached to router ports
**after** `system.build()`, because they must be added to already-instantiated router components
and then linked to one another in a ring.

`wireAccelerators()` does two things for each router:

1. Attaches one `merlin.collective_accel` subcomponent to every port
   (`accelerator0`, `accelerator1`, …).
2. Connects them into a **unidirectional ring**: each accelerator's `rport` links to the next
   accelerator's `lport` (wrapping around), using `10ns` links.

```py title="fattree_inc_test.py"
def wireAccelerators(rtr_name, rtr_id, radix):
    rtr = sst.findComponentByName(rtr_name)
    if rtr is None:
        return

    accels = []
    #highlight-start
    for p in range(radix):
        accels.append(
            rtr.setSubComponent("accelerator%d" % p, "merlin.collective_accel")
        )

    # Wire the ring: each accel's rport connects to the next accel's lport
    for p in range(radix):
        link = sst.Link("rtr%d_accellink%d" % (rtr_id, p))
        link.connect(
            (accels[p], "rport", "10ns"), (accels[(p + 1) % radix], "lport", "10ns")
        )
    #highlight-end
```

The remainder of the script computes each router's name, id, and radix from the fat-tree shape and
calls `wireAccelerators()` for every router in every level:

```py title="fattree_inc_test.py"
# Fat-tree shape "4,2:4":
#   Level 0: 4 edge routers (ids 0-3), radix = 4+2 = 6
#   Level 1: 2 top routers  (ids 4-5), radix = 4
downs = [4, 4]
ups = [2]
num_hosts = 16
num_levels = len(downs)

routers_per_level = [0] * num_levels
routers_per_level[0] = num_hosts // downs[0]
for i in range(1, num_levels):
    routers_per_level[i] = routers_per_level[i - 1] * ups[i - 1] // downs[i]

start_ids = [0] * num_levels
for i in range(1, num_levels):
    start_ids[i] = start_ids[i - 1] + routers_per_level[i - 1]

groups_per_level = [1] * num_levels
groups_per_level[0] = num_hosts // downs[0]
for i in range(1, num_levels - 1):
    groups_per_level[i] = groups_per_level[i - 1] // downs[i]

for level in range(num_levels):
    rtrs_in_level = routers_per_level[level]
    groups = groups_per_level[level]
    rtrs_per_group = rtrs_in_level // groups

    if level < len(ups):
        radix = downs[level] + ups[level]
    else:
        radix = downs[level]

    for g in range(groups):
        for r in range(rtrs_per_group):
            rtr_id = start_ids[level] + g * rtrs_per_group + r
            rtr_name = "rtr_l%d_g%d_r%d" % (level, g, r)
            wireAccelerators(rtr_name, rtr_id, radix)
```

:::tip Router naming
Routers are addressed by the fat-tree's generated names, `rtr_l<level>_g<group>_r<router>`. The
radix passed to `wireAccelerators()` must equal the router's actual port count for that level
(down-ports + up-ports), otherwise the ring will be wired incorrectly.
:::

---

## Step 6 — Run the simulation

Pass the script to `sst`:

```sh
$ sst fattree_inc_test.py
Simulation is complete, simulated time: 430 ns
```

The simulated completion time of **430&nbsp;ns** confirms the collective was reduced through the
accelerator ring at each tree level rather than round-tripping to the endpoints.

---

## Running as part of the test suite

`fattree_inc_test.py` is registered in Merlin's default test suite
(`tests/testsuite_default_merlin.py`) with reference output stored at
`tests/refFiles/test_merlin_fattree_inc_test.out`. It runs alongside the other Merlin regression
tests, so a standard `sst-test-elements` run will exercise the INC path automatically.

---

## Adapting the example

To model a different fabric:

- Change **both** `topo.shape` and `ep.shape` to the same new shape string.
- Update the `downs` / `ups` / `num_hosts` values in the wiring section so they match the new
  shape (these drive router id and radix computation).
- Adjust `message_size` and `num_messages` to model the collective payload you care about.
- If you want a different accelerator ring style, change the `RING_TYPE` macro in
  `collective_accel.h` (0 = crossbar, 1 = unidirectional, 2 = bidirectional) and rebuild
  SST-elements.
