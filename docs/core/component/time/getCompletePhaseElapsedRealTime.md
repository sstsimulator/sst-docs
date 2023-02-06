---
title: getCompletePhaseElapsedRealTime
---

```cpp
double getCompletePhaseElapsedRealTime() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Get the amount of real-time spend executing the Complete phase of the simulation.

## Parameters
* **returns** (double) Real time in seconds spend executing the complete phase


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp

output.output("SST spent %d seconds executing the complete phase.\n", getCompletePhaseElapsedRealTime());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
