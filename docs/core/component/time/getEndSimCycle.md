---
title: getEndSimCycle
---

```cpp
SimTime_t getEndSimCycle() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the time the simulation ended as a cycle count. See [getCoreTimeBase](getCoreTimeBase) for cycle time. This function is for use in the [complete()](../lifecycle/complete) and [finish()](../lifecycle/finish) phases of simulation.

## Parameters
* **returns** (SimTime_t) The time simulation ended in core cycles


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The simulation finished after %" PRIu64 " cycles.\n", getEndSimCycle());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
