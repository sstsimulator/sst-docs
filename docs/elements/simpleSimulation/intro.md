---
title: simpleSimulation
---

The *simpleSimulation* library consists of two examples that model the throughput of cars going through a carwash. `simpleCarWash` models the carwash in a single monolithic component. `distCarWash` separates the carwash operation into two components that interact with each other: a car generator (`distCarGenerator`)and a carwash (`distCarWash`). This element is provided as an example of discrete event simulation and the SST APIs.

:::note At a Glance

**Source Code:** [sst-elements/.../simpleSimulation](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/simpleSimulation) &nbsp;  
**SST Name:** `simpleSimulation` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1
:::

### Required dependencies
*None*

### Optional dependencies 
*None*


## Elements
Use `sst-info simpleSimulation` or `sst-info simpleSimulation.<element>` to see each element's parameters and ports.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `simpleSimulation` | `simpleCarWash` | Component | Car wash modeled as a single, self-contained clocked component that generates its own car arrivals |
| `simpleSimulation` | `distCarGenerator` | Component | Generates car arrivals and sends them to a `distCarWash` over its `car` port |
| `simpleSimulation` | `distCarWash` | Component | Car wash that receives cars from a `distCarGenerator` over its `car` port |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleSimulation/tests/test_distCarWash.py --->
```python title="The two-component car wash (from simpleSimulation/tests/test_distCarWash.py)"
import sst

generator = sst.Component("generator", "simpleSimulation.distCarGenerator")
generator.addParams({
    "random_seed" : 151515,
    "arrival_frequency" : 2,
})

wash = sst.Component("carwash", "simpleSimulation.distCarWash")
wash.addParam("time", 4320)

link = sst.Link("link")
link.connect((generator, "car", "60s"), (wash, "car", "60s"))
```
