---
title: gensa
---

This element provides a general-purpose neuromorphic processor core. It performs standard leaky-integrate-and-fire (LIF) dynamics for simulated neurons, and exchanges spike messages between neurons. Currently, this core is standalone. An upcoming release will add the ability to connect cores via standard network elements.

:::info

This element has been interchangeably referred to as "gensa" and "GNA" in the past but the element has now been renamed to "gensa".

:::

:::note At a Glance

**Source Code:** [sst-elements/.../gensa](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/gensa) &nbsp;  
**SST Name:** `gensa` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Experimental &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info gensa` or `sst-info gensa.core` to see its parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `gensa` | `core` | Component | Neuromorphic core that simulates leaky-integrate-and-fire neurons read from a model file (`modelPath`) for a set number of time steps; connects to memory (`mem_link` port or `memory` slot) and to a network (`networkIF` slot) |

The example below needs the neuron model file `gensa/tests/model` in the working directory.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/gensa/tests/test_gensa_1.py --->
```python title="A gensa core with memory and a single-router network (based on gensa/tests/test_gensa_1.py)"
import sst

# Neuromorphic core
core = sst.Component("gensa", "gensa.core")
core.addParams({
    "modelPath" : "model",  # neuron model file
    "dt" : 1,
    "steps" : 20,
    "clock" : "1GHz",
})

# Memory
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({
    "backing" : "malloc",
    "clock" : "1GHz",
    "addr_range_start" : 0,
})
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "mem_size" : "512MiB",
    "access_time" : "10ns",
})
sst.Link("core_mem").connect((core, "mem_link", "50ps"), (memctrl, "highlink", "50ps"))

# Network (a single router)
rtr = sst.Component("rtr", "merlin.hr_router")
rtr.addParams({
    "id" : 0,
    "num_ports" : 1,
    "flit_size" : "8B",
    "xbar_bw" : "32GB/s",
    "link_bw" : "32GB/s",
    "input_buf_size" : "64B",
    "output_buf_size" : "64B",
})
rtr.setSubComponent("topology", "merlin.singlerouter")

network_if = core.setSubComponent("networkIF", "merlin.linkcontrol")
network_if.addParams({ "link_bw" : "1GB/s" })
sst.Link("core_rtr").connect((network_if, "rtr_port", "50ps"), (rtr, "port0", "50ps"))
```
