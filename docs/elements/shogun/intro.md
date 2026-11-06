---
title: shogun
---

*Shogun* models a crossbar network. It implements SST's [SimpleNetwork](../../core/iface/SimpleNetwork/class) interface. 

:::note At a Glance

**Source Code:** [sst-elements/.../shogun](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/shogun) &nbsp;  
**SST Name:** `shogun` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info shogun` or `sst-info shogun.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `shogun` | `ShogunXBar` | Component | Arbitrated crossbar with `port_count` ports; round-robin arbitration by default |
| `shogun` | `ShogunNIC` | SubComponent | Network interface for endpoints attached to a `ShogunXBar` (`SimpleNetwork` API); e.g., in a `memHierarchy.MemNIC`'s `linkcontrol` slot |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/shogun/tests/basic_miranda.py --->
```python title="A Miranda core and a memory connected through a Shogun crossbar (based on shogun/tests/basic_miranda.py)"
import sst

# Core and L1 cache
cpu = sst.Component("cpu0", "miranda.BaseCPU")
gen = cpu.setSubComponent("generator", "miranda.GUPSGenerator")
gen.addParams({
    "count" : 10000,
    "max_address" : 512 * 1024 * 1024,
})

l1cache = sst.Component("l1cache0", "memHierarchy.Cache")
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
# The cache reaches the crossbar through a MemNIC with a ShogunNIC
l1_nic = l1cache.setSubComponent("lowlink", "memHierarchy.MemNIC")
l1_nic.addParams({ "group" : 1 })
l1_linkctrl = l1_nic.setSubComponent("linkcontrol", "shogun.ShogunNIC")

# Directory and memory on the other side of the crossbar
dirctrl = sst.Component("dirctrl0", "memHierarchy.DirectoryController")
dirctrl.addParams({
    "coherence_protocol" : "MESI",
    "entry_cache_size" : "1024",
    "addr_range_start" : 0,
    "addr_range_end" : 1024 * 1024 * 1024 - 1,
})
dir_nic = dirctrl.setSubComponent("highlink", "memHierarchy.MemNIC")
dir_nic.addParams({ "group" : 2 })
dir_linkctrl = dir_nic.setSubComponent("linkcontrol", "shogun.ShogunNIC")

memctrl = sst.Component("memory0", "memHierarchy.MemController")
memctrl.addParams({
    "clock" : "1GHz",
    "addr_range_start" : 0,
    "addr_range_end" : 1024 * 1024 * 1024 - 1,
})
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "1ns",
    "mem_size" : "1024MiB",
})

# Crossbar
xbar = sst.Component("shogunxbar", "shogun.ShogunXBar")
xbar.addParams({
    "clock" : "1.0GHz",
    "port_count" : 2,
})

# Links
sst.Link("cpu_l1").connect((cpu, "cache_link", "100ps"), (l1cache, "highlink", "100ps"))
sst.Link("xbar_l1").connect((xbar, "port0", "100ps"), (l1_linkctrl, "port", "100ps"))
sst.Link("xbar_dir").connect((xbar, "port1", "100ps"), (dir_linkctrl, "port", "100ps"))
sst.Link("dir_mem").connect((dirctrl, "lowlink", "500ps"), (memctrl, "highlink", "50ps"))
```
