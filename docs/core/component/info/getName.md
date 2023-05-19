---
title: getName
---

```cpp
const std::string& getName() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the name of the Component as assigned by the user in the input configuration. For a SubComponent, the name is "component_name:subcomponent_slot_name".

## Parameters
* **returns** (string) (Sub)Component name


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("My name is %s\n", getName().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```