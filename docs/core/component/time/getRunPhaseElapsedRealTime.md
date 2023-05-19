---
title: getRunPhaseElapsedRealTime
---

```cpp
double getRunPhaseElapsedRealTime() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Get the amount of real-time spend executing the run phase of the simulation.

## Parameters
* **returns** (double) Real time in seconds spend executing the run phase


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("SST spent %d seconds executing the run phase.\n", getRunPhaseElapsedRealTime());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
