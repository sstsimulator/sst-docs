---
title: doesComponentInfoStatisticExist
---

```cpp
bool doesComponentInfoStatisticExist(const std::string& statisticName) const;
```
*Availability:* Component, SubComponent, ComponentExtension

Check whether the named statistic is a valid statistic (i.e., registered via the ELI) for this (Sub)Component.

## Parameters
* **statisticName** (string) Name of the statistic
* **returns** (bool) Whether the statistic is valid


<!--- TODO add example --->

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
