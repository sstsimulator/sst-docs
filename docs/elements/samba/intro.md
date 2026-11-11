---
title: samba
---

The *samba* library provides a memory management unit (MMU) for use with processor and memory libraries that leverage the [StandardMem](../../core/iface/StandardMem/class) interface. Samba includes support for multi-level TLBs and page table walks.

:::note At a Glance

**Source Code:** [sst-elements/.../samba](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/samba) &nbsp;  
**SST Name:** `samba` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info Samba` or `sst-info Samba.<element>` to see each element's parameters, ports, and statistics. The element library is named `Samba` (capitalized), unlike the directory.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `Samba` | `Samba` | Component | MMU with per-core multi-level TLB hierarchies, multiple page sizes, page-table-walk caches, and page walks; sits between each core (`cpu_to_mmu<N>`) and its cache (`mmu_to_cache<N>`). Can be loaded as just `"Samba"` |
| `Samba` | `SimpleTLB` | Component | Translates one fixed virtual address range to a physical range; for simple tests that need translation without a full MMU |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/samba/tests/gupsgen_mmu.py --->
```python title="A Miranda core with a two-level Samba TLB hierarchy (based on samba/tests/gupsgen_mmu.py)"
import sst

memory_mb = 1024

# Core
cpu = sst.Component("cpu", "miranda.BaseCPU")
gen = cpu.setSubComponent("generator", "miranda.GUPSGenerator")
gen.addParams({
    "count" : 10000,
    "max_address" : (memory_mb // 2) * 1024 * 1024,
})

# MMU: two TLB levels, each supporting 4KB, 2MB, and 1GB pages
mmu = sst.Component("mmu0", "Samba.Samba")
mmu.addParams({
    "corecount" : 1,
    "clock" : "2 Ghz",
    "os_page_size" : 2048,   # OS allocates 2MB pages (value in KB)
    "levels" : 2,
    # L1 TLB
    "sizes_L1" : 3,
    "page_size1_L1" : 4, "size1_L1" : 64, "assoc1_L1" : 4,
    "page_size2_L1" : 2048, "size2_L1" : 32, "assoc2_L1" : 4,
    "page_size3_L1" : 1024 * 1024, "size3_L1" : 4, "assoc3_L1" : 4,
    "latency_L1" : 4,
    "max_width_L1" : 3,
    "max_outstanding_L1" : 2,
    "parallel_mode_L1" : 1,
    # L2 TLB
    "sizes_L2" : 3,
    "page_size1_L2" : 4, "size1_L2" : 1536, "assoc1_L2" : 12,
    "page_size2_L2" : 2048, "size2_L2" : 1536, "assoc2_L2" : 12,
    "page_size3_L2" : 1024 * 1024, "size3_L2" : 16, "assoc3_L2" : 4,
    "latency_L2" : 10,
    "max_width_L2" : 4,
    "max_outstanding_L2" : 2,
    "parallel_mode_L2" : 0,
    # Page table walk and page-table-walk caches (PTWC) for each of the 4 page-table levels
    "page_walk_latency" : 30,
    "size1_PTWC" : 32, "assoc1_PTWC" : 4,
    "size2_PTWC" : 32, "assoc2_PTWC" : 4,
    "size3_PTWC" : 32, "assoc3_PTWC" : 4,
    "size4_PTWC" : 32, "assoc4_PTWC" : 4,
    "latency_PTWC" : 10,
    "max_outstanding_PTWC" : 4,
})

# L1 cache and memory
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

memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({ "clock" : "1GHz" })
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "50 ns",
    "mem_size" : str(memory_mb * 1024 * 1024) + "B",
})

# Core -> MMU -> L1 -> memory
sst.Link("cpu_mmu").connect((cpu, "cache_link", "50ps"), (mmu, "cpu_to_mmu0", "50ps"))
sst.Link("mmu_l1").connect((mmu, "mmu_to_cache0", "50ps"), (l1cache, "highlink", "50ps"))
sst.Link("l1_mem").connect((l1cache, "lowlink", "50ps"), (memctrl, "highlink", "50ps"))

# Print TLB statistics at the end of the run
sst.setStatisticLoadLevel(1)
mmu.enableAllStatistics()
```

### Additional Documentation
A technical report on the Samba library is available [here](https://www.osti.gov/biblio/1528796).

