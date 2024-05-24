---
title: miranda
---

*Miranda* is a state-machine based core model. The model is split into a core model and an instruction stream generator. Built-in generators include patterns such as SPMV, GUPS, Stream kernels, and stencils. Additionally, the Stake generator integrates with the Spike RISC-V functional simulator to provide timing simulation. The Miranda core accepts memory instructions; other instructions are simulated via timing delays only. Dependencies between instructions are observed. The processor interfaces with memory via the [SST::StandardMem](../../core/iface/StandardMem/class) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../miranda](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/miranda) &nbsp;  
**SST Name:** `miranda` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 14.0

:::

### Required dependencies
*None*

### Optional dependencies

* [**Spike**](https://github.com/riscv-software-src/riscv-isa-sim) Miranda's *Stake* generator takes input from the Spike RISC-V functional simulator rather than synthetically generating instructions.
