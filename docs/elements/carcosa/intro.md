---
title: carcosa
---

The *carcosa* element is designed to model complex, safety-critical compute systems—especially highly heterogeneous setups. Carcosa focuses on modeling how injected faults propagate through a system. Through a custom MMIO control protocol (hyades.h), Carcosa allows RISC-V guest binaries running on the [Vanadis](../vanadis/intro.md) processor model to actively participate in host-driven action loops. The flow of data between sensors, CPUs and memory/injected faults are handles by the Hali component. Hali coordinates with [Vanadis](../vanadis/intro.md) processes to actively intercept MMIO regions to keep multiple cores synchronized and coordinate their execution.

:::note At a Glance

**Source Code:** [sst-elements/.../carcosa](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/carcosa) &nbsp;  
**SST Name:** `carcosa` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None* 

### Optional dependencies
*None* 

## Elements
Use `sst-info carcosa` or `sst-info carcosa.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `carcosa` | `Hali` | Component | Interface layer that routes data among sensors, CPUs, and the memory controller and coordinates fault injection; Halis connect to each other in a ring (`left`/`right` ports) |
| `carcosa` | `SensorComponent` | Component | Sensor that sends a set number of events to its `Hali` (`ifl` port), as in a vehicle simulation |
| `carcosa` | `CarcosaCPU` | Component | Simple test CPU that issues random reads and writes through a `StandardMem` interface and connects to a `Hali` |
| `carcosa` | `FaultInjCPU` | Component | Test CPU like `CarcosaCPU` that also receives fault-injection events from its `Hali` |
| `carcosa` | `CarcosaMemCtrl` | Component | memHierarchy-style memory controller that also connects to Halis (`haliLinks_<N>` ports) so faults can be injected into memory |
| `carcosa` | `FaultInjManager` | SubComponent | Manages fault injection for a `Hali`; loaded automatically by each `Hali` |
| `carcosa` | `PingPongAgent` | SubComponent | Interception agent for a `Hali`'s `interceptionAgent` slot; exchanges command and status values with a Vanadis guest program through memory-mapped registers |

See `carcosa/tests` for complete configurations, e.g. `testhaliBacking.py` (a ring of Halis with CPUs and caches), the `testStuckAt*`, `testRandomFlip`, `testRandomDrop`, and `testCorruptMem*` fault-injection tests, and `testcarcosaPingPong.py` (Vanadis with a `PingPongAgent`).
