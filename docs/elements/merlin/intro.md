---
title: merlin
---

*Merlin* consists of models used for the simulation of high-performance interconnects. The models conform to the [SimpleNetwork](../../core/iface/SimpleNetwork/class) interface and consist of a configurable input/output queued high-radix router, and network interface for use by the endpoint model.  The router supports multiple network topologies and has pluggable implementations for crossbar arbitration and output arbitration. Merlin is primarily designed to model system-level interconnects, but is sufficiently flexible to be used as a node-level network as well.

:::note At a Glance

**Source Code:** [sst-elements/.../merlin](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/merlin) &nbsp;  
**SST Name:** `merlin` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info merlin` or `sst-info merlin.<element>` to see each element's parameters, ports, and statistics. Most networks are built with the `sst.merlin.*` Python modules (`sst.merlin.base`, `sst.merlin.topology`, `sst.merlin.router`, `sst.merlin.interface`, `sst.merlin.endpoint`, and `sst.merlin.targetgen`) rather than by creating these elements directly; see the example below. The top-level `sst.merlin` module is an older, deprecated API kept for existing scripts and should not be used for new configurations.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `merlin` | `hr_router` | Component | High-radix router; the router used by all Merlin topologies |
| `merlin` | `Bridge` | Component | Bridge that connects two separate Merlin networks |
| `merlin` | `trafficgen` | Component | Endpoint that generates traffic using a configurable address pattern |
| `merlin` | `offered_load` | Component | Endpoint that measures latency as offered load varies |
| `merlin` | `background_traffic` | Component | Endpoint that generates pattern-based background traffic alongside other network jobs |
| `merlin` | `test_nic` | Component | Test endpoint that checks basic network functionality |
| `merlin` | `bisection_test` | Component | Test endpoint that measures network bisection bandwidth |
| `merlin` | `pt2pt_test` | Component | Test endpoint that measures point-to-point latency and bandwidth |
| `merlin` | `route_test` | Component | Test endpoint that checks routing |
| `merlin` | `shift_nic` | Component | Test endpoint that sends a shift traffic pattern |
| `merlin` | `simple_patterns.incast` | Component | Test endpoint that sends an incast traffic pattern |
| `merlin` | `simple_patterns.empty` | Component | Endpoint that connects to the network but sends no traffic; fills unused network ports |
| `merlin` | `linkcontrol` | SubComponent | Standard network interface for endpoints (`SimpleNetwork` API) |
| `merlin` | `reorderlinkcontrol` | SubComponent | Network interface that restores packet order for networks that can deliver packets out of order |
| `merlin` | `endpointNIC` | SubComponent | Network interface with a pipeline of pluggable functions (e.g., `sourceRoutingPlugin`) |
| `merlin` | `sourceRoutingPlugin` | SubComponent | `endpointNIC` plugin that adds source-routing headers to packets |
| `merlin` | `portcontrol` | SubComponent | Port controller used by `hr_router` for each router port |
| `merlin` | `arb.output.basic` | SubComponent | Basic output-port arbitration for `portcontrol` |
| `merlin` | `arb.output.qos.multi` | SubComponent | Multi-level output-port arbitration with quality-of-service support for `portcontrol` |
| `merlin` | `xbar_arb_lru` | SubComponent | Least-recently-used crossbar arbitration for `hr_router` |
| `merlin` | `xbar_arb_lru_infx` | SubComponent | Least-recently-used crossbar arbitration for `hr_router`, modeling an "infinite" crossbar |
| `merlin` | `xbar_arb_age` | SubComponent | Age-based crossbar arbitration for `hr_router` |
| `merlin` | `xbar_arb_rand` | SubComponent | Random crossbar arbitration for `hr_router` |
| `merlin` | `xbar_arb_rr` | SubComponent | Round-robin crossbar arbitration for `hr_router` |
| `merlin` | `singlerouter` | SubComponent | Topology with a single router |
| `merlin` | `mesh` | SubComponent | Multi-dimensional mesh topology |
| `merlin` | `torus` | SubComponent | Multi-dimensional torus topology |
| `merlin` | `hyperx` | SubComponent | Multi-dimensional HyperX topology |
| `merlin` | `fattree` | SubComponent | Fat-tree topology |
| `merlin` | `dragonfly` | SubComponent | Dragonfly topology with an all-to-all pattern within each group |
| `merlin` | `polarfly` | SubComponent | PolarFly topology, a diameter-2 topology that scales to large networks at low cost |
| `merlin` | `polarstar` | SubComponent | PolarStar topology, a highly scalable diameter-3 topology |
| `merlin` | `anytopo` | SubComponent | Topology read from an external file; supports source routing and per-hop destination-tag routing |
| `merlin` | `targetgen.uniform` | SubComponent | Traffic target generator that picks uniformly random destinations |
| `merlin` | `targetgen.bit_complement` | SubComponent | Traffic target generator that sends to the bit-complement destination (`num_peers - 1 - id`) |
| `merlin` | `targetgen.shift` | SubComponent | Traffic target generator that sends to the destination `shift` endpoints away |
| `merlin` | `circuit_network_inspector` | SubComponent | Network inspector that counts circuits (as in circuit switching) through a router |
| `merlin` | `test_network_inspector` | SubComponent | Network inspector used to test the `NetworkInspector` API |
| `merlin` | `arb.base.single.lru` | Module | Least-recently-used arbitration helper, used when one match per round is needed |
| `merlin` | `arb.base.single.roundrobin` | Module | Round-robin arbitration helper, used when one match per round is needed |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/tests/polarfly_455_test.py --->
```python title="Building a 4x4 torus with the sst.merlin.* modules (based on merlin/tests/polarfly_455_test.py)"
import sst
from sst.merlin.base import *
from sst.merlin.endpoint import *
from sst.merlin.interface import *
from sst.merlin.topology import *

# Topology
topo = topoTorus()
topo.shape = "4x4"
topo.width = "1x1"
topo.local_ports = 1
topo.link_latency = "20ns"

# Router
router = hr_router()
router.link_bw = "4GB/s"
router.flit_size = "8B"
router.xbar_bw = "6GB/s"
router.input_latency = "20ns"
router.output_latency = "20ns"
router.input_buf_size = "4kB"
router.output_buf_size = "4kB"
router.xbar_arb = "merlin.xbar_arb_lru"
topo.router = router

# Endpoints and their network interface
networkif = LinkControl()
networkif.link_bw = "4GB/s"
networkif.input_buf_size = "1kB"
networkif.output_buf_size = "1kB"

ep = TestJob(0, topo.getNumNodes())
ep.network_interface = networkif

system = System()
system.setTopology(topo)
system.allocateNodes(ep, "linear")
system.build()
```
