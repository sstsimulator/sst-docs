---
title: NetworkIO Storage Guide
---

## What is NetworkIO?

NetworkIO models file-like storage I/O over an SST network. Compute nodes (running
an Ember motif) issue `open`/`read`/`write`/`close` against dedicated **I/O nodes**.
Requests share the [merlin](../merlin/intro) fabric with ordinary message traffic —
so you can measure how storage I/O and MPI communication contend for the same links.

The feature spans four libraries:

| Library | Role |
| --- | --- |
| [ember](./intro) | Drives I/O traffic from a motif (`TestNetworkIO`). |
| [hermes](../hermes/intro) | Declares the abstract `NetworkIO` API the motif programs against. |
| [firefly](../firefly/intro) | Implements the API: the compute-side `hadesNetworkIO`, the storage-side NIC handlers, striping mappers, and a `SimpleSSD` backing model. |
| [merlin](../merlin/intro) | Allocates the dedicated I/O nodes (`System.allocateIoNodes`). |

:::note At a Glance
**Motif SST Name:** `ember.TestNetworkIOMotif` (added via `addMotif("TestNetworkIO ...")`) &nbsp;
**API:** `SST::Hermes::NetworkIO::Interface` ([hermes](../hermes/intro)) &nbsp;
**Implementation:** `firefly.hadesNetworkIO` ([firefly](../firefly/intro))
:::

