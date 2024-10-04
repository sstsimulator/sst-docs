---
title: balar
---

The *balar* library provides an interface between SST and [GPGPU-Sim](https://github.com/accel-sim/gpgpu-sim_distribution), a cycle-level simulator modeling contemporary graphics processing units (GPUs) running GPU computing workloads written in CUDA. It supports two execution modes: trace-driven and direct-execution.

- Trace-driven: balar is driven by a test CPU that consume CUDA API traces and launch CUDA calls.
- Direct-execution: a CPU model execute a CUDA binary linked with custom `libcudart` and dispatch CUDA API calls to balar and GPGPU-Sim.

The *BalarTestCPU* component is a trace-based test CPU that is included inside balar folder (`./testcpu/`) to run simulations with CUDA API call traces and data collected from a real GPU. It works by consuming a trace file and associated CUDA memory copy data files. The `cudaMemcpyH2D` data payload is collected for program correctness. The `cudaMemcpyD2H` data is collected to validate computation.

*BalarMMIO* is responsible for relaying CUDA API requests from SST to GPGPU-Sim. Currently it supports running with CUDA traces without a real CPU model (with BalarTestCPU) or with a [Vanadis](../vanadis/intro) core running RISCV + CUDA binary with a custom CUDA runtime (`libcudart_vanadis` inside `./tests/vanadisLLVMRISCV/`). This mode has been tested with a subset of Rodinia 2.0 benchmark kernels in unittest.

The *dmaEngine* component performs memory data transfers between Vanadis  memory space and simulator memory space. It is required for direct-execution mode as balar will read/write the CPU data (i.e. `cudaMemcpy()`) and place them into GPGPU-Sim's memory space for functional simulation. In addition, dmaEngine is also used to read CUDA dispatch packet and write return value for the custom CUDA runtime.

:::note At a Glance

**Source code:** [sst-elements/.../balar](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/balar) &nbsp;  
**SST name:** `balar` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;  
**Last Released:** SST 14.0

:::

:::warning

Support for trace-driven mode currently is limited as it was used as early stage validation for balar implementation. It has only been tested with a simple integer vector add example.

We are working on providing a more robust version of this with the new NVBit release. Including better trace format and better computation validation.

:::

### Required dependencies
* **CUDA** Version 11.0+ is recommended
* **GPGPUSim** Use the *dev* branch from [accel-sim/gpgpu-sim_distribution](https://github.com/accel-sim/gpgpu-sim_distribution)

### Optional dependencies
* [**LLVM**](https://github.com/llvm/llvm-project) For compiling RISCV + CUDA binary
* [**RISCV GNU Toolchain**](https://github.com/riscv-collab/riscv-gnu-toolchain) For compiling RISCV + CUDA binary
* [**gpu-app-collection**](https://github.com/accel-sim/gpu-app-collection/tree/sst_support) For running unittest with Rodinia 2.0 kernels
* **Test Docker image** You can also opt in the prebuilt docker image with all dependencies setup except for GPGPU-Sim
  * OS: Ubuntu 22.04
  * CUDA: 11.7
  * LLVM: 18.1.8
  * RISCV: 2024.08.06-nightly
  * ```bash
    # Pull prebuilt image
    docker pull tgrogers/accel-sim_regress:SST-Integration-Ubuntu-22.04-cuda-11.7-llvm-18.1.8-riscv-gnu-2024.08.06-nightly
    ```

import DocCardList from '@theme/DocCardList';

<DocCardList />
