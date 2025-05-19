---
title: getCurrentSimTime
---

```cpp
SimTime_t getCurrentSimTime(TimeConverter* tc) const; // Deprecated in SST 15.0
SimTime_t getCurrentSimTime(TimeConverter tc) const;
SimTime_t getCurrentSimTIme(const std::string& base)const;
```

Returns the current simulation time as a cycle count relative to the clock frequency provided via the TimeConverter `tc` or string `base`.

## Parameters
* **tc** (TimeConverter) A time converter representing a clock cycle
* **base** (string) A string of either a clock period (e.g., "1ns") or frequency (e.g., "200MHz"). Units are required and SI units are fine.
* **returns** (SimTime_t) Current simulation time as a cycle count in terms of the clock frequency provided to the function.


## Example

<!--- SOURCE_CODE: None --->
```cpp
std::string period = "2ns";
output.output("For a clock period of 2ns, the cycle count is %" PRIu64 " cycles.\n", getCurrentSimTime(period));
```

## Header
```cpp
#include <sst/core/portModule.h>
```