1. [A minimal simulation](#a-minimal-simulation) — the smallest working config.
2. [Allocating I/O nodes](#allocating-io-nodes) — `allocateIoNodes`, `useNetworkIO`.
3. [The TestNetworkIO motif](#the-testnetworkio-motif) — operations and parameters.
4. [Striping across I/O nodes](#striping-across-io-nodes) — Block / RR / Hash mappers.
5. [I/O pools and permit/deny](#io-pools-and-permitdeny) — isolating jobs.
6. [Asynchronous I/O](#asynchronous-io) — `iread_at`/`waitall`/`cancel`.
7. [Collecting statistics](#collecting-statistics).
8. [Writing your own NetworkIO motif](#writing-your-own-networkio-motif) — the C++ API.

---

## A minimal simulation

The canonical example is `sst-elements/src/sst/elements/ember/test/testIO.py`: a
4-node Torus, 2 nodes reserved for I/O, one 2-rank MPI job writing to storage.

```py title="testIO.py (abridged)"
import sst
from sst.merlin.base import *
from sst.merlin.endpoint import *
from sst.merlin.interface import *
from sst.merlin.topology import *
from sst.ember import *

PlatformDefinition.setCurrentPlatform("firefly-defaults")

# --- network: 4-node Torus ---
topo = topoTorus()
topo.shape = "4"; topo.width = "1"; topo.local_ports = "1"
topo.link_latency = "20ns"

router = hr_router()
router.link_bw = "4GB/s"; router.flit_size = "8B"; router.xbar_bw = "4GB/s"
router.input_latency = "20ns"; router.output_latency = "20ns"
router.input_buf_size = "16kB"; router.output_buf_size = "16kB"
router.num_vns = "1"; router.xbar_arb = "merlin.xbar_arb_lru"
topo.router = router

def makeNetworkif():
    nif = ReorderLinkControl()
    nif.link_bw = "12GB/s"
    nif.input_buf_size = "16kB"; nif.output_buf_size = "16kB"
    return nif

system = System()
system.setTopology(topo, 1)

# --- reserve 2 dedicated I/O nodes (lowest NIDs, via the "linear" allocator) ---
io_nid_list = system.allocateIoNodes(2, "linear")
system.setIoNetworkInterface(makeNetworkif())

# --- one 2-rank MPI job that performs storage writes ---
job = EmberMPIJob(0, 2)
job.network_interface = makeNetworkif()
job.addMotif("TestNetworkIO messageSize=4096 iterations=2 op=write fileSize=4294967296")
system.allocateNodes(job, "linear")
job.useNetworkIO(system)            # bind the job to the I/O nodes

system.build()
```

Run it like any other Ember script:

```
$ sst testIO.py
message-size 4096, iterations 2, total-time 7.527 us
Simulation is complete, simulated time: 7.527 us
```

Three lines turn an ordinary Ember config into a NetworkIO one:

* `allocateIoNodes(2, "linear")` — reserve nodes as storage targets.
* `setIoNetworkInterface(...)` — give those storage nodes a NIC.
* `job.useNetworkIO(system)` — bind the job to the I/O nodes and load the
  `firefly.hadesNetworkIO` API into its endpoints.

---

## Allocating I/O nodes

I/O nodes are ordinary endpoints reserved for storage instead of a compute job.
They draw from the **same node pool** as compute nodes, so the two never overlap.

### `System.allocateIoNodes`

```py
io_nid_list = system.allocateIoNodes(count, method, *args, pool="default")
```

| Argument | Meaning |
| --- | --- |
| `count` | Number of I/O nodes to reserve. |
| `method` | Allocation strategy — one of merlin's registered allocators: `"linear"`, `"random"`, or `"random_linear"`. `"linear"` consumes the lowest free NIDs first and is what every shipped example uses. |
| `*args` | Extra arguments forwarded to the allocator (e.g. a `seed` for the random allocators). |
| `pool` | Keyword-only. Names the I/O pool these nodes belong to (default `"default"`). Must be a non-empty string. See [I/O pools](#io-pools-and-permitdeny). |

It returns a **sorted list of the reserved NIDs**, which you can save (e.g. to a
file) for later analysis. Multiple calls with different `pool` names build disjoint
pools.

### `System.setIoNetworkInterface`

```py
system.setIoNetworkInterface(makeNetworkif())
```

Sets the NIC used by the storage nodes. It **must be the same interface type** the
compute jobs use (e.g. `ReorderLinkControl`), since both sides share the fabric.

### `EmberMPIJob.useNetworkIO`

```py
job.useNetworkIO(system,
                 mapper="firefly.Block_NetworkIOMapper",
                 mapper_params=None,
                 pool="default",
                 suppress_permit=False)
```

| Argument | Meaning |
| --- | --- |
| `system` | The `System` whose I/O nodes this job should target. |
| `mapper` | Striping mapper module. One of `firefly.Block_NetworkIOMapper` (default), `firefly.RR_NetworkIOMapper`, `firefly.Hash_NetworkIOMapper`. See [Striping](#striping-across-io-nodes). |
| `mapper_params` | Optional `dict` of extra mapper parameters (e.g. `{"blockSize": "4KiB"}`). |
| `pool` | Which I/O pool to bind to. Must have been created by a matching `allocateIoNodes(..., pool=...)` call, otherwise build fails with an `AssertionError`. |
| `suppress_permit` | **Debug/testing only.** When `True`, the compute node is *not* inserted into the pool's permit set, so its requests are denied. Never set this in a production model. |

`useNetworkIO` looks up the pool's NID list and configures the job's
`firefly.hadesNetworkIO` API (`nodeMapper.name`, `nodeMapper.ioNidList`,
`nodeMapper.poolName`). It must be called **after** `system.allocateNodes(job, ...)`.

:::info Ordering
The required call order is: `allocateIoNodes` → `setIoNetworkInterface` →
`allocateNodes(job, ...)` → `job.useNetworkIO(system)` → `system.build()`.
:::

---

## The TestNetworkIO motif

`TestNetworkIO` (registered as `ember.TestNetworkIOMotif`) is the reference motif;
it exercises every NetworkIO operation. Select behaviour through `addMotif`
arguments:

```py
job.addMotif("TestNetworkIO messageSize=4096 iterations=2 op=write fileSize=4294967296")
```

### Parameters

| Argument | Description | Default |
| --- | --- | --- |
| `messageSize` | I/O size in bytes per operation. | `1024` |
| `iterations` | Number of operations per phase. | `5` |
| `op` | Operation mode (see below). | `write` |
| `fileSize` | Storage file size in bytes (offsets wrap within this). | `10485760` |
| `capacity` | Per-file capacity for handle ops (`0` = unbounded). | `0` |
| `asyncBatch` | Number of in-flight `iread_at`/`iwrite_at` requests in async mode (max 16). | `4` |
| `cancelInflight` | Async mode: cancel one request before `waitall` (`0`/`1`). | `0` |
| `rngSeedZ` | Non-zero `MarsagliaRNG` z seed; `0` = wall-clock seed. | `0` |
| `rngSeedW` | Non-zero `MarsagliaRNG` w seed; `0` = wall-clock seed. | `0` |

Setting both `rngSeedZ` and `rngSeedW` to non-zero values makes the offset
sequence deterministic — required for the stats-diff tests.

### Operation modes (`op`)

| `op` value | Behaviour |
| --- | --- |
| `write` (default) | Legacy stripe-cyclic mode: repeatedly `write` `messageSize` bytes at a pseudo-random offset within `fileSize`. |
| `read` | Same as `write` but issues `read`s. |
| `open_close` | Open a file, loop `iterations` `write_at`, then close. Exercises the file-handle lifecycle. |
| `two_files` | Open two files and alternate `write_at` between them. |
| `short_read` | Open a sized file (`capacity`) and deliberately read past the end to force a `ShortRead`. Requires the deny escape hatch (below). |
| `async` | Issue `asyncBatch` non-blocking `iread_at` requests, then `waitall`. |
| `async_cancel` | Like `async`, but `cancel` one in-flight request before `waitall`. |

:::caution Deny escape hatch
Modes that intentionally provoke a denial or short read (`short_read`, and the
pool deny tests) trip a safety `assert` in the Ember event layer unless you export
`SST_EMBER_ALLOW_NETWORKIO_DENY=1`. This is a deliberate guard so that *unexpected*
denials in normal runs fail loudly. Only set it when a denial/short-read is the
expected outcome.
:::

---

## Striping across I/O nodes

When more than one I/O node is allocated, NetworkIO stripes a file's bytes across
them. The **mapper** decides which I/O node owns a given byte offset. Choose the
mapper through `useNetworkIO(..., mapper=...)`:

| Mapper (`firefly.*`) | Policy | Tuning param (default) | Best for |
| --- | --- | --- | --- |
| `Block_NetworkIOMapper` | Block: `(offset / bytesPerNode) % numNodes` — large contiguous regions per node. | `bytesPerNode` (`1GiB`) | Large sequential access, locality. |
| `RR_NetworkIOMapper` | Round-robin: `(offset / blockSize) % numNodes` — fine-grained interleave. | `blockSize` (`4KiB`) | Even load spreading of small blocks. |
| `Hash_NetworkIOMapper` | Hash: `hash(offset / blockSize) % numNodes` — decorrelates access patterns. | `blockSize` (`4KiB`) | Breaking up correlated/strided access. |

```py title="Round-robin striping with a 4 KiB block"
job.useNetworkIO(system,
                 mapper="firefly.RR_NetworkIOMapper",
                 mapper_params={"blockSize": "4KiB"})
```

The reference suite `tests/testsuite_default_ember_networkIO_stripe.py` exercises
all three policies and verifies that, over many iterations, bytes are balanced
across the I/O nodes (coefficient of variation ≤ 5%).

You can also override the stripe size per file at `open` time via the
`striping_unit` hint (default 1 MiB) — see
[Writing your own NetworkIO motif](#writing-your-own-networkio-motif).

---

## I/O pools and permit/deny

A **pool** is a named group of I/O nodes. Give each job its own pool to isolate its
storage — or share one pool to study cross-job contention.

```py title="Two jobs, two isolated pools"
# reserve disjoint storage for each pool
alpha_nids = system.allocateIoNodes(2, "linear", pool="alpha")   # e.g. NIDs 0,1
beta_nids  = system.allocateIoNodes(2, "linear", pool="beta")    # e.g. NIDs 2,3
system.setIoNetworkInterface(makeNetworkif())

# job A only sees pool "alpha"; job B only sees pool "beta"
jobA.useNetworkIO(system, pool="alpha")
jobB.useNetworkIO(system, pool="beta")
```

### Permit/deny

Each pool carries a **permit set** of compute NIDs that are allowed to send to it.
When a job calls `useNetworkIO(pool=...)`, its compute nodes are automatically
added to that pool's permit set. A request from a node that is *not* in the permit
set is rejected by the storage NIC with `Status::PermissionDenied` (an `AckDeny`
still rides the wire, so the denial costs network time but no DMA).

The `suppress_permit=True` flag (debug only) skips that automatic insertion, which
is how the test suite synthesizes "rogue node" and "empty permit" deny scenarios.
Production models should never set it.

### Capacity / byte budget

When a file is opened with a non-zero `capacity`, the storage side tracks bytes per
file. Operations that exceed capacity are clamped and surface as `Status::ShortRead`
(reads) or `Status::NoSpace` (writes).

The reference suite `tests/testsuite_default_ember_networkIO_pools.py` covers pool
isolation, name collisions (binding to an unallocated pool fails fast), permit/deny,
and byte-budget enforcement.

---

## Asynchronous I/O

NetworkIO offers non-blocking I/O modeled on `MPI_File_iread_at`/`iwrite_at`. The
`async` motif mode shows the pattern: issue a batch of `iread_at` requests,
optionally cancel one, then `waitall`.

```py title="16-deep async read batch"
job.addMotif("TestNetworkIO op=async asyncBatch=16 iterations=16 "
             "messageSize=1024 fileSize=1048576 rngSeedZ=13579 rngSeedW=24680")
```

```py title="Cancel an in-flight request"
job.addMotif("TestNetworkIO op=async_cancel asyncBatch=4 cancelInflight=1 "
             "iterations=4 messageSize=1024 fileSize=1048576")
```

Semantics (from the Hermes API contract):

* Each `iread_at`/`iwrite_at` returns an opaque `IORequest` immediately.
* A request is consumed by exactly one `wait`/`waitall`; `test`/`testany` are
  non-consuming.
* `waitall` fills the status array in **request-array index order**, not completion
  order.
* `cancel` is best-effort and reports silent success; there is no `Cancelled`
  status.

The reference suite `tests/testsuite_default_ember_networkIO_async.py` runs the
single-batch, 16-deep `waitall`, and cancel-in-flight scenarios.

---

## Collecting statistics

NetworkIO statistics live on the **`firefly.nic`** component, not the motif.
`testIO.py` enables them when given a CSV filename as a model-option:

```
$ sst testIO.py --model-options="stats.csv"
```

```py title="Enabling NetworkIO statistics"
sst.setStatisticLoadLevel(7)
sst.setStatisticOutput("sst.statOutputCSV", {"filepath": "stats.csv", "separator": ", "})
for s in ("networkIoReadTargetNid", "networkIoWriteTargetNid",
          "networkIoReadLatency_ns", "networkIoWriteLatency_ns",
          "rcvdByteCount", "rcvdPkts"):
    sst.enableStatisticForComponentType("firefly.nic", s,
                                        {"type": "sst.AccumulatorStatistic"})
```

| Statistic | Units | Meaning |
| --- | --- | --- |
| `networkIoReadTargetNid` | nid | Target NID of each NetworkIO read dispatch. |
| `networkIoWriteTargetNid` | nid | Target NID of each NetworkIO write dispatch. |
| `networkIoReadLatency_ns` | ns | End-to-end read latency. |
| `networkIoWriteLatency_ns` | ns | End-to-end write latency. |

The underlying `firefly.SimpleSSD` backing model contributes additional stats
(`readRequests`, `writeRequests`, `readBytes`, `writeBytes`, `readLatency_ns`,
`writeLatency_ns`, `queueDepthOnEnqueue`, `pendingOnDispatch`). Because it is loaded
anonymously with `INSERT_STATS`, these are surfaced through the parent
`firefly.nic`, so enabling them on `firefly.nic` is sufficient.

---

## Writing your own NetworkIO motif

Motifs program against the abstract `SST::Hermes::NetworkIO::Interface`, declared in
`hermes/networkIOapi.h`. A motif derives from `EmberNetworkIOGenerator`, which
fetches the library in `setup()` and exposes a protected `networkIO()` accessor.
Each operation is enqueued as an `EmberEvent`; one phase is enqueued per `generate()`
call.

### Core types

```cpp
namespace SST::Hermes::NetworkIO {

enum class Status : int {
    OK = 0, PermissionDenied = 1, ShortRead = 2, NoSpace = 3, BadFileHandle = 4
};

struct IOStatus {
    uint64_t bytes_completed = 0;
    int      error           = static_cast<int>(Status::OK);
};

enum class OpenMode : int { ReadOnly = 0, WriteOnly = 1, ReadWrite = 2, Create = 3 };

struct FileInfo { std::map<std::string,std::string> hints; };  // "striping_unit", "stripe_pool"

struct FileDescriptor { uint32_t fileId = 0; OpenMode mode; std::string path; };
using FileHandle = FileDescriptor*;

using IORequest = IORequestBase*;                 // opaque async handle
typedef std::function<void(IOStatus)> StatusCallback;
}
```

:::note Naming
`OpenMode::Create` is reserved and currently ignored — files are pre-sized at
build time. The non-blocking operations are `iread_at`/`iwrite_at` (offset-explicit,
pread/pwrite-shaped); there are no bare `iread`/`iwrite`. Completion polling is via
`test`/`testany`; there is no `waitany` method.
:::

### Interface methods

```cpp
// Legacy stripe-cyclic shim (single implicit file)
void networkIORead(Vaddr dest, uint64_t offset, uint64_t length, Callback);
void networkIOWrite(uint64_t offset, Vaddr src, uint64_t length, Callback);

// File-handle API
void open(const std::string& path, OpenMode mode, const FileInfo& info,
          FileHandle* outHandle, StatusCallback cb);
void close(FileHandle handle, StatusCallback cb);
void read_at (FileHandle handle, uint64_t offset, Vaddr dest, uint64_t length, StatusCallback cb);
void write_at(FileHandle handle, uint64_t offset, Vaddr src,  uint64_t length, StatusCallback cb);

// Non-blocking API
void iread_at (FileHandle handle, uint64_t offset, Vaddr dest, uint64_t length,
               IORequest* outReq, StatusCallback cb);
void iwrite_at(FileHandle handle, uint64_t offset, Vaddr src,  uint64_t length,
               IORequest* outReq, StatusCallback cb);
void wait   (IORequest req, IOStatus* outStatus, StatusCallback cb);
void waitall(int count, IORequest reqs[], IOStatus statuses[], StatusCallback cb);
void test   (IORequest req, bool* outDone, IOStatus* outStatus, StatusCallback cb);
void testany(int count, IORequest reqs[], int* outIdx, bool* outDone, IOStatus* outStatus, StatusCallback cb);
void cancel (IORequest req, StatusCallback cb);
```

### Enqueuing operations in a motif

`EmberNetworkIOLib` provides one queue-pushing method per operation. A motif's
`generate()` enqueues them onto the event queue:

```cpp title="Sketch of a write-then-close phase"
bool MyNetworkIOMotif::generate(std::queue<EmberEvent*>& evQ)
{
    if (m_phase == OPEN) {
        networkIO().open(evQ, "myfile", OpenMode::ReadWrite, info, &m_handle);
        m_phase = WRITE;
        return false;                       // more phases to come
    }
    if (m_phase == WRITE) {
        networkIO().write_at(evQ, m_handle, m_offset, m_buf, m_len);
        if (++m_done < m_iterations) return false;
        m_phase = CLOSE;
        return false;
    }
    networkIO().close(evQ, m_handle);
    return true;                            // motif complete
}
```

Register the motif as an Ember subcomponent just like any other (see
[Creating Motifs](./CreatingMotifs)):

```cpp
SST_ELI_REGISTER_SUBCOMPONENT(
    MyNetworkIOMotif, "ember", "MyNetworkIOMotif",
    SST_ELI_ELEMENT_VERSION(1,0,0),
    "My custom NetworkIO motif",
    SST::Ember::EmberGenerator)
```

The full reference implementation is
`sst-elements/src/sst/elements/ember/networkIO/motifs/emberTestNetworkIO.cc`.
