---
title: getType
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
const std::string& getType() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the type of the (Sub)Component or ComponentExtension. This is the SST type in `lib.name` format.

## Parameters
* **returns** (string) Type of Component, SubComponent, or ComponentExtension


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
std::string mytype = getType();
output.output("I am a component of type %s\n", mytype.c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```