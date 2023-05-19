---
title: isSimulationRunModeBoth
---

```cpp
bool isSimulationRunModeBoth() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns whether SST is configured to both execute initialization and then run the simulation. This is the default run mode for SST. 


## Parameters
* **returns** (bool) Whether SST's run mode is BOTH (i.e., RUN and INIT)


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("SST is%s in its default mode which initializes and runs the simulation\n", 
    isSimulationRunModeBoth() ? "" : " not");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
