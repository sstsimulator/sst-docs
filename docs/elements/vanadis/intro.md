---
title: vanadis
---

*Vanadis* is a processor with a detailed pipeline model. The ISA is configurable and it supports both MIPS32 and RISCV64. Multiple cores can be used together to form multicore systems, and cores support both single and multiple threads. The operating system is modeled via system call emulation. 

:::note At a Glance

**Source Code:** [sst-elements/.../vanadis](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/vanadis) &nbsp;  
**SST Name:** `vanadis` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 15.0

:::

### Required dependencies
*None*

### Optional dependencies
Vanadis has been tested with the [musl](https://musl.cc) toolchain for cross-compiling MIPS and RISCV-64 binaries. 
