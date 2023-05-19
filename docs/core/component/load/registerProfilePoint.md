---
title: registerProfilePoint
---

```cpp
template <typename T>
typename T::ProfilePoint* registerProfilePoint(const std::string & pointName);
```
*Availability:* Component, SubComponent, ComponentExtension

Register a profiling point. 

## Parameters
* **pointName** Name of the profiling point to register
* **returns** Handle to the profiling point or nullptr if the point is not enabled

<!--- TODO Add example --->

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```