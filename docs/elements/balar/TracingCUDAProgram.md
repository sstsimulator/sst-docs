---
title: Tracing CUDA Program
---

This page provides steps to use tracer tool to generate CUDA API traces to run *balar* with *BalarTestCPU*.

:::warning

We are working on providing a more robust version of the tracer with the new NVBit release. Including better trace format and better computation validation.

:::

In order to run *balar* in trace-driven mode, you will need to supply the *BalarTestCPU* component with a trace file and associated GPU memory copy data dump. We have created an instruction tracer tool based on [NVBit](https://github.com/NVlabs/NVBit) to generate those. You can find relevant code inside [Accel-Sim](https://github.com/accel-sim/accel-sim-framework) framework: `ACCEL_SIM_SRC/util/tracer_nvbit/others/cuda_api_tracer_tool`.

:::note

To setup the tool and generate traces, you will need a machine with a NVIDIA GPU installed. Also [NVBit](https://github.com/NVlabs/NVBit) has some requirements for both GPU hardware and software versions. Refer to its README for more info.

:::

To pull and compile the tracer tool:

```bash
# Get the Accel-Sim framework
git clone git@github.com:accel-sim/accel-sim-framework.git

# cd into tracer tool folder
cd accel-sim-framework/util/tracer_nvbit

# Install nvbit
./install_nvbit.sh

# Compile tracer tool
# Which will generate a 'cuda_api_tracer_tool.so' file at
# './others/cuda_api_tracer_tool/cuda_api_tracer'
make -C ./others/cuda_api_tracer_tool
```

Then, in order to dump traces, put path to the tracer tool shared object in `LD_PRELOAD`:

```bash
LD_PRELOAD=PATH_TO/cuda_api_tracer_tool.so CUDA_PROG
```

Which will generate the following files when exiting:

- `cuda_calls.trace`: the API trace file tracking
    - `cudaMemcpy`
    - `cudaMalloc`
    - cuda kernel launches
    - `cudaFree`
- `cuMemcpyD2H-X-X.data`: cuda memcpy device to host data payload
- `cuMemcpyH2D-X-X.data`: cuda memcpy host to device data payload
