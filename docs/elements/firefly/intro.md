---
title: firefly
---

The *firefly* library provides network data movement modeling functionality for MPI-like and SHMEM-like APIs. The network interface is implemented via [SST:SimpleNetwork](../../core/iface/SimpleNetwork/class) and the application interface is implemented via [Hermes:MP and Hermes:Shmem](../hermes/intro). This model is typically driven by [ember](../ember/intro).

:::note At a Glance

**Source Code:** [sst-elements/.../firefly](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/firefly) &nbsp;  
**SST Name:** `firefly` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*


## Elements
Use `sst-info firefly` or `sst-info firefly.<element>` to see each element's parameters, ports, and statistics. Most of these elements are loaded internally by `firefly.nic` or `firefly.hades`, or are selected through parameters. Configurations rarely create them directly. Instead, use the `sst.ember` Python module, which imports `sst.firefly`. It builds the NIC and OS stack and supplies defaults through the `firefly-defaults` platform (see the example below). The older `ember/test/emberLoad.py` script is deprecated.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `firefly` | `nic` | Component | Network interface for a node; moves message data between the node's cores and the network through a `SimpleNetwork` interface (e.g., `merlin.linkcontrol`) |
| `firefly` | `loopBack` | Component | Carries messages between cores on the same node without going through the network |
| `firefly` | `hades` | SubComponent | Hermes OS model for one core; set in the Ember engine's `OS` slot and provides the services the API modules use to reach the NIC |
| `firefly` | `hadesMP` | SubComponent | MPI-like message-passing API (Hermes `MP` interface); selected with the Ember engine's `api.N.module` parameter |
| `firefly` | `hadesSHMEM` | SubComponent | SHMEM-like one-sided API, with optional fabric-attached memory (FAM) support |
| `firefly` | `hadesMisc` | SubComponent | Miscellaneous node queries (node number and number of nodes) |
| `firefly` | `hadesNetworkIO` | SubComponent | Network storage I/O API for reading from and writing to storage nodes |
| `firefly` | `CtrlMsgProto` | SubComponent | Message protocol used by `hades` to send and receive messages; set in the `proto` slot |
| `firefly` | `ctrlMsg` | SubComponent | Message-queue processing for `CtrlMsgProto` (posted and unexpected receives, short/long protocol); set in its `process` slot |
| `firefly` | `ctrlMsgMemory` | SubComponent | Models memory copy and memory-region registration costs for `CtrlMsgProto`; loaded automatically |
| `firefly` | `msgTiming` | SubComponent | Models per-message setup and completion latencies for `CtrlMsgProto`; loaded automatically |
| `firefly` | `functionSM` | SubComponent | Runs the state machine for each API call made through `hadesMP`; loaded automatically by `hades` |
| `firefly` | `VirtNic` | SubComponent | Per-core virtual NIC that connects a core's `hades` to the shared `firefly.nic` |
| `firefly` | `SimpleMemory` | SubComponent | Host and NIC memory timing model for `firefly.nic`, enabled with `useSimpleMemoryModel` |
| `firefly` | `TrivialMemory` | SubComponent | Memory model with zero latency for `firefly.nic`, enabled with `useTrivialMemoryModel` |
| `firefly` | `detailedInterface` | SubComponent | Connects the NIC's `SimpleMemory` model to a detailed memory system through a `StandardMem` interface |
| `firefly` | `SimpleSSD` | SubComponent | Simple SSD model for storage nodes, enabled on the NIC with `useSimpleSSD` |
| `firefly` | `Init`, `Fini`, `Rank`, `Size`, `Send`, `Recv`, `Cancel`, `Test`, `Testany`, `Wait`, `WaitAll`, `WaitAny`, `MakeProgress`, `Barrier`, `Allreduce`, `Allgather`, `Alltoallv`, `Gatherv`, `Scatterv`, `CommCreate`, `CommDestroy`, `CommSplit` | Module | State machines for the individual `hadesMP` calls; loaded automatically by `functionSM` |
| `firefly` | `LatencyMod` | Module | Latency that depends on message size, from a base value plus per-size-range linear or multiplier terms; used for message-timing and memcpy parameters |
| `firefly` | `ScaleLatMod` | Module | Latency interpolated linearly across per-size ranges; alternative to `LatencyMod` |
| `firefly` | `SimpleNodePerf` | Module | Node compute model based on node FLOPS and memory bandwidth |
| `firefly` | `Group_FamNodeMapper` | Module | Maps fabric-attached memory (FAM) to nodes in strided groups, for `hadesSHMEM` |
| `firefly` | `RR_FamAddrMapper` | Module | Distributes FAM addresses across FAM nodes in round-robin blocks, for `hadesSHMEM` |

The example below runs an MPI allreduce on a 4x4 torus. It uses Merlin for the network and Ember for the motif, with firefly-modeled NICs on every node (see [ember](../ember/intro.md) and [merlin](../merlin/intro.md)).

<!--- SOURCE_CODE: sst-elements/src/sst/elements/ember/tests/dragon_128_allreduce.py --->
```python title="An Ember MPI allreduce on firefly NICs (based on ember/tests/dragon_128_allreduce.py)"
import sst
from sst.merlin.base import *
from sst.merlin.endpoint import *
from sst.merlin.interface import *
from sst.merlin.topology import *
from sst.ember import *

# Use firefly's default NIC and OS parameters
PlatformDefinition.setCurrentPlatform("firefly-defaults")

# Network
topo = topoTorus()
topo.shape = "4x4"
topo.width = "1x1"
topo.local_ports = 1
topo.link_latency = "20ns"

router = hr_router()
router.link_bw = "4GB/s"
router.flit_size = "8B"
router.xbar_bw = "6GB/s"
router.input_latency = "20ns"
router.output_latency = "20ns"
router.input_buf_size = "4kB"
router.output_buf_size = "4kB"
router.num_vns = 2
router.xbar_arb = "merlin.xbar_arb_lru"
topo.router = router

networkif = ReorderLinkControl()
networkif.link_bw = "4GB/s"
networkif.input_buf_size = "1kB"
networkif.output_buf_size = "1kB"

# One MPI job across every node; each node gets a firefly.nic and firefly.hades
ep = EmberMPIJob(0, topo.getNumNodes())
ep.network_interface = networkif
ep.addMotif("Init")
ep.addMotif("Allreduce")
ep.addMotif("Fini")
ep.nic.nic2host_lat = "100ns"

system = System()
system.setTopology(topo)
system.allocateNodes(ep, "linear")
system.build()
```
