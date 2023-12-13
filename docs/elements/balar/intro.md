---
title: balar
---

The *BalarTestCPU* component is a trace-based test CPU that is included inside `balarMMIO` to run simulations with CUDA API call traces and data collected from a real GPU. It works by consuming a trace file and associated CUDA memory copy data files. The cudaMemcpyH2D data payload is collected for program correctness. The cudaMemcpyD2H data is collected to validate computation.

*BalarMMIO* is responsible for relaying CUDA API requests from SST to GPGPU-Sim. Currently it supports running with CUDA traces without a real CPU model (with BalarTestCPU) or with a [Vanadis](../vanadis/intro) core (under active development with limited support for MIPS32 and no support for RV64).

:::note At a Glance

**Source code:** [sst-elements/.../balar](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/balar) &nbsp;  
**SST name:** `balar` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;  
**Last Released:** SST 13.1

:::

### Required dependencies
* **CUDA** Version 10.1 is recommended
* **GPGPUSim** A link to the GPGPUSim version can be found in balar's [README](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/balar/README.md).

### Optional dependencies
*None*

## Additional documentation
A detailed [README](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/balar/README.md) on the balar element can be found in the balar source code.

