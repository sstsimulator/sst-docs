---
title: ariel
---

The *ariel* library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The included frontend leverages Pin to dynamically trace a natively executing x86 application. This frontend supports threaded applications but not MPI applications. Ariel supports memory models that use the [StandardMem](../../core/iface/StandardMem/class.md) interface. 

:::note At a Glance

**Source Code:** [sst-elements/.../ariel](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ariel) &nbsp;  
**SST Name:** `ariel` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 14.1

:::

### Required dependencies
* **Pin** Required for the built-in Pintool tracer. Note that the ariel CPU model will build without Pin but it is required for the included frontend tracer.

### Optional dependencies
* **zlib** Enables generating a compressed execution trace

