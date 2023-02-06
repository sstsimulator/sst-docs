---
title: isSubComponentLoadableUsingAPI
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
template <class T>
bool isSubComponentLoadableUsingAPI(const std::string& subcomponent_name);
```
*Availability:* Component, SubComponent, ComponentExtension

Check to see if a SubComponent is loadable using the API specified by the template parameter.

## Parameters
* **subcomponent_name** (string) Name of the SubComponent in SST's `lib.name` format
* **returns** (bool) Whether the SubComponent is loadable using the template API

## Examples

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```