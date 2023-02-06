---
title: isSimulationRunModeRun
---

```cpp
bool isSimulationRunModeRun() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns whether SST was configured to skip initialization and only execute its run loop. This mode was originally for restoring from checkpoint which is not a currently supported feature.


## Parameters
* **returns** (bool) Whether SST's run mode is set to RUN


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>
s
output.output("SST is%s configured to skip initialization.\n", isSimulationRunModeRun() ? "" : " not");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
