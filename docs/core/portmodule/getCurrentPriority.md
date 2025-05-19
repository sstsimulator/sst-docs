---
title: getCurrentPriority
---

```cpp
int getCurrentPriority() const;
```

SST handles activities in the same cycle in a specific priority order. Activities include things like events, clock handlers, synchronization, and simulation stopping points, as well as other SST-internal actions. This function returns the priority of the event being intercepted by the PortModule.

## Parameters
* **returns** (int) Priority of the current activity

## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("This event has priority %d\n", getPriority());
```

## Header
```cpp
#include <sst/core/portModule.h>
```