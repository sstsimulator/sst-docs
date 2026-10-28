---
title: getStatisticValidityAndLevel
---

```cpp
uint8_t getStatisticValidityAndLevel(const std::string& statistic_name) const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the enable level for the specified statistic. If the statistic is not valid, returns 255.

## Parameters
* **statistic_name** (string) Name of the statistic
* **returns** (uint8_t) The enable level of the statistic or 255 if not valid


<!--- TODO add example --->


## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
