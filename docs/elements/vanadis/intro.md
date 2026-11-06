---
title: vanadis
---

*Vanadis* is a processor with a detailed pipeline model. The ISA is configurable and it supports both MIPS32 and RISCV64. Multiple cores can be used together to form multicore systems, and cores support both single and multiple threads. The operating system is modeled via system call emulation. 

:::note At a Glance

**Source Code:** [sst-elements/.../vanadis](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/vanadis) &nbsp;  
**SST Name:** `vanadis` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
See [Compiling for Vanadis](./compiler.md) for information on cross-compiling MIPS and RISCV-64 binaries for use with Vanadis.

## Elements
Use `sst-info vanadis` or `sst-info vanadis.<element>` to see each element's parameters, ports, and statistics.

Every element is built into two libraries: `vanadis` and `vanadisdbg`. `vanadisdbg` is compiled with `VANADIS_BUILD_DEBUG` and adds extra debug output and debug-only parameters (e.g., the load-store queue's `address_mask`). It provides the same element names, so a configuration can switch between the two by changing only the library prefix.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `vanadis` | `core` | Component | Out-of-order processor core with configurable ISA decoders and one or more hardware threads (old name `dbg_VanadisCPU` is still accepted) |
| `vanadis` | `VanadisNodeOS` | Component | Node-level operating system that loads the application binary and handles system calls forwarded by each core |
| `vanadis` | `VanadisMIPSDecoder` | SubComponent | MIPS32 instruction decoder for the core's `decoder` slot (one per hardware thread) |
| `vanadis` | `VanadisRISCV64Decoder` | SubComponent | RISC-V 64-bit (RV64) instruction decoder for the core's `decoder` slot (one per hardware thread) |
| `vanadis` | `VanadisMIPSOSHandler` | SubComponent | System call handler for a MIPS decoder; forwards system calls to `VanadisNodeOS` through the core's `os_link` |
| `vanadis` | `VanadisRISCV64OSHandler` | SubComponent | System call handler for a RISC-V decoder; forwards system calls to `VanadisNodeOS` through the core's `os_link` |
| `vanadis` | `VanadisBasicBranchUnit` | SubComponent | Branch predictor that caches the last direction taken by each branch |
| `vanadis` | `VanadisBasicLoadStoreQueue` | SubComponent | Load-store queue with a write buffer; connects to memory through a `StandardMem` interface |
| `vanadis` | `VanadisRoCCBasic` | SubComponent | Basic example of a RoCC (Rocket Custom Coprocessor) accelerator attached to the core's `rocc` slot |
| `vanadis` | `AppRuntimeMemory32` | Module | Sets up the initial process memory (stack, arguments, environment) for 32-bit binaries; loaded automatically by `VanadisNodeOS` |
| `vanadis` | `AppRuntimeMemory64` | Module | Sets up the initial process memory (stack, arguments, environment) for 64-bit binaries; loaded automatically by `VanadisNodeOS` |

A Vanadis system needs a memory hierarchy, TLBs and an MMU from [memHierarchy](../memHierarchy/intro.md) and [mmu](../mmu/intro.md), so a complete configuration is long. The excerpt below shows how the Vanadis elements fit together. See `vanadis/tests/basic_vanadis.py` for the full system, including caches, TLBs, and links.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/vanadis/tests/basic_vanadis.py --->
```python title="Assembling a RISC-V Vanadis core and node OS (excerpt from vanadis/tests/basic_vanadis.py)"
import sst

lib = "vanadis"   # or "vanadisdbg"
isa = "RISCV64"   # or "MIPS"

# Node OS: runs the application and services system calls
node_os = sst.Component("os", lib + ".VanadisNodeOS")
node_os.addParams({
    "cores" : 1,
    "hardwareThreadCount" : 1,
    "page_size" : 4096,
    "physMemSize" : "4GiB",
    "useMMU" : True,
    "process0.exe" : "./small/basic-io/hello-world/riscv64/hello-world",
    "process0.arg0" : "hello-world",
    "process0.argc" : 1,
})
node_os_mmu = node_os.setSubComponent("mmu", "mmu.simpleMMU")
node_os_mem_if = node_os.setSubComponent("mem_interface", "memHierarchy.standardInterface")

# Core
cpu = sst.Component("cpu0", lib + ".core")
cpu.addParams({
    "clock" : "2.3GHz",
    "core_id" : 0,
    "hardware_threads" : 1,
    "physical_integer_registers" : 180,
    "physical_fp_registers" : 168,
    "reorder_slots" : 64,
})

# Decoder (one per hardware thread) with its OS handler and branch predictor
decode = cpu.setSubComponent("decoder", lib + ".Vanadis" + isa + "Decoder", 0)
decode.setSubComponent("os_handler", lib + ".Vanadis" + isa + "OSHandler")
decode.setSubComponent("branch_unit", lib + ".VanadisBasicBranchUnit").addParams({
    "branch_entries" : 32,
})

# Load-store queue and the core's memory interfaces
lsq = cpu.setSubComponent("lsq", lib + ".VanadisBasicLoadStoreQueue")
lsq.addParams({ "max_loads" : 16, "max_stores" : 8 })
dcache_if = lsq.setSubComponent("memory_interface", "memHierarchy.standardInterface")
icache_if = cpu.setSubComponent("mem_interface_inst", "memHierarchy.standardInterface")

# Core -> node OS link, used to forward system calls
link_core_os = sst.Link("link_core_os")
link_core_os.connect((cpu, "os_link", "5ns"), (node_os, "core0", "5ns"))

# ... connect dcache_if, icache_if and node_os_mem_if to L1 caches, and
#     node_os_mmu to the core's TLBs (see basic_vanadis.py)
```
