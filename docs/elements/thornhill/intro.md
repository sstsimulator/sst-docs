---
title: thornhill
---

*Thornhill* is part of an experimental capability to use detailed compute and memory models together with [Ember](../ember/intro) motifs in network simulations. Thornhill provides an interface to a the [Miranda](../miranda/intro) CPU model and the coordination of the memory heap for a modeled node.

:::note At a Glance

**Source Code:** [sst-elements/.../thornhill](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/thornhill) &nbsp;  
**SST Name:** `thornhill` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
* **Miranda** Thornhill is directly integrated to the SST-Elements [Miranda](../miranda/intro) processor model.

### Optional dependencies
*None*

## Elements
Use `sst-info thornhill` or `sst-info thornhill.<element>` to see each element's parameters and ports.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `thornhill` | `SingleThread` | SubComponent | Detailed compute model that sends a compute request to a Miranda core (as a list of Miranda generators) and waits for it to finish; used in the `detailedCompute` slot of `firefly.hades` and in the NIC's `nicDetailedRead`/`nicDetailedWrite` slots |
| `thornhill` | `MemoryHeap` | Component | Node-level memory heap that hands out simulated virtual addresses for memory allocated by Ember motifs |
| `thornhill` | `MemoryHeapLink` | SubComponent | Connects a core's `firefly.hades` (its `memoryHeap` slot) to the node's `MemoryHeap` for alloc and free requests |

These elements are not usually configured directly. The `sst.ember` and `sst.firefly` Python modules, which are the supported way to configure Ember simulations, do not currently set up Thornhill detailed models. Only the deprecated `ember/test/emberLoad.py` script does this (with `--detailedModelName`; see `ember/test/basicDetailedModel.py` and `ember/test/EmberEP.py`), and that script should not be used for new configurations.
