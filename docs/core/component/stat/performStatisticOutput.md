---
title: performStatisticOutput
---

```cpp
void performStatisticOutput(Statistics::StatisticBase* stat);
```
*Availability:* Component, SubComponent, ComponentExtension

Trigger the output of a specific statistic. 

## Parameters
* **statName** (StatisticBase*) Statistic to output
* **returns** None

## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
example::example(ComponentId_t id, Params& params) : Component(id) {
    stat_occupancy = registerStatistic<uint64_t>("queue_occupancy");

    /** Rest of configuration */
}

bool clockHandler(Cycle_t cycle) {
    // Record the size of the queue on every cycle
    stat_occupancy.addData(queue.size());

    // Print the size of the queue occasionally
    if (cycle % 1000 == 0)
        performStatisticOutput(stat_occupancy);
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
