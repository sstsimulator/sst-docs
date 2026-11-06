---
title: memHierarchy
---

The *memHierarchy* library is a collection of cache, scratchpad, directory, and memory components that can be used to build memory systems. The components are generally designed to be interoperable. The library implements SST's [`StandardMemory`](../../core/iface/StandardMem/class.md) interface for interfacing between endpoints (CPU, GPU, other accelerator, etc.) and the memHierarchy memory system. Additionally, memHierarchy components can be connected to each other and endpoints via both both raw SST links and network libraries that implement the [`SimpleNetwork`](../../core/iface/SimpleNetwork/class.md) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../memHierarchy](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/memHierarchy) &nbsp;  
**SST Name:** `memHierarchy` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
MemHierarchy memories can optionally use any of the following simulators in place of the included timing models for main memory, scratchpad, and other components that load a backend timing model. SST-Elements must be configured with the simulator's flag (listed below) for the integration to be enabled. See the SST [dependency build instructions](http://sst-simulator.org/SSTPages/SSTBuildAndInstall_16dot1dot0_SeriesAdditionalExternalComponents/) for details.

* [CramSim](../cramsim/intro); included with sst-elements
* [HMCSim](https://github.com/tactcomplabs/gc64-hmcsim); configure with `--with-goblin-hmcsim=/path/to/hmcsim`; [Download](https://github.com/tactcomplabs/gc64-hmcsim/archive/sst-8.0.0-release.zip) *Deprecated as of SST 16.0; will be removed in SST 17.0.*
* [messier](../messier/intro); included with sst-elements
* [Ramulator](https://github.com/CMU-SAFARI/ramulator/); configure with `--with-ramulator=/path/to/ramulator`; [Download](https://github.com/CMU-SAFARI/ramulator/archive/master.zip) *Deprecated as of SST 16.0; will be removed in SST 17.0. Use Ramulator2 instead.*
* [Ramulator2](https://github.com/CMU-SAFARI/ramulator2/); configure with `--with-ramulator2=/path/to/ramulator2`; Ramulator2 does not have releases; SST tests against commit `011ccd7` **New in SST 15.0**

The following dependencies are no longer supported as of SST 15.0:
* [DramSim2](https://github.com/dramninjaUMD/DRAMSim2); [Download](https://github.com/dramninjasUMD/DRAMSim2/archive/v2.2.2.tar.gz)
* [DramSim3](https://github.com/umd-memsys/dramsim3); [Download](https://github.com/umd-memsys/dramsim3)
* [HBMDramSim](https://github.com/tactcomplabs/HBM); [Download](https://github.com/tactcomplabs/HBM/releases/tag/sst-8.0.0-release)
* [NVDIMMSim](https://github.com/jimstevens2001/NVDIMMSim/); [Download](https://github.com/jimstevens2001/NVDIMMSIM/archive/v2.0.0.tar.gz)
* [HybridSim](https://github.com/jimstevens2001/HybridSim); [Download](https://github.com/jimstevens2001/HybridSim/archive/v2.0.1.tar.gz)

## Elements
Use `sst-info memHierarchy` or `sst-info memHierarchy.<element>` to see each element's parameters, ports, and statistics. Links in the Description column point to the pages that describe an element in more detail.

### Caches, directories, and memories
| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `memHierarchy` | `Cache` | Component | Cache controller for any cache level; coherence, replacement, hashing, and prefetching are set through subcomponents (see [Caches](./cache.mdx)) |
| `memHierarchy` | `DirectoryController` | Component | MSI or MESI coherence directory |
| `memHierarchy` | `MemController` | Component | Memory controller; timing comes from the memory backend in its `backend` slot |
| `memHierarchy` | `CoherentMemController` | Component | Memory controller that also supports cache shootdowns |
| `memHierarchy` | `MemCacheController` | Component | Memory-side cache (e.g., HBM used as a cache in front of DDR) with its own memory backend |
| `memHierarchy` | `Scratchpad` | Component | Scratchpad memory, accessed by an endpoint with explicit scratchpad and remote-memory requests |
| `memHierarchy` | `Bus` | Component | Bus that connects several memHierarchy components (e.g., multiple L1s to one L2) |
| `memHierarchy` | `multithreadL1` | Component | Connects several CPUs to a single L1 cache as if they were hardware threads of one core |
| `memHierarchy` | `Sieve` | Component | Simple cache filter for modeling last-level caches, e.g. with Ariel (`MemoryManagerSieve`) |
| `memHierarchy` | `BroadcastShim` | Component | Connects a processor to multiple `Sieve`s (e.g., for private or semi-private last-level caches) |
| `memHierarchy` | `standardInterface` | SubComponent | `StandardMem` interface that endpoints load to send requests into memHierarchy (see [Connecting to MemHierarchy](./connecting.md) and [StandardMem Interface](./stdmem.mdx)) |
| `memHierarchy` | `MemoryManagerSieve` | SubComponent | Ariel memory manager (`memmgr` slot) that works with `Sieve` |

### Links and network interfaces
| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `memHierarchy` | `MemLink` | SubComponent | Direct link to another memHierarchy component; used in `highlink`/`lowlink` slots (see [highlink and lowlink](./cache.mdx#memlink)) |
| `memHierarchy` | `MemNIC` | SubComponent | Network interface for connecting memHierarchy components through a `SimpleNetwork` network (see [MemNIC](./cache.mdx#memnic)) |
| `memHierarchy` | `MemNICFour` | SubComponent | Network interface for split networks, with separate request, ack, forward, and data networks (see [MemNICFour](./cache.mdx#memnicfour)) |
| `memHierarchy` | `MemNetBridge` | SubComponent | Translator for a `merlin.Bridge` that connects two memory networks |
| `memHierarchy` | `networkMemoryInspector` | SubComponent | Network inspector that classifies the memory traffic going through a router |

### Cache policies
| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `memHierarchy` | `coherence.mesi_l1`, `coherence.mesi_inclusive`, `coherence.mesi_private_noninclusive`, `coherence.mesi_shared_noninclusive`, `coherence.incoherent_l1`, `coherence.incoherent` | SubComponent | Coherence protocol implementations; a cache selects one from its `L1`, `coherence_protocol`, and `cache_type` parameters (see [coherence](./cache.mdx#coherence)) |
| `memHierarchy` | `replacement.lru`, `replacement.lru-opt`, `replacement.lfu`, `replacement.lfu-opt`, `replacement.mru`, `replacement.mru-opt`, `replacement.random`, `replacement.nmru` | SubComponent | Replacement policies (see [replacement](./cache.mdx#replacement)) |
| `memHierarchy` | `hash.none`, `hash.linear`, `hash.xor` | SubComponent | Hash functions for mapping addresses to cache sets (see [hash](./cache.mdx#hash)) |
| `memHierarchy` | `emptyCacheListener` | SubComponent | Cache listener that does nothing; the default when no prefetcher or listener is set (see [prefetcher](./cache.mdx#prefetcher) and [listener](./cache.mdx#listener)) |

### Memory backends
| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `memHierarchy` | `simpleMem` | SubComponent | Memory with a constant access time |
| `memHierarchy` | `simpleDRAM` | SubComponent | Simplified DRAM timing model (banks and row buffers) |
| `memHierarchy` | `timingDRAM` | SubComponent | More detailed DRAM timing model (channels, ranks, banks); uses the address mappers, transaction queues, and page policies below |
| `memHierarchy` | `simpleAddrMapper`, `roundRobinAddrMapper`, `sandyBridgeAddrMapper` | Module | Address mappers for `timingDRAM` (`addrMapper` parameter) |
| `memHierarchy` | `fifoTransactionQ`, `reorderTransactionQ` | SubComponent | Transaction queues for `timingDRAM` banks |
| `memHierarchy` | `simplePagePolicy`, `timeoutPagePolicy` | SubComponent | Row-buffer page policies for `timingDRAM` banks: static open/close, or close after a timeout |
| `memHierarchy` | `DelayBuffer` | SubComponent | Adds a fixed delay in front of another backend |
| `memHierarchy` | `reorderSimple`, `reorderByRow` | SubComponent | Reorder requests before passing them to another backend: first N accepted, or grouped by DRAM row |
| `memHierarchy` | `cramsim` | SubComponent | Backend that uses [cramSim](../cramsim/intro.md) for timing |
| `memHierarchy` | `Messier` | SubComponent | Backend that uses [messier](../messier/intro.md) for NVM timing |
| `memHierarchy` | `vaultsim` | SubComponent | Backend that uses [vaultsim](../vaultsim/intro.md) for stacked-memory timing |
| `memHierarchy` | `ramulator`, `ramulator2`, `goblinHMCSim` | SubComponent | Backends that use Ramulator, Ramulator2, or HMCSim; built only when SST-Elements is configured with the simulator (see Optional dependencies) |
| `memHierarchy` | `simpleMemBackendConvertor`, `flagMemBackendConvertor`, `extMemBackendConvertor`, `simpleMemScratchBackendConvertor` | SubComponent | Convert memHierarchy events for each kind of backend; loaded automatically by memory controllers and scratchpads |
| `memHierarchy` | `defCustomCmdHandler` | SubComponent | Default handler for custom memory commands; copies custom data to the backend |

### Test components
| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `memHierarchy` | `standardCPU` | Component | Test CPU that issues random reads and writes through a `StandardMem` interface |
| `memHierarchy` | `streamCPU` | Component | Test CPU that issues a streaming access pattern |
| `memHierarchy` | `trivialCPU` | Component | Simple test CPU that issues random accesses |
| `memHierarchy` | `ScratchCPU` | Component | Test CPU for the `Scratchpad` interface |
| `memHierarchy` | `mmioEx` | Component | Example memory-mapped I/O device for testing the `StandardMem` interface |

