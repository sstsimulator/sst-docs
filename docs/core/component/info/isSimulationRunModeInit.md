---
title: isSimulationRunModeInit
---

```cpp
bool isSimulationRunModeInit() const;
```
*Availability:* Component, SubComponent, ComponentExtension

SST can be configured to only run initialization and then terminate. This function returns whether the mode was set to INIT.


## Parameters
* **returns** (bool) Whether SST's run mode is INIT 


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>
s
output.output("SST is%s configured to only execute initialization.\n", isSimulationRunModeInit() ? "" : " not");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
