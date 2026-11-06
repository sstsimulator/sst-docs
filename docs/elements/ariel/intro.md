---
title: ariel
---

The *ariel* library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The framework includes two frontends: one that uses Pin and one that uses PEBIL or EPAX. Both generate the trace while the application runs, but Pin instruments the application dynamically, while PEBIL (x86) and EPAX (Arm) instrument the binary statically ahead of time. PEBIL supports sampling, which can improve simulation time. Running applications may use threads and/or MPI. Ariel supports memory models that use the [StandardMem](../../core/iface/StandardMem/class.md) interface. 

:::note At a Glance

**Source Code:** [sst-elements/.../ariel](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ariel) &nbsp;  
**SST Name:** `ariel` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None* to build Ariel. 

To run a simulation, however, Ariel needs a frontend to trace the application, which in turn needs a binary instrumentation tool. Ariel stops with an error at startup if it cannot load a frontend. Use one of the following:
* **Pin 3** Used by the default frontend, `ariel.frontend.pin`. Ariel must be configured with `--with-pin`; without Pin, this frontend is not built.
* **PEBIL** (x86) or **EPAX** (Arm) Used by the `ariel.frontend.epa` frontend, which is always built. Run the frontend on an application that was already instrumented with one of these tools.
* **A custom frontend** Supply your own frontend SubComponent in the `frontend` slot of the Ariel component in the input file. The custom frontend must implement the `SST::ArielComponent::ArielFrontend` API.

### Optional dependencies
* **zlib** Enables generating a compressed execution trace

## Selecting a frontend
By default, Ariel loads `ariel.frontend.pin`. To use a different frontend, set the Ariel `frontend` parameter, or load a frontend SubComponent into the `frontend` slot.

```python
import sst

ariel = sst.Component("cpu", "ariel.ariel")
ariel.addParams({
    "corecount" : 1,
    "executable" : "./app.arielinst",   # Application instrumented with PEBIL or EPAX
    #highlight-next-line
    "frontend" : "ariel.frontend.epa",
})
```

## Elements
Use `sst-info ariel` or `sst-info ariel.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `ariel` | `ariel` | Component | CPU model driven by a dynamic trace of a running application; the trace comes from the frontend in its `frontend` slot or `frontend` parameter |
| `ariel` | `frontend.pin` | SubComponent | Default frontend; traces the application with Pin 3. Built only when configured with `--with-pin` |
| `ariel` | `frontend.epa` | SubComponent | Frontend for applications already instrumented with PEBIL (x86) or EPAX (Arm) |
| `ariel` | `MemoryManagerSimple` | SubComponent | Default memory manager for the `memmgr` slot; maps each virtual page to a physical page the first time it is touched |
| `ariel` | `MemoryManagerMalloc` | SubComponent | Memory manager for the `memmgr` slot that supports `malloc`/`free` into different memory pools (multi-level memory) |
| `ariel` | `TextTraceGenerator` | Module | Writes traced memory operations to a text file; selected with the `tracegen` parameter |
| `ariel` | `CompressedBinaryTraceGenerator` | Module | Writes traced memory operations to a compressed binary file; selected with the `tracegen` parameter. Built only when zlib is found |
