---
title: opal
---

The *opal* library provides memory allocation support for simulations of multi-node architectures using multiple [Ariel](../ariel/intro) instances. 

:::note At a Glance

**Source Code:** [sst-elements/.../opal](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/opal) &nbsp;  
**SST Name:** `opal` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 9.1

:::

### Required dependencies
*None*

### Optional dependencies 
*None*

## Elements
Use `sst-info Opal` or `sst-info Opal.<element>` to see each element's parameters, ports, and statistics. The element library is named `Opal` (capitalized), unlike the directory.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `Opal` | `Opal` | Component | Central memory allocation manager; allocates physical memory to nodes and handles their allocation requests and page faults. Can be loaded as just `"Opal"` |
| `Opal` | `MemoryManagerOpal` | SubComponent | Ariel memory manager (in Ariel's `memmgr` slot) that sends allocation requests to `Opal`; uses another memory manager, such as `ariel.MemoryManagerSimple`, in its `translator` slot for address translation |
| `Opal` | `PageFaultHandler` | SubComponent | Page fault handler for a `Samba` MMU (its `pagefaulthandler` slot) that gets pages from `Opal` |
| `Opal` | `OpalMemNIC` | SubComponent | Memory-hierarchy network interface for caches and memories in multi-node Opal configurations; used in place of `memHierarchy.MemNIC` |

Opal configurations use [Ariel](../ariel/intro.md) and [Samba](../samba/intro.md). See `opal/tests/basic_1node_1smp.py` and `opal/tests/basic_2node_1smp.py` for complete examples.

## Additional Documentation
A technical report on the Opal library is available [here](https://www.osti.gov/biblio/1467164).

