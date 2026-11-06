---
title: cassini
---

The *cassini* element implements subcomponents that can be used for cache prefetch as well as generally tracking activity in memHierarchy caches. Cassini's subcomponents implement [memHierarchy's](../memHierarchy/intro) `CacheListener` subcomponent API. 

:::note At a Glance

**Source Code:** [sst-elements/.../cassini](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/cassini) &nbsp;  
**SST Name:** `cassini` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None* 

### Optional dependencies
*None* 

## Elements
Use `sst-info cassini` or `sst-info cassini.<element>` to see each element's parameters and statistics. Each element is a `memHierarchy.Cache` subcomponent: prefetchers go in the cache's `prefetcher` slot, and the trackers, which only observe, go in its `listener` slot.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `cassini` | `NextBlockPrefetcher` | SubComponent | Prefetcher that fetches the next cache line after each miss |
| `cassini` | `StridePrefetcher` | SubComponent | Prefetcher that detects strided access streams and fetches ahead along the stride |
| `cassini` | `PalaPrefetcher` | SubComponent | Stride prefetcher based on Palacharla and Kessler (ISCA 1994) stream buffers; keeps a per-stream table of address and stride |
| `cassini` | `AddrHistogrammer` | SubComponent | Listener that records histograms of reads and writes per page |
| `cassini` | `cacheLineTrack` | SubComponent | Listener that records how each cache line was used (reads, writes, age, words touched) before eviction |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/cassini/tests/streamcpu-sp.py --->
```python title="An L1 cache with a stride prefetcher (based on cassini/tests/streamcpu-sp.py)"
import sst

# Test CPU that streams loads and stores through memory
cpu = sst.Component("cpu", "memHierarchy.streamCPU")
cpu.addParams({
    "do_write" : "1",
    "num_loadstore" : "100000",
    "commFreq" : "100",
    "memSize" : "524288",
})
iface = cpu.setSubComponent("memory", "memHierarchy.standardInterface")

# L1 cache with a cassini prefetcher in its "prefetcher" slot
l1cache = sst.Component("l1cache", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "2",
    "cache_frequency" : "2 Ghz",
    "replacement_policy" : "lru",
    "coherence_protocol" : "MESI",
    "associativity" : "4",
    "cache_line_size" : "64",
    "L1" : "1",
    "cache_size" : "8 KB",
})
prefetcher = l1cache.setSubComponent("prefetcher", "cassini.StridePrefetcher")
prefetcher.addParams({ "reach" : 2 })

# Memory
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({
    "clock" : "1GHz",
    "addr_range_start" : 0,
    "backing" : "none",
})
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "1000 ns",
    "mem_size" : "512MiB",
})

link_cpu_cache = sst.Link("link_cpu_cache")
link_cpu_cache.connect((iface, "lowlink", "1000ps"), (l1cache, "highlink", "1000ps"))
link_cache_mem = sst.Link("link_cache_mem")
link_cache_mem.connect((l1cache, "lowlink", "50ps"), (memctrl, "highlink", "50ps"))

# Print prefetcher and cache statistics at the end of the run
sst.setStatisticLoadLevel(1)
prefetcher.enableAllStatistics()
```
