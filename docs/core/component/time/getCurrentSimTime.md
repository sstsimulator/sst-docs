---
title: getCurrentSimTime
---

```cpp
SimTime_t getCurrentSimTime() const;
SimTime_t getCurrentSimTime(TimeConverter* tc) const; // Deprecated in SST 15.0
SimTime_t getCurrentSimTime(TimeConverter tc) const;
SimTime_t getCurrentSimTime(const std::string& base) const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the current simulation time as a cycle count. If a clock frequency is provided as either a TimeConverter or string, returns the cycle count in those units. Otherwise this function returns the cycle count in terms of the (sub)component's default time base.

## Parameters
* **tc** (TimeConverter) A time converter representing a clock cycle
* **base** (string) A string of either a clock period (e.g., "1ns") or frequency (e.g., "200MHz"). Units are required and SI units are fine.
* **returns** (SimTime_t) Current simulation time as a cycle count in terms of either the clock frequency provided to the function, or if none is provided, the (sub)component's default time base


## Example

<!--- SOURCE_CODE: None --->
```cpp
std::string period = "2ns";
output.output("For a clock period of 2ns, the cycle count is %" PRIu64 " cycles.\n", getCurrentSimTime(period));
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
