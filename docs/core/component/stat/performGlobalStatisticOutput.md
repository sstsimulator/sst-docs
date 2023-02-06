---
id: performGlobalStatisticOutput
title: performGlobalStatisticOutput
---

```cpp
void performGlobalStatisticOutput();
```
*Availability:* Component, SubComponent, ComponentExtension

Trigger the output of all enabled statistics for all Components on this (Sub)Component's rank/thread. 

## Parameters
* **returns** None

## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
performGlobalStatisticOutput();
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
