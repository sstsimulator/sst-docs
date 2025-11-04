---
title: ariel
---

The *ariel* library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The framework includes frontends for Pin and PEBIL. Both support dynamic trace generation but Pin dynamically instruments the running application while PEBIL statically instruments it. PEBIL supports sampling which can improve simulation time. Running applications may use threads and/or MPI. Ariel supports memory models that use the [StandardMem](../../core/iface/StandardMem/class.md) interface. 

:::note At a Glance

**Source Code:** [sst-elements/.../ariel](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ariel) &nbsp;  
**SST Name:** `ariel` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 15.1

:::

### Required dependencies
Ariel requires a binary instrumentation tool to trace a running process. Either of these will work with the built-in tracers.
* **Pin** Required for the built-in Pintool tracer.
* **PEBIL** Required for the built-in PEBIL tracer.

### Optional dependencies
* **zlib** Enables generating a compressed execution trace

