---
title: Compiler toolchains
---

Vanadis has been tested with two compiler toolchains: [musl](https://musl.libc.org/) and [llvm](https://llvm.org/)/[riscv-gnu-toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain). *musl* works for MIPS and RV64 while clang works for RV64 only. All binaries must be statically linked.

Threading and GPU support:
* *CUDA*: use the llvm-based toolchain (see [balar](../balar/intro.md))
* *OpenMP*: use the *musl* OpenMP library
* *pthreads*: works under both toolchains

## MUSL Toolchain
Refer to the [musl project](https://musl.libc.org/) for installation and download instructions.

## LLVM/RISCV-gnu-toolchain
To install this toolchain, download [llvm](https://llvm.org/) and the [riscv-gnu-toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain).

Follow the instructions below. Refer to llvm and the riscv-gnu-toolchain instructions for any dependencies you may need to acquire. For riscv-gnu-toolchain, build the linux (not newlib) version.

```sh
# Create installation dirs
mkdir llvm-install
mkdir riscv-gnu-install

# Set up environment vars to LLVM and RISCV gnu installation folders
export LLVM_INSTALL_PATH=$(pwd)/llvm-install
export RISCV_TOOLCHAIN_INSTALL_PATH=$(pwd)/riscv-gnu-install

# Build LLVM with desired support
# -DLLVM_TARGETS_TO_BUILD="RISCV" : RISCV only for vanadis
# -DLLVM_TARGETS_TO_BUILD="RISCV;NVPTX" : Add cuda support for balar/vanadis
git clone https://github.com/llvm/llvm-project.git

cd llvm-project
mkdir build && cd build
cmake -DLLVM_TARGETS_TO_BUILD="RISCV" -DLLVM_DEFAULT_TARGET_TRIPLE=riscv64-unknown-linux-gnu \
      -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_PROJECTS="clang;lld" -DCMAKE_INSTALL_PREFIX=$LLVM_INSTALL_PATH ../llvm
cmake --build . -j
cmake --build . --target install
cd ..

# Build RISC-V GCC toolchain
git clone https://github.com/riscv-collab/riscv-gnu-toolchain.git

cd riscv-gnu-toolchain
./configure --prefix=$RISCV_INSTALL_PATH
make linux -j
cd ..
```

## Compiling for Vanadis
To compile for vanadis, set `CC` and/or `CXX` to point to the cross-compiler you built above. Ensure linking is done statically. There are a number of Makefiles in the vanadis `tests/small/` directory that can be used as examples for musl. Below are Makefiles that can be used to build `vanadis/tests/small/basic-io/hello-world-cpp/hello-world-cpp.cc`.

This makefile uses the musl compiler and requires that `ARCH` be set to either `mipsel` to build a mips binary or `riscv64` for RISCV. The musl compiler must be in your `PATH`.
```sh title="Building hello-world-cpp using the musl compiler"
CXX=$(ARCH)-linux-musl-g++

CFLAGS=-O3
CXXFLAGS=-O3
LDFLAGS=-static

PROG=hello-world-cpp

$(PROG) : $(PROG).cc
        $(CXX) $(CFLAGS) $(LDFLAGS) -o $(ARCH)/$@ $<

clean:
        rm -r $(ARCH)/$(PROG)
 ```

This makefile uses the llvm toolchain and requires that `RISCV_TOOLCHAIN_INSTALL_PATH` and `LLVM_INSTALL_PATH` be set, as described in the installation instructions. This makefile does not require llvm to be in your `PATH`.

```sh title="Building hello-world-cpp using clang compiler"
RISCV_SYSROOT := $(RISCV_TOOLCHAIN_INSTALL_PATH)/sysroot

CXXFLAGS := --unwindlib=libgcc --gcc-toolchain=$(RISCV_TOOLCHAIN_INSTALL_PATH)
CXXFLAGS += --sysroot=$(RISCV_SYSROOT) -I$(RISCV_SYSROOT)/usr/include 
CXXFLAGS += --target=riscv64-unknown-linux-gnu -march=rv64gc -mabi=lp64d

CXX := $(LLVM_INSTALL_PATH)/bin/clang++

LDFLAGS := -static -static-libstdc++ -static-libgcc
LDFLAGS += -Wl,-rpath,$(RISCV_SYSROOT)/lib64:$(RISCV_SYSROOT)/usr/lib64

PROG=hello-world-cpp

$(PROG) : $(PROG).cc
        $(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $<

clean:
        rm -r $(PROG)
 ```
 