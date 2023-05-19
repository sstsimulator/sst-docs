---
title: getType
---

```cpp
const std::string& getType() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the type of the (Sub)Component or ComponentExtension. This is the SST type in `lib.name` format.

## Parameters
* **returns** (string) Type of Component, SubComponent, or ComponentExtension


## Example

<!--- SOURCE_CODE: None --->
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