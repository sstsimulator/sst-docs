---
title: llyr
---
The *llyr* spatial component is a highly configurable compute array capable of instantiating processing elements
(PEs) whose behavior can model simple Boolean gates or complex logic such as transcendental functions or any
type of compute that user would like to model. The PEs are connected via a simple direct-connect network. The
function and connectivity of the PEs are specified via a user-supplied input file that places no limits on the
size, connectivity, or composition of the compute fabric. 

:::note At a Glance

**Source Code:** [sst-elements/.../llyr](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/llyr) &nbsp;  
**SST Name:** `llyr` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** Never

:::

### Required dependencies
*None*

### Optional dependencies 
*None*


## Elements
Use `sst-info llyr` or `sst-info llyr.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `llyr` | `LlyrDataflow` | Component | Configurable dataflow array; reads the application graph (`application`), the hardware graph (`hardware_graph`), and optional initial memory (`mem_init`), and accesses memory through a `StandardMem` interface in its `iface` slot |
| `llyr` | `mapper.simple` | Module | Default mapper that places application nodes onto processing elements of the hardware graph; selected with the `mapper` parameter |
| `llyr` | `mapper.py` | Module | Mapper that runs an external Python mapping script (the `mapping_tool` parameter, e.g. `llyr/tools/pyMapper.py`) |

The example below needs the input files from `llyr/tests` (`gemm.in`, `graph_mesh_25.hdw`, and `int-1.mem`) in the working directory.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/llyr/tests/simple_test.py --->
```python title="A Llyr dataflow array running a GEMM kernel (based on llyr/tests/simple_test.py)"
import sst

clock = "1GHz"

# Dataflow array
df = sst.Component("df_0", "llyr.LlyrDataflow")
df.addParams({
    "clock" : clock,
    "application" : "gemm.in",              # application graph
    "hardware_graph" : "graph_mesh_25.hdw", # processing elements and their connections
    "mem_init" : "int-1.mem",               # initial memory contents
    "mapper" : "llyr.mapper.simple",
})
iface = df.setSubComponent("iface", "memHierarchy.standardInterface")

# L1 cache and memory
l1cache = sst.Component("df_l1", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "2",
    "cache_frequency" : clock,
    "replacement_policy" : "lru",
    "coherence_protocol" : "MESI",
    "cache_size" : "512B",
    "associativity" : "1",
    "cache_line_size" : "16",
    "L1" : "1",
})

memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({
    "backing" : "mmap",
    "addr_range_start" : "0",
    "clock" : clock,
})
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "100 ns",
    "mem_size" : "16384B",
})

sst.Link("df_l1").connect((iface, "lowlink", "1ps"), (l1cache, "highlink", "1ps"))
sst.Link("l1_mem").connect((l1cache, "lowlink", "5ps"), (memctrl, "highlink", "5ps"))
```
