---
title: isActive
---

```cpp
bool isActive();
```

**New in SST 16.1**

Check whether a [clock handler](./clock_handler.md) is currently active, meaning SST will call it on the next cycle of its clock. A handler is inactive after it has been deactivated with [`deactivate()`](./deactivate.md) or [`unregisterClock()`](../component/time/unregisterClock.md), or after it returned `true`.

## Parameters
* **returns** (bool) True if the handler is active, false otherwise


## Example

<!--- SOURCE_CODE: None --->
```cpp
void example::handleEvent(SST::Event* ev)
{
    queue.push(ev);
    //highlight-next-line
    if ( !clockHandler->isActive() ) {
        clockHandler->activate();
    }
}
```

## Header
```cpp
#include <sst/core/clock.h>
```
