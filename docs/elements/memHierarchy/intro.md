---
title: memHierarchy
---

The *memHierarchy* library is a collection of cache, scratchpad, directory, and memory components that can be used to build memory systems. The components are generally designed to be interoperable. The library implements SST's [`StandardMemory`](../../core/iface/StandardMem/class.md) interface for interfacing between endpoints (CPU, GPU, other accelerator, etc.) and the memHierarchy memory system. Additionally, memHierarchy components can be connected to each other and endpoints via both both raw SST links and network libraries that implement the [`SimpleNetwork`](../../core/iface/SimpleNetwork/class.md) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../memHierarchy](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/memHierarchy) &nbsp;  
**SST Name:** `memHierarchy` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 15.0

:::

### Required dependencies
*None*

### Optional dependencies
MemHierarchy memories can optionally use any of the following simulators in place of the included timing models for main memory, scratchpad, and other components that load a backend timing model. SST-Elements must be compiled with the appropriate `--with-<SIMULATOR>=/path/to/sim` flag for the integration to be enabled. See the SST [dependency build instructions](http://sst-simulator.org/SSTPages/SSTBuildAndInstall_15dot0dot0_SeriesAdditionalExternalComponents/) for details.

* [CramSim](../cramsim/intro); included with sst-elements
* [HMCSim](https://github.com/tactcomplabs/gc64-hmcsim); [Download](https://github.com/tactcomplabs/gc64-hmcsim/archive/sst-8.0.0-release.zip)
* [messier](../messier/intro); included with sst-elements
* [Ramulator](https://github.com/CMU-SAFARI/ramulator/); [Download](https://github.com/CMU-SAFARI/ramulator/archive/master.zip)
* [Ramulator2](https://github.com/CMU-SAFARI/ramulator2/); Ramulator2 does not have releases; SST tests against commit `a26ee92f` **New in SST 15.0**

The following dependencies are no longer supported as of SST 15.0:
* [DramSim2](https://github.com/dramninjaUMD/DRAMSim2); [Download](https://github.com/dramninjasUMD/DRAMSim2/archive/v2.2.2.tar.gz)
* [DramSim3](https://github.com/umd-memsys/dramsim3); [Download](https://github.com/umd-memsys/dramsim3)
* [HBMDramSim](https://github.com/tactcomplabs/HBM); [Download](https://github.com/tactcomplabs/HBM/releases/tag/sst-8.0.0-release)
* [NVDIMMSim](https://github.com/jimstevens2001/NVDIMMSim/); [Download](https://github.com/jimstevens2001/NVDIMMSIM/archive/v2.0.0.tar.gz)
* [HybridSim](https://github.com/jimstevens2001/HybridSim); [Download](https://github.com/jimstevens2001/HybridSim/archive/v2.0.1.tar.gz)

