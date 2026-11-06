---
title: mmu
---

The *mmu* library provides a simple memory management unit (mmu) and translation lookaside buffer (TLB) for use with the [Vanadis](../vanadis/intro) processor model.

:::note At a Glance

**Source Code:** [sst-elements/.../mmu](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/mmu) &nbsp;  
**SST Name:** `mmu` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info mmu` or `sst-info mmu.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `mmu` | `simpleMMU` | SubComponent | Node-level MMU that owns the page tables and answers TLB misses over each core's `core<N>.dtlb` and `core<N>.itlb` ports; used in the `mmu` slot of `vanadis.VanadisNodeOS` |
| `mmu` | `simpleTLB` | SubComponent | Set-associative TLB shared by a core's hardware threads; misses go to the MMU over its `mmu` port |
| `mmu` | `passThroughTLB` | SubComponent | TLB that always hits and uses the virtual address as the physical address |
| `mmu` | `tlb_wrapper` | Component | Puts a TLB (in its `tlb` slot) between a core's memory interface (`highlink`) and its L1 cache (`lowlink`) |

A TLB can also go directly in the `tlb` slot of a `memHierarchy.standardInterface`, which removes the need for a `tlb_wrapper`. The excerpt below shows the data-side TLB and the MMU of a single-core [Vanadis](../vanadis/intro.md) node. See `vanadis/tests/basic_vanadis.py` for the full system.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/vanadis/tests/basic_vanadis.py --->
```python title="Data TLB and MMU for one Vanadis core (excerpt from vanadis/tests/basic_vanadis.py)"
import sst

# MMU, owned by the node OS
node_os = sst.Component("os", "vanadis.VanadisNodeOS")
mmu = node_os.setSubComponent("mmu", "mmu.simpleMMU")
mmu.addParams({
    "num_cores" : 1,
    "num_threads" : 1,
    "page_size" : 4096,
})

# Data TLB between the core's load-store queue and its L1 data cache
dtlb_wrapper = sst.Component("cpu0.dtlb", "mmu.tlb_wrapper")
dtlb = dtlb_wrapper.setSubComponent("tlb", "mmu.simpleTLB")
dtlb.addParams({
    "hit_latency" : 1,
    "num_hardware_threads" : 1,
    "num_tlb_entries_per_thread" : 64,
    "tlb_set_size" : 4,
})

# TLB misses go to the MMU
sst.Link("mmu_dtlb").connect((mmu, "core0.dtlb", "1ns"), (dtlb, "mmu", "1ns"))

# ... connect the core's data interface to (dtlb_wrapper, "highlink") and
#     (dtlb_wrapper, "lowlink") to the L1 data cache; repeat for the instruction
#     side with "exe" : True on the wrapper and the MMU's "core0.itlb" port
```
