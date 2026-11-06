---
title: kingsley
---


*Kingsley* is used to model on-chip networks that us a mesh interconnect.  Kingsley routers are input queued and will self-discover the network configuration, including the ability to have multiple endpoints connected to each router. Kingsley adheres to the [SimpleNetwork](../../core/iface/SimpleNetwork/class) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../kingsley](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/kingsley) &nbsp;  
**SST Name:** `kingsley` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None* 

## Elements
Use `sst-info kingsley` or `sst-info kingsley.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `kingsley` | `noc_mesh` | Component | Input-queued 2-D mesh router with `north`, `south`, `east`, and `west` ports plus one or more `local` endpoint ports; discovers its position in the mesh during initialization |
| `kingsley` | `linkcontrol` | SubComponent | Network interface for endpoints attached to a `noc_mesh` (`SimpleNetwork` API) |

Mesh ports that are not needed (e.g., on the edge of the mesh) can be left unconnected. By default, endpoint network IDs use a sparse map that also reserves IDs for positions on the mesh edges. Set `use_dense_map` to `true` on every router to number the endpoints 0 to N-1. The example below builds a 2x2 mesh with one Merlin test endpoint per router.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/kingsley/tests/noc_mesh_32_test.py --->
```python title="A 2x2 Kingsley mesh with test endpoints (based on kingsley/tests/noc_mesh_32_test.py)"
import sst

x_size = 2
y_size = 2
link_latency = "800ps"

links = {}
def getLink(name):
    if name not in links:
        links[name] = sst.Link(name)
    return links[name]

for y in range(y_size):
    for x in range(x_size):
        rtr = sst.Component("rtr_%d_%d" % (x, y), "kingsley.noc_mesh")
        rtr.addParams({
            "local_ports" : 1,
            "link_bw" : "32GB/s",
            "input_buf_size" : "64B",
            "flit_size" : "32B",
            # Number endpoints 0..N-1 (the default sparse map also numbers edge positions)
            "use_dense_map" : "true",
        })

        # Connect to neighboring routers; edge ports stay unconnected
        if y < y_size - 1:
            rtr.addLink(getLink("ns_%d_%d" % (x, y)), "north", link_latency)
        if y > 0:
            rtr.addLink(getLink("ns_%d_%d" % (x, y - 1)), "south", link_latency)
        if x < x_size - 1:
            rtr.addLink(getLink("ew_%d_%d" % (x, y)), "east", link_latency)
        if x > 0:
            rtr.addLink(getLink("ew_%d_%d" % (x - 1, y)), "west", link_latency)

        # One endpoint on each router's local port
        ep = sst.Component("ep_%d_%d" % (x, y), "merlin.test_nic")
        ep.addParams({
            "num_peers" : x_size * y_size,
            "message_size" : "64B",
            "num_messages" : 10,
        })
        nic = ep.setSubComponent("networkIF", "kingsley.linkcontrol")
        nic.addParam("link_bw", "1GB/s")

        link = getLink("local_%d_%d" % (x, y))
        rtr.addLink(link, "local0", link_latency)
        nic.addLink(link, "rtr_port", link_latency)
```
