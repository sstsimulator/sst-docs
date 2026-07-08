---
title: merlin
---

*Merlin* consists of models used for the simulation of high-performance interconnects. The models conform to the [SimpleNetwork](../../core/iface/SimpleNetwork/class) interface and consist of a configurable input/output queued high-radix router, and network interface for use by the endpoint model.  The router supports multiple network topologies and has pluggable implementations for crossbar arbitration and output arbitration. Merlin is primarily designed to model system-level interconnects, but is sufficiently flexible to be used as a node-level network as well.

:::note At a Glance

**Source Code:** [sst-elements/.../merlin](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/merlin) &nbsp;  
**SST Name:** `merlin` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.0

:::

### Required dependencies
*None*

### Optional dependencies
*None*

### Allocating I/O nodes

The Merlin Python `System` class supports reserving a subset of network endpoints
as dedicated storage (I/O) nodes for the NetworkIO storage feature:

```py
io_nid_list = system.allocateIoNodes(count, method, *args, pool="default")
```

* `count` — number of I/O nodes to reserve.
* `method` — allocation strategy: `"linear"`, `"random"`, or `"random_linear"`.
* `pool` — keyword-only pool name (default `"default"`), allowing disjoint pools
  for isolating jobs.

I/O nodes are drawn from the **same endpoint pool** as compute nodes (allocated via
`allocateNodes`), so the two never overlap. The companion method
`System.setIoNodeJobFactory(factory)` registers the library-specific job that owns
the reserved nodes; [ember](../ember/intro) registers a default factory at import
time. For complete usage see the
[ember NetworkIO Storage Guide](../ember/NetworkIO#allocating-io-nodes).
