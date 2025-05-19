---
title: acceptsGroups
---

```cpp
virtual bool acceptsGroups() const;
```

This function *may* be overridden if needed.

The default implementation returns `false`. This function should return whether the StatisticOutput supports named collections of statistics called [Statistic Groups](../../config/stats/group/statisticGroup.md).


## Parameters
* **returns** (bool) Whether the output object supports statistic groups

## Example

```cpp
bool acceptsGroups() const override 
{
    return true;
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```