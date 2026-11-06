---
title: rdmaNic
---

The *rdmaNic* library provides a Network Interface Controller (NIC) model that integrates with memory models that use the [SST:StandardMem](../../core/iface/StandardMem/class) interface and with network models that use the [SST:SimpleNetwork](../../core/iface/SimpleNetwork/class) interface. The NIC provides a memory mapped I/O interface for the CPU to write commands to. The NIC is also a bus mastering device in that it can directly read and write memory. This model was developed to be used with [Vanadis](../vanadis/intro) but the CPU interface is generic and can be driven by other CPU models.

:::note At a Glance

**Source Code:** [sst-elements/.../rdmaNic](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/rdmaNic) &nbsp;  
**SST Name:** `rdmaNic` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info rdmaNic.nic` to see its parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `rdmaNic` | `nic` | Component | RDMA NIC for one node; the host programs it through memory-mapped I/O (`mmio` slot), it moves data by DMA (`dma` slot), and it reaches the network through a `SimpleNetwork` interface (`rtrLink` slot) |

The NIC is used with [Vanadis](../vanadis/intro.md) nodes running RDMA or MPI applications (see `rdmaNic/tests/runVanadis.py`, which builds the full multi-node system from `node.py` and `rdmaNic.py`). The excerpt below shows the NIC itself.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/rdmaNic/tests/rdmaNic.py --->
```python title="Setting up an rdmaNic for one node (excerpt from rdmaNic/tests/rdmaNic.py)"
import sst

node_id = 0
num_nodes = 2

nic = sst.Component("node%d.nic" % node_id, "rdmaNic.nic")
nic.addParams({
    "clock" : "1GHz",
    "nicId" : node_id,
    "numNodes" : num_nodes,
    "pesPerNode" : 1,
    "baseAddr" : 0x80000000,
    "cmdQSize" : 64,
    "maxMemReqs" : 256,
    "useDmaCache" : "true",
})

# Host access to the NIC's registers, and the NIC's DMA path
mmio_if = nic.setSubComponent("mmio", "memHierarchy.standardInterface")
dma_if = nic.setSubComponent("dma", "memHierarchy.standardInterface")

# Network interface
net_if = nic.setSubComponent("rtrLink", "merlin.linkcontrol")
net_if.addParams({
    "link_bw" : "16GB/s",
    "input_buf_size" : "14KB",
    "output_buf_size" : "14KB",
})

# ... connect mmio_if to the node's memory bus, dma_if (through a TLB) to a
#     DMA cache, and (net_if, "rtr_port") to a router port (see runVanadis.py)
```
