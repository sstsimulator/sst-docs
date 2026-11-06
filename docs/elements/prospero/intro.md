---
title: prospero
---

*Prospero* is a trace-based core model. The core models memory instructions only. Multiple Prospero cores can be used in the same simulation, each running independent trace files, to model a multicore architecture. A Pintool for collecting traces from x86 binaries is included. Prospero interfaces with memory via the [SST::StandardMem](../../core/iface/StandardMem/class) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../prospero](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/prospero) &nbsp;  
**SST Name:** `prospero` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies: None

### Optional dependencies: None
* **Pin** If available, the included Pintool can be used to generate a trace for simulation, otherwise a trace must be acquired separately.
* **zlib** Enables reading and/or generating a compressed execution trace

## Trace Format

### Text
Each line of a text trace represents a separate memory access. The format is `cycles type address length` where:
* **cycles** Minimum cycle count at which the request can be issued
* **type** `R` (read) or `W` (write). Not case-sensitive.
* **address** Memory address, as a decimal integer
* **length** Number of bytes to read or write

### Binary
Each record in a binary trace consists of the same four fields as the text trace, except that they are represented as a byte array (`char*`). There is no separator between records and the size of each field is:
* **cycles** `uint64_t`
* **type** `char`
* **address** `uint64_t`
* **length** `uint32_t`

### Compressed
If zlib is available, use of compressed text or binary traces is supported.

## Elements
Use `sst-info prospero` or `sst-info prospero.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `prospero` | `prosperoCPU` | Component | Core that replays a memory trace through a `StandardMem` interface; the trace reader is selected with the `reader` parameter, and its parameters are given as `readerParams.*` |
| `prospero` | `ProsperoTextTraceReader` | SubComponent | Default reader, for text traces (see [Text](#text)) |
| `prospero` | `ProsperoBinaryTraceReader` | SubComponent | Reader for binary traces (see [Binary](#binary)) |
| `prospero` | `ProsperoCompressedBinaryTraceReader` | SubComponent | Reader for compressed binary traces. Built only when zlib is found |

The example below replays a text trace, e.g. a file `prospero.trace` containing:

```text title="prospero.trace"
0 R 4096 8
10 W 8192 8
20 R 4160 8
30 W 8256 8
```

<!--- SOURCE_CODE: sst-elements/src/sst/elements/prospero/tests/array/trace-text.py --->
```python title="Replaying a text trace through an L1 cache (based on prospero/tests/array/trace-text.py)"
import sst

sst.setProgramOption("timebase", "1ps")

# Trace replay core
cpu = sst.Component("cpu", "prospero.prosperoCPU")
cpu.addParams({
    "reader" : "prospero.ProsperoTextTraceReader",
    "readerParams.file" : "prospero.trace",
})

# L1 cache and memory
l1cache = sst.Component("l1cache", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "1",
    "cache_frequency" : "2 Ghz",
    "replacement_policy" : "lru",
    "coherence_protocol" : "MESI",
    "associativity" : "8",
    "cache_line_size" : "64",
    "L1" : "1",
    "cache_size" : "64 KB",
})
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({ "clock" : "1GHz" })
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "1000 ns",
    "mem_size" : "4096MiB",
})

sst.Link("cpu_l1").connect((cpu, "cache_link", "1000ps"), (l1cache, "highlink", "1000ps"))
sst.Link("l1_mem").connect((l1cache, "lowlink", "50ps"), (memctrl, "highlink", "50ps"))
```
