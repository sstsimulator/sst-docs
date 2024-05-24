---
title: rdmaNic
---

The *rdmaNic* library provides a Network Interface Controller (NIC) model that integrates with memory models that use the [SST:StandardMem](../../core/iface/StandardMem/class) interface and with network models that use the [SST:SimpleNetwork](../../core/iface/SimpleNetwork/class) interface. The NIC provides a memory mapped I/O interface for the CPU to write commands to. The NIC is also a bus mastering device in that it can directly read and write memory. This model was developed to be used with [Vanadis](../vanadis/intro) but the CPU interface is generic and can be driven by other CPU models.

:::note At a Glance

**Source Code:** [sst-elements/.../rdmaNic](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/rdmaNic) &nbsp;  
**SST Name:** `rdmaNic` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 14.0

:::

### Required dependencies
*None*

### Optional dependencies
*None*
