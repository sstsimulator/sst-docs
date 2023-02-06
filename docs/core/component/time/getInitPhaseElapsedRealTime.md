---
title: getInitPhaseElapsedRealTime
---

```cpp
double getInitPhaseElapsedRealTime() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Get the amount of real-time spend executing the init phase of the simulation.

## Parameters
* **returns** (double) Real time in seconds spend executing the init phase


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp

output.output("SST spent %d seconds executing the init phase.\n", getInitPhaseElapsedRealTime());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
