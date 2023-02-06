---
title: getCurrentSimTimeMilli
---

```cpp
SimTime_t getCurrentSimTimeMilli() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the current simulation time as a time in milliseconds. 

## Parameters
* **returns** (SimTime_t) Current simulation time in milliseconds


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp

output.output("The simulated time is %" PRIu64 " ms\n", getCurrentSimTimeMilli());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
