---
title: miranda
---

*Miranda* is a state-machine based core model. The model is split into a core model and an instruction stream generator. Built-in generators include patterns such as SPMV, GUPS, Stream kernels, and stencils. Additionally, the Stake generator integrates with the Spike RISC-V functional simulator to provide timing simulation. The Miranda core accepts memory instructions; other instructions are simulated via timing delays only. Dependencies between instructions are observed. The processor interfaces with memory via the [SST::StandardMem](../../core/iface/StandardMem/class) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../miranda](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/miranda) &nbsp;  
**SST Name:** `miranda` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies

* [**Spike**](https://github.com/riscv-software-src/riscv-isa-sim) Miranda's *Stake* generator takes input from the Spike RISC-V functional simulator rather than synthetically generating instructions.

## Elements
Use `sst-info miranda` or `sst-info miranda.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `miranda` | `BaseCPU` | Component | Miranda core; issues the memory requests produced by the generator in its `generator` slot through a `StandardMem` interface |
| `miranda` | `SingleStreamGenerator` | SubComponent | Single stream of accesses in increasing address order |
| `miranda` | `ReverseSingleStreamGenerator` | SubComponent | Single stream of accesses in decreasing address order |
| `miranda` | `RandomGenerator` | SubComponent | Stream of reads and writes to random addresses |
| `miranda` | `GUPSGenerator` | SubComponent | GUPS-style random read-modify-write accesses |
| `miranda` | `CopyGenerator` | SubComponent | Reads from one array and writes to another, as in an array copy |
| `miranda` | `STREAMBenchGenerator` | SubComponent | Access pattern of the STREAM benchmark triad kernel |
| `miranda` | `STREAMBenchGeneratorCustomCmd` | SubComponent | STREAM benchmark pattern issued as custom memory commands with user-set read and write opcodes |
| `miranda` | `InOrderSTREAMBenchGenerator` | SubComponent | STREAM benchmark pattern for in-order cores: issues a block of reads, then the dependent writes |
| `miranda` | `SPMVGenerator` | SubComponent | Sparse matrix-vector multiply (SpMV) pattern for a matrix with non-zeros on and above the diagonal |
| `miranda` | `Stencil3DBenchGenerator` | SubComponent | Access pattern of a 3D 27-point stencil benchmark |
| `miranda` | `EmptyGenerator` | SubComponent | Generator that issues no requests; for cores that should sit idle |
| `miranda` | `Stake` | SubComponent | Runs the Spike RISC-V functional simulator and issues its memory accesses; built only with `--with-stake` |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/miranda/tests/singlestream.py --->
```python title="A Miranda core with a single-stream generator, an L1 cache, and memory (based on miranda/tests/singlestream.py)"
import sst

# Core and its address generator
cpu = sst.Component("cpu", "miranda.BaseCPU")
cpu.addParams({
    "verbose" : 0,
})

gen = cpu.setSubComponent("generator", "miranda.SingleStreamGenerator")
gen.addParams({
    "verbose" : 0,
    "startat" : 3,
    "count" : 500000,
    "max_address" : 512000,
})

# L1 cache
l1cache = sst.Component("l1cache", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "2",
    "cache_frequency" : "2 Ghz",
    "replacement_policy" : "lru",
    "coherence_protocol" : "MESI",
    "associativity" : "4",
    "cache_line_size" : "64",
    "L1" : "1",
    "cache_size" : "2KB",
})

# Memory
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({
    "clock" : "1GHz",
    "addr_range_end" : 512 * 1024 * 1024 - 1,
})
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "1000 ns",
    "mem_size" : "512MiB",
})

# Links
link_cpu_cache = sst.Link("link_cpu_cache")
link_cpu_cache.connect((cpu, "cache_link", "1000ps"), (l1cache, "highlink", "1000ps"))

link_cache_mem = sst.Link("link_cache_mem")
link_cache_mem.connect((l1cache, "lowlink", "50ps"), (memctrl, "highlink", "50ps"))

# Print the core's statistics (requests issued, latencies, ...) at the end of the run
sst.setStatisticLoadLevel(1)
cpu.enableAllStatistics()
```
