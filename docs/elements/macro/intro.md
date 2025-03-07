---
title: macro
---

The *macro* software package provides a simulator for large-scale parallel computer architectures. It permits the coarse-grained study of distributed-memory applications. The simulator is driven from either a trace file or skeleton application. The simulator architecture is modular, allowing it to easily be extended with additional network models, trace file formats, software services, and processor models. Macro originated as a standalone simulation infrastructure but it also inter-operates with the SST-Core. Work is underway to port some of macro's key functionality into the [mercury](../mercury/intro) element for more flexible use with other element libraries.

:::note At a Glance

**Source Code:** [sst-macro](https://github.com/sstsimulator/sst-macro) &nbsp;  
**SST Name:** `macro` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 14.1

:::

### Required dependencies
*None*

### Optional dependencies
* **OTF2** Version 2.0 or later, to support OTF2 trace replay
* **VTK** Version 8.1 or later, for creating Exodus files for traffic visualization
* **Paraview** Version 5.0 or later, for visualizing Exodus files
* **Doxygen** For source code documentation
* **Graphviz** For source code documentaiton
* **KCacheGrind** or **QCacheGrind** For displaying call graphs
* **Clang development libraries** To enable SST source-to-source compiler

## Additional Documentation
Macro includes [user](https://github.com/sstsimulator/sst-macro/blob/v13.1.0_beta/docs/manual/manual.md) and [developer](https://github.com/sstsimulator/sst-macro/blob/v13.1.0_beta/docs/developer/developer.md) guides. 
