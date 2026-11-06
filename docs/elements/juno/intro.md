---
title: juno
---

*Juno* is a lightweight processor model which executes programs written in a simple assembly. The processor is designed to be easily extensible and used as an SST example element/component. The processor interfaces with memory via the [SST::StandardMem](../../core/iface/StandardMem/class) interface.

:::note At a Glance

**Source Code:** [juno](https://github.com/sstsimulator/juno) &nbsp;  
**SST Name:** `juno` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info juno` or `sst-info juno.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `juno` | `JunoCPU` | Component | Processor that runs a program assembled with `sst-juno-asm` (the `program` parameter); accesses memory through the `StandardMem` interface in its `memory` slot, or through its `cache_link` port |
| `juno` | `JunoRandomHandler` | SubComponent | Custom-instruction handler (in the CPU's `customhandler` slot) that implements the `RAND` instruction with a local random number generator |
| `juno` | `JunoExternalRandomHandler` | SubComponent | Custom-instruction handler that implements `RAND` by sending requests over its `genlink` port to a `JunoRandAccelerator` |
| `juno` | `JunoRandAccelerator` | Component | Random number accelerator that serves `JunoExternalRandomHandler` requests on its `cpulink` port |

## Building and running
Juno is built outside of SST-Elements. Build the element library (this also registers it with SST) and the assembler, then assemble a program:

```bash
cd juno/src && make
cd ../asm && make
./sst-juno-asm -i ../test/asm/sum.juno -o sum.bin
```

<!--- SOURCE_CODE: juno/test/sst/juno-test.py --->
```python title="Running a Juno program with an L1 cache and memory (based on juno/test/sst/juno-test.py)"
import sst

sst.setProgramOption("timebase", "1ps")

max_addr_gb = 1

# CPU with a custom-instruction handler for RAND
cpu = sst.Component("cpu", "juno.JunoCPU")
cpu.addParams({
    "program" : "sum.bin",    # assembled with sst-juno-asm
    "registers" : 16,
    "clock" : "2.4GHz",
    "max_address" : max_addr_gb * 1024 * 1024 * 1024,
})
rand_handler = cpu.setSubComponent("customhandler", "juno.JunoRandomHandler")
rand_handler.addParam("seed", 131313)

# L1 cache and memory
l1cache = sst.Component("l1cache", "memHierarchy.Cache")
l1cache.addParams({
    "access_latency_cycles" : "2",
    "cache_frequency" : "2.4 GHz",
    "replacement_policy" : "lru",
    "coherence_protocol" : "MESI",
    "associativity" : "4",
    "cache_line_size" : "64",
    "L1" : "1",
    "cache_size" : "512B",
})
memctrl = sst.Component("memory", "memHierarchy.MemController")
memctrl.addParams({ "clock" : "1GHz" })
memory = memctrl.setSubComponent("backend", "memHierarchy.simpleMem")
memory.addParams({
    "access_time" : "10 ns",
    "mem_size" : str(max_addr_gb) + "GiB",
})

sst.Link("cpu_l1").connect((cpu, "cache_link", "1000ps"), (l1cache, "highlink", "1000ps"))
sst.Link("l1_mem").connect((l1cache, "lowlink", "50ps"), (memctrl, "highlink", "50ps"))
```
