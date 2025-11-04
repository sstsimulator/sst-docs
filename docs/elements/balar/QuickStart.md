---
title: QuickStart
---

This page provides instructions to setup balar and run test examples.

## Prerequisites

### CUDA
Please refer to [NVIDIA's website](https://developer.nvidia.com/cuda-downloads) for setting up CUDA.

After CUDA is installed, you will need to set the environment variable `CUDA_INSTALL_PATH`:

```bash
# Assuming CUDA is installed at /usr/local/cuda
export CUDA_INSTALL_PATH=/usr/local/cuda
```

### GPGPU-Sim
First, we shall install the prerequisites for GPGPU-Sim:

```bash
sudo apt-get install cmake build-essential xutils-dev bison zlib1g-dev flex libglu1-mesa-dev
```

GPGPU-Sim can be built with make or cmake. To build GPGPU-Sim:
```bash
# Always do the following
git clone https://github.com/accel-sim/gpgpu-sim_distribution.git
cd gpgpu-sim_distribution
source setup_environment sst
# Match with the GPU config file we have (V100)
export GPU_ARCH=sm_70

# Do the following to build with CMake
cmake -B build
cmake --build build -j4
cmake --install build

# Do the following to build with make
make -j


```

:::note Important

In addition to sourcing prior to building, you will need to run `source setup_environment sst` and ensure `GPU_ARCH` is defined in any shell from which you run Balar.

:::

### LLVM + RISCV GNU Toolchain

If you wish to compile a CUDA binary for [vanadis](../vanadis/intro.md) and balar, you will need to build RISCV cross-compilers using LLVM and the RISCV GNU toolchain. 

```bash
# Create installation dirs
mkdir llvm-install
mkdir riscv-gnu-install

# Set up environment vars to LLVM and RISCV GCC installation folders
export LLVM_INSTALL_PATH=$(pwd)/llvm-install
export RISCV_TOOLCHAIN_INSTALL_PATH=$(pwd)/riscv-gnu-install

# Build LLVM with RISC-V, x86, and CUDA support from source
# x86 is included for testing purpose, you can remove it if
# you will only run the CUDA binary with SST
git clone https://github.com/llvm/llvm-project.git

cd llvm-project
mkdir build && cd build
cmake -DLLVM_TARGETS_TO_BUILD="RISCV;X86;NVPTX" -DLLVM_DEFAULT_TARGET_TRIPLE=riscv64-unknown-linux-gnu \
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


### GPU App Collection

In order to run balar's unittest, clone the [GPU app collection repo](https://github.com/accel-sim/gpu-app-collection/tree/sst_support). The unittest script will handle compilation for these kernels with the custom CUDA runtime lib.

```bash
git clone git@github.com:accel-sim/gpu-app-collection.git
cd gpu-app-collection
git checkout sst_support

# Setup environ vars for apps, need to have
# env var LLVM_INSTALL_PATH and RISCV_TOOLCHAIN_INSTALL_PATH
# If you plan to compile the apps directly, you will 
# also need to set SST_CUSTOM_CUDA_LIB_PATH to 
# the directory of the custom CUDA library,
# which normally will be `SST_ELEMENTS_SRC/src/sst/elements/balar/tests/vanadis_llvm_rv64`
source ./src/setup_environment sst
```

:::note Manual Compilation
If you want to compile the Rodinia benchmarks manually or want to test out other kernels in the gpu-app-collection repo, you will need to set the `SST_CUSTOM_CUDA_LIB_PATH` env var and compile the custom CUDA runtime first.

```bash
# Set SST_CUSTOM_CUDA_LIB_PATH
export SST_CUSTOM_CUDA_LIB_PATH=SST_ELEMENTS_SRC/src/sst/elements/balar/tests/vanadis_llvm_rv64

# Build custom CUDA runtime
cd SST_ELEMENTS_SRC/src/sst/elements/balar/tests/vanadis_llvm_rv64
make

# Compile Rodinia 2.0 and pull data
cd PATH_TO/gpu-app-collection
make rodinia_2.0-ft -i -j4 -C ./src
make data -C ./src

# The compiled binaries would be located
# PATH_TO/gpu-app-collection/bin/CUDA_VERSION_NUM/release
```

:::

## Compilation of SST-Elements

To enable `balar`, SST-Elements needs to be configured with CUDA and GPGPU-Sim paths as shown below.
Ensure that `source setup_environment sst` has been run in the GPGPU-Sim directory prior to compiling elements.

```bash
# For sst-elements, you will need to specify CUDA and GPGPU-Sim path
# GPGPUSIM_ROOT will be set by sourcing the setup_environment script
cd PATH_TO/SST_ELEMENTS_SOURCE/
./configure --prefix=$SST_ELEMENTS_HOME --with-sst-core=$SST_CORE_HOME --with-cuda=$CUDA_INSTALL_PATH --with-gpgpusim=$GPGPUSIM_ROOT
make -j
make install
```

After configuring *sst-elements*, you should have a command line output stating balar will be built. If not, check that you have CUDA and GPGPU-Sim installed and compiled properly and that the paths for `CUDA_INSTALL_PATH` and `GPGPUSIM_ROOT` are correct.

## Testing

Balar divides its testcases into three testsuites based on time cost:

- *simple*: takes about 10 mins to complete
- *medium*: takes about 1 hr to complete
- *long*: takes 1~2 hrs to complete

Each All of them can be run in parallel with `-c NUM_CORES` flags.

```bash
# Run simple tests sequentially
$SST_CORE_HOME/bin/sst-test-elements -w "*balar*simple*"

# Run medium testcases with 2 processes
$SST_CORE_HOME/bin/sst-test-elements -c 2 -w "*balar*medium*"

# Run long tests with 4 processes
$SST_CORE_HOME/bin/sst-test-elements -c 4 -w "*balar*long*"

# Run all tests with 8 processes
$SST_CORE_HOME/bin/sst-test-elements -c 8 -w "*balar*"
```

When running each testsuite, the custom CUDA library under at `SST_ELEMENT_SOURCE/src/sst/elements/balar/tests/vanadis_llvm_rv64/` will be compiled and then linked with the Rodinia 2.0 kernels in [gpu-app-collection](https://github.com/accel-sim/gpu-app-collection/tree/sst_support).

## Running examples

Before running examples, ensure that you have run `source setup_environment sst` in the GPGPU-Sim top level directory and that you have exported the environment variable `GPU_ARCH=sm_70`.

Recall that anything after a `--` in the sst command line will be passed to the configuration script.

```bash
# cd into balar's tests folder
cd SST_ELEMENT_SOURCE/src/sst/elements/balar/tests

# Compile test programs
make -C vanadis_llvm_rv64

# Run CPU only program
VANADIS_EXE=./vanadis_llvm_rv64/helloworld \
VANADIS_ISA=RISCV64 \
sst testBalar-vanadis.py -- -c gpu-v100-mem.cfg

# Run a CUDA integer vector add example
# Note that both VANADIS_EXE and BALAR_CUDA_EXE_PATH point to the test cuda binary
VANADIS_EXE=./vanadis_llvm_rv64/vecadd \
VANADIS_ISA=RISCV64 \
BALAR_CUDA_EXE_PATH=./vanadis_llvm_rv64/vecadd \
sst testBalar-vanadis.py -- -c gpu-v100-mem.cfg
```
