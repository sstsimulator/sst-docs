---
title: getSimulationOutput
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
Output& getSimulationOutput() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Get the instance of the simulation output object that the SST Core is using.


## Parameters
* **returns** (Output) The instance of the simulation output object that SST Core is using


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>

// Example event handler in a component
getSimulationOutput().output("This component's name is %s\n", getName().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```