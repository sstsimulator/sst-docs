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
**Last Released:** SST 15.1

::: 

### Required dependencies
*None*

### Optional dependencies
*None*

### Parameters
`cacheTracer` accepts the following parameters.
* **clock** Frequency for port (should be set to be same as CPU frequency).
* **debug** Print out debug info with increasing verbosity. To generate an address trace of events, set debug=8 and provide filename in tracePrefix.
* **tracePrefix** Filename for output trace-file generated when debug=8 is set. If no value is set, a trace will NOT be written.
* **statistics** Flag indicating whether to print stats at the end of the execution. 1= print stats, 0-don't print stats.
* **statsPrefix** Filename for output file where statistics will be dumped if "statistics" is set. If filename is NOT provided and "statistics" is set, stats will be printed to stdout.
* **pageSize** This value is used to set size of an individual bin in address histogram. Default value is 4096 (4k).
* **accessLatencyBins** This value is used to set total number of bins for access-latency histogram. Default value is 10.
