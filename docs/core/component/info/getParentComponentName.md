---
id: getParentComponentName
title: getParentComponentName
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
const std::string& getParentComponentName() const;
```
*Availability:* Component, SubComponent, ComponentExtension

When called on a Component, returns the name of the Component. When called on a SubComponent, returns the parent Component's name. Note for nested SubComponents, a call from any of the nested SubComponents returns the name of the Component at the root of the inheritance chain. 

## Parameters
* **returns** (string) Component name


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
output.output("My name is %s\n", getParentComponentName().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```