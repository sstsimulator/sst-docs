---
title: Compiling RISCV + CUDA
---

This page provides information on compiling a CUDA program from source code into a binary that can be run with *vanadis* and *balar*.

:::info

This documentation assumes you have followed the [QuickStart](./QuickStart.md#llvm--riscv-gnu-toolchain) guide on setting up LLVM and RISCV GNU toolchain.

:::

Since no real GPU will be used during the simulation, a custom CUDA runtime library is used to intercept the CUDA API calls from CPU code and dispatch those to *balar* and GPGPU-Sim. You can find the source code for the custom CUDA runtime at `src/sst/elements/balar/tests/libcudart/cuda_runtime_api_vanadis.cc`.

Building a CUDA program for *vanadis* takes two steps, each with its own Makefile:

1. Build the custom CUDA runtime (`libcudart_vanadis.a`) in `balar/tests/libcudart/`.
2. Build the CUDA program and link it against that runtime. The example programs in `balar/tests/vanadis_llvm_rv64/` (`helloworld`, `vecadd`, `simpleStreams`) show how.

```bash
cd SST_ELEMENTS_SRC/src/sst/elements/balar/tests/libcudart
make
cd ../vanadis_llvm_rv64
make
```

### Custom CUDA runtime

The `libcudart/Makefile` compiles the runtime with the RISCV GNU toolchain into both a static and a shared library. The CUDA version is embedded in the library so that GPGPU-Sim can find it.

```Makefile title="balar/tests/libcudart/Makefile (excerpt)"
# Custom Vanadis CUDA lib
CUSTOM_CUDA_LIB_SRC := cuda_runtime_api_vanadis.cc
CUSTOM_CUDA_LIB := cudart_vanadis

# RISCV Toolchain path
# Need to set RISCV_TOOLCHAIN_INSTALL_PATH env variable
RISCV_PREFIX := $(RISCV_TOOLCHAIN_INSTALL_PATH)/bin/riscv64-unknown-linux-gnu-

all: vanadis_cuda

vanadis_cuda: $(CUSTOM_CUDA_LIB_SRC) test_vanadis_envs
	$(RISCV_PREFIX)gcc -c -static -I$(CUDA_INSTALL_PATH)/include -I. -DBALAR_CUDA_VERSION=\"libcudart_vanadis.a.$(shell echo $$CUDA_VERSION_NUMBER | cut -c 1-2)\" -fpic $<
	$(RISCV_PREFIX)gcc -shared -o lib$(CUSTOM_CUDA_LIB).so $(CUSTOM_CUDA_LIB_SRC:.cc=.o)
	$(RISCV_PREFIX)ar rcs lib$(CUSTOM_CUDA_LIB).a $(CUSTOM_CUDA_LIB_SRC:.cc=.o)
```

### CUDA program

The `vanadis_llvm_rv64/Makefile` compiles CUDA sources with Clang, targeting RISCV for the host code. It links statically against the custom runtime, which it finds through `CUSTOM_CUDA_LIB_PATH`.

```Makefile title="balar/tests/vanadis_llvm_rv64/Makefile (excerpt)"
# Custom Vanadis CUDA lib
CUSTOM_CUDA_LIB_PATH := ../libcudart
CUSTOM_CUDA_LIB := cudart_vanadis

# Clang path
CLANG_PREFIX := $(LLVM_INSTALL_PATH)/bin/

# RISCV Toolchain path
# Need to set RISCV_TOOLCHAIN_INSTALL_PATH env variable
RISCV_SYSROOT := $(RISCV_TOOLCHAIN_INSTALL_PATH)/sysroot/
RISCV_CXX := $(wildcard $(RISCV_TOOLCHAIN_INSTALL_PATH)/riscv64-unknown-linux-gnu/include/c++/*/)

# Clang flags
CXX_FLAGS_RISCV_LINUX := -static-libgcc -static-libstdc++ -static --gcc-toolchain=$(RISCV_TOOLCHAIN_INSTALL_PATH) --sysroot=$(RISCV_SYSROOT) -nostdlibinc -stdlib++-isystem$(RISCV_CXX)/ -stdlib++-isystem$(RISCV_SYSROOT)/usr/include -stdlib++-isystem$(RISCV_CXX)/riscv64-unknown-linux-gnu --target=riscv64-unknown-linux-gnu  -march=rv64gc
CXX_FLAGS_RISCV_CUDA := -static --cuda-gpu-arch=$(GPU_ARCH) --cuda-path=$(CUDA_INSTALL_PATH) -L${CUSTOM_CUDA_LIB_PATH} -Wl,-static -l$(CUSTOM_CUDA_LIB) -L$(CUDA_INSTALL_PATH)/lib64 -Wl,-static -ldl -lrt -pthread
CXX_FLAGS_CUDA_WRAPPER := -include __clang_cuda_runtime_wrapper.h

# RISCV + CUDA binary
vecadd: vecadd.cu test_vanadis_envs test_llvm_env
	$(CLANG_PREFIX)clang++ $< -o $@ $(CXX_FLAGS_RISCV_CUDA) $(CXX_FLAGS_CUDA_WRAPPER) $(CXX_FLAGS_RISCV_LINUX)
```

:::note

`vecadd` doesn't depend on the runtime target, so build `libcudart` first, or the link fails with a missing `-lcudart_vanadis`.

:::

For more complicated CUDA program, you can refer to the flags and CC setup in [gpu-app-collection's Makefile](https://github.com/accel-sim/gpu-app-collection/blob/7db54738af0aed3760f496f6c968ee5a40c0ee46/src/cuda/common/common.mk#L77-L106).

:::note

Vanadis currently only support programs that are statically linked.

:::
