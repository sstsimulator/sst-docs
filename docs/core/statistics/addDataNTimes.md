---
title: addDataNTimes
---
```cpp
template <class... InArgs>
void addDataNTimes(uint64_t N, InArgs&&... args);
```

Add the same data to a statistic repeatedly (N times). This is often used to more efficiently "catch up" a statistic after a component has been idle. For example, if a component is idle for N clock cycles and needs to record the occupancy of some buffer during that time, it may call this function at the end of the idle period to account for the occupancy during the idle period.

## Parameters
* **N** (uint64_t) Number of times to add data.
* **args** (Varies) The data to add to the Statistic. Type matches the Statistic type which is set when the statistic is registered.
* **returns** none


## Examples

### Example 1
```cpp
// Add mshr->getSize() to the statistic 20 times
stat_MSHROccupancy->addData(20, mshr->getSize()); 
```

## Header
The statistic header file is included with any SST object that supports statistics.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```