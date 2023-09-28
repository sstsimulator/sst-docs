---
title: Prospero
---

*Prospero* is a trace-based core model. The core models memory instructions only. Multiple Prospero cores can be used in the same simulation, each running independent trace files, to model a multicore architecture. A Pintool for collecting traces from x86 binaries is included. Prospero interfaces with memory via the [SST::StandardMem](../../core/iface/StandardMem/class) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../prospero](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/prospero) &nbsp;  
**SST Name:** `prospero` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 13.0

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
* **address** Memory address
* **length** Number of bytes to read or write

### Binary
Each record in a binary trace consists of the same four fields as the text trace, except that they are represented as a byte array (`char*`). There is no separator between records and the size of each field is:
* **cycles** `uint64_t`
* **type** `char`
* **address** `uint64_t`
* **length** `uint32_t`

### Compressed
If zlib is available, use of compressed text or binary traces is supported.