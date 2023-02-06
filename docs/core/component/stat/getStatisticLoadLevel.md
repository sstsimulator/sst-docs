---
title: getStatisticLoadLevel
---

```cpp
uint8_t getStatisticLoadLevel() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Return the statistic load level that was assigned to this (Sub)Component in the simulation configuration.

## Parameters
* **returns** (uint8_t) Load level for this (Sub)Component's statistics


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
uint8_t loadlev = getStatisticLoadLevel();
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
