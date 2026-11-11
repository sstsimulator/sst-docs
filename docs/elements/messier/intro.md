---
title: messier
---

The *messier* library models a non-volatile memory (NVM) DIMM architecture. The library can be used in conjunction with other SST core and memory system models to simulate an architecture integrating NVDIMMs. Messier is supported as a memory model for [memHierarchy-based](../memHierarchy/intro.md) memory architectures.

:::note At a Glance

**Source Code:** [sst-elements/.../messier](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/messier) &nbsp;  
**SST Name:** `messier` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies 
*None*

## Elements
Use `sst-info Messier` or `sst-info Messier.Messier` to see its parameters, ports, and statistics. The element library is named `Messier` (capitalized), unlike the directory.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `Messier` | `Messier` | Component | NVM DIMM model with banks, a write buffer, and power/current limits on concurrent reads and writes. Can be loaded as just `"Messier"` |

To use Messier as main memory, set a `memHierarchy.MemController`'s backend to `memHierarchy.Messier` and connect the backend's `nvm_link` port to the Messier component's `bus` port.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/messier/tests/gupsgen.py --->
```python title="A Miranda core with Messier NVM as main memory (based on messier/tests/gupsgen.py)"
import sst

memory_mb = 128

# Core and L1 cache
cpu = sst.Component("cpu", "miranda.BaseCPU")
gen = cpu.setSubComponent("generator", "miranda.GUPSGenerator")
gen.addParams({
    "count" : 10000,
    "max_address" : (memory_mb // 2) * 1024 * 1024,
})

l1cache = sst.Component("l1cache", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "2",
    "cache_frequency" : "2 Ghz",
    "replacement_policy" : "lru",
    "coherence_protocol" : "MESI",
    "associativity" : "4",
    "cache_line_size" : "64",
    "L1" : "1",
    "cache_size" : "8KB",
})

# Memory controller with the Messier backend
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({
    "clock" : "1024 MHz",
    "backing" : "none",
    "addr_range_start" : 0,
})
backend = memctrl.setSubComponent("backend", "memHierarchy.Messier")
backend.addParams({ "mem_size" : "1024MB" })

# NVM model
nvm = sst.Component("NVMmemory", "Messier.Messier")
nvm.addParams({
    "clock" : "1GHz",
    "tCL" : 30,
    "tRCD" : 300,
    "tCL_W" : 1000,
    "write_buffer_size" : 32,
    "flush_th" : 90,
    "num_banks" : 32,
    "max_outstanding" : 32,
    "max_current_weight" : 160,
    "read_weight" : 5,
    "write_weight" : 50,
    "max_writes" : 4,
})

sst.Link("cpu_l1").connect((cpu, "cache_link", "1000ps"), (l1cache, "highlink", "1000ps"))
sst.Link("l1_mem").connect((l1cache, "lowlink", "50ps"), (memctrl, "highlink", "50ps"))
sst.Link("backend_nvm").connect((backend, "nvm_link", "50ps"), (nvm, "bus", "50ps"))

# Print NVM statistics at the end of the run
sst.setStatisticLoadLevel(1)
nvm.enableAllStatistics()
```

## Additional Documentation
A technical report on the messier library is available [here](https://www.osti.gov/biblio/1367483).

