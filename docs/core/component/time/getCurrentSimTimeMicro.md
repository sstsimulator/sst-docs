---
title: getCurrentSimTimeMicro
---

```cpp
SimTime_t getCurrentSimTimeMicro() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the current simulation time as a time in microseconds. 

## Parameters
* **returns** (SimTime_t) Current simulation time in microseconds


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The simulated time is %" PRIu64 " us\n", getCurrentSimTimeMicro());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
