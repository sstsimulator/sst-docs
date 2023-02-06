---
id: getName
title: getName
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
const std::string& getName() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the name of the Component as assigned by the user in the input configuration. For a SubComponent, the name is "component_name:subcomponent_slot_name".

## Parameters
* **returns** (string) (Sub)Component name


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
output.output("My name is %s\n", getName().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```