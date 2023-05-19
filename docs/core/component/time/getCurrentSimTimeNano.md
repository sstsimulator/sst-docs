---
title: getCurrentSimTimeNano
---

```cpp
SimTime_t getCurrentSimTimeNano() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the current simulation time as a time in nanoseconds. 

## Parameters
* **returns** (SimTime_t) Current simulation time in nanoseconds


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The simulated time is %" PRIu64 " ns\n", getCurrentSimTimeNano());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
