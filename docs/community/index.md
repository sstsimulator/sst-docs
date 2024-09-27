---
title: Community
---

Many community SST developers maintain additional element libraries and tools. We've collected a list of them here.

## Element Libraries

### [BE-SST](https://github.com/SHREC-DOE-UF/BE-SST "BE-SST Github")
BE-SST is a coarse-grained parallel discrete-event simulator, developed at the PSAAP II Center for Compressible Multiphase Turbulence at the University of Florida, used for system-level modeling and simulation of existing and notional HPC systems.

### [REV](https://github.com/tactcomplabs/rev "Rev GitHub" )
The Rev SST component is designed to provide cycle-based simulation capabilities of an arbitrary RISC-V core or cores.

### [SimEng](https://uob-hpc.github.io/SimEng/ "SimEng Documentation")
“The Simulation Engine (SimEng) is a fast, cycle-level, open-source simulation framework under development by the University of Bristol's High Performance Computing group. SimEng targets the design space of modern HPC processors with a current focus on AArch64 (Armv9.2-a) and RISC-V (rv64imafdc) instruction set architectures. SimEng has been configured to model a variety of existing processors (including a ThunderX2, A64FX, Apple M1, and Arm Neoverse V2) and hypothetical core designs to evaluate bleeding-edge developments in the HPC domain. SimEng currently integrates with SST to improve its simulation of a processor's memory hierarchy. Through encapsulation as an SST component, SimEng translates its memory accesses into a suitable form for use by memHierarchy. The integration has yielded significant improvements in the accuracy of modeling real-world processors, most notably when simulating the execution of memory-bound codes. [SimEng's documentation](https://uob-hpc.github.io/SimEng) offers a comprehensive overview of both itself and its integration with SST.


### [SST-STONNE](https://github.com/stonne-simulator/sst-elements-with-stonne "SST-STONNE GitHub")
STONNE is a cycle-level microarchitectural simulator for flexible DNN inference accelerators. STONNE models all the major components required to build  next-generation flexible DNN accelerators like MAERI or SIGMA. All the on-chip components are interconnected by using a three-tier network fabric composed of a Distribution Network(DN), a Multiplier Network (MN), and a Reduce Network(RN), inspired by the taxonomy of on-chip communication flows within DNN accelerators. STONNE has been integrated as a component called sstStonne in SST. sstStonne connects to memHierarchy component to faithfully model the memory hierarchy of the accelerator. The STONNE-MemHierarchy integration allows to run four main operations: CONVOLUTION, GEMM (Dense matrix multiplication), sparse-sparse GEMM operation where the matrices are encoded using a bitmat format, and sparse-dense matrix multiplication (spMM) where the sparse matrix in encoded in CSR format. The simulator is configurable to support different architectural parameters and different memory hiearchy organizations. Basic installation/usage instructions can be found in the additional external elements section of the current SST release documentation.

## Tools

### [AHP Graphs for SST](https://github.com/lpsmodsimteam/ahp_graph)
Attributed Hierarchical Port Graphs for SST.

### [sst-containers](https://github.com/tactcomplabs/sst-containers)
Build scripts for SST containers.

### [sst-dbg](https://github.com/tactcomplabs/sst-dbg)
A debug library for SST components.

### [sst-viz](https://github.com/tactcomplabs/sst-viz)
A web-based viz tool.


## Contribute
Have an SST element, tool, or other resource to share? Fork the sst-docs [repository](https://github.com/sstsimulator/sst-docs) and submit a pull request to add it.
Requests should:
* Include a link to the resource
* Include a short description
* Be added to the list in alphabetical order by resource name
