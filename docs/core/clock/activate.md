---
title: activate
---

```cpp
Cycle_t activate();
```

**New in SST 16.1**

Activate a [clock handler](./clock_handler.md) that was previously deactivated. SST resumes calling the handler on each cycle of the clock it was registered with. Calling `activate()` on a handler that is already active has no effect.

This is an alternative to [`reregisterClock()`](../component/time/reregisterClock.md) that does not need the clock's `TimeConverter`. The handler must have been registered with a clock first, using [`registerClock()`](../component/time/registerClock.md) or [`registerOrderedClock()`](../component/time/registerOrderedClock.md). An ordered handler is restored to its original place in the order.

## Parameters
* **returns** (Cycle_t) Cycle count, in terms of the clock frequency, at which the handler will next be called


## Example

<!--- SOURCE_CODE: None --->
```cpp
/* Event handler: wake up the clock when work arrives */
void example::handleEvent(SST::Event* ev)
{
    queue.push(ev);
    if ( !clockHandler->isActive() ) {
        //highlight-next-line
        Cycle_t next = clockHandler->activate();
    }
}
```

## Header
```cpp
#include <sst/core/clock.h>
```
