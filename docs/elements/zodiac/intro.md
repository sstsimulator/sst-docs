---
title: zodiac
---

*Zodiac* provides a trace capabilities to network simulations (i.e., Ember/Firefly/Merlin stack). Zodiac can be used in place of [Ember](../ember/intro) to drive network simulations from a trace. Additionally, it includes a trace reader.

:::note At a Glance

**Source Code:** [sst-elements/.../zodiac](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/zodiac) &nbsp;  
**SST Name:** `zodiac` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Maintenance &nbsp;  
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info zodiac` or `sst-info zodiac.<element>` to see its parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `zodiac` | `ZodiacSiriusTraceReader` | Component | Replays a SIRIUS MPI trace (the `trace` parameter) for one rank through the Hermes message-passing API, so that a Firefly/Merlin network simulation is driven by the trace instead of Ember motifs |

Each rank's reader needs a Hermes OS, such as `firefly.hades`, in its `OS` slot, and sends its messages through `firefly.hadesMP`. See `zodiac/test/allreduce/allreduce.py` for a complete configuration.
