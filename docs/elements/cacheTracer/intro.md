---
title: cacheTracer
---

The *cacheTracer* can be used to generate a trace of events between any CPU and memHierarchy components. It has two ports, 'northBus' (connects to the CPU component) and 'southBus' (memory system component). CacheTracer also keeps track of the addresses of the messages passing through from its one port to another. It performs following tasks:
* Count number of events occurring from one port to another.
* Generates a histogram of request addresses of events passing through it.
* Note: cacheTracer assumes the first message with a given event-ID will pass from the northBus to the southBus and response messages will flow the other way. With this assumption, for every event-ID, cacheTracer calculates the time between when the event-ID appears on northBus and its response on southBus. The difference time is defined as "Access Latency". The access latencies are recorded in nanoseconds(ns). At the end of the simulation, a histogram is built capturing these latencies.

:::note At a Glance

**Source Code:** [sst-elements/.../cacheTracer](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/cacheTracer) &nbsp;  
**SST Name:** `cacheTracer` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1

::: 

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info cacheTracer` or `sst-info cacheTracer.cacheTracer` to see its ports and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `cacheTracer` | `cacheTracer` | Component | Sits on a link between two memHierarchy components (`northBus` toward the CPU, `southBus` toward memory), counts and optionally traces the events that pass through, and records address and access-latency histograms |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/cacheTracer/tests/test_cacheTracer_1.py --->
```python title="Tracing the events between a CPU and its L1 cache (based on cacheTracer/tests/test_cacheTracer_1.py)"
import sst

sst.setProgramOption("stop-at", "1ms")

# Test CPU
cpu = sst.Component("cpu0", "memHierarchy.standardCPU")
cpu.addParams({
    "memFreq" : 5,
    "memSize" : "100KiB",
    "clock" : "2GHz",
    "rngseed" : 111,
    "maxOutstanding" : 16,
    "opCount" : 1000,
    "reqsPerIssue" : 2,
    "write_freq" : 35,
    "read_freq" : 65,
})
iface = cpu.setSubComponent("memory", "memHierarchy.standardInterface")

# Tracer between the CPU and the L1 cache
tracer = sst.Component("tracer", "cacheTracer.cacheTracer")
tracer.addParams({
    "clock" : "2 Ghz",
    "statistics" : 1,       # print statistics at the end of the run
    "pageSize" : 4096,
    "accessLatencyBins" : 10,
})

# L1 cache and memory
l1cache = sst.Component("l1cache", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "5",
    "cache_frequency" : "2 Ghz",
    "replacement_policy" : "lru",
    "coherence_protocol" : "MSI",
    "associativity" : "4",
    "cache_line_size" : "64",
    "L1" : "1",
    "cache_size" : "4 KB",
})
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({ "clock" : "2 Ghz" })
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({ "mem_size" : "1024MiB" })

sst.Link("cpu_tracer").connect((iface, "lowlink", "100ps"), (tracer, "northBus", "100ps"))
sst.Link("tracer_l1").connect((tracer, "southBus", "100ps"), (l1cache, "highlink", "100ps"))
sst.Link("l1_mem").connect((l1cache, "lowlink", "100ps"), (memctrl, "highlink", "100ps"))
```
