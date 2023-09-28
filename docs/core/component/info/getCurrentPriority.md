---
title: getCurrentPriority
---

```cpp
int getCurrentPriority() const;
```
*Availability:* Component, SubComponent, ComponentExtension

SST handles activities in the same cycle in a specific priority order. Activities include things like events, clock handlers, synchronization, and simulation stopping points, as well as other SST-internal actions. When called in an event or clock handler, this function returns the priority of the event or clock handler.

## Parameters
* **returns** (int) Priority of the current activity

## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("This handler has priority %d\n", getPriority());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```