---
title: deactivate
---

```cpp
void deactivate();
```

**New in SST 16.1**

Deactivate a [clock handler](./clock_handler.md). SST stops calling the handler until it is reactivated with [`activate()`](./activate.md). Other handlers on the same clock are unaffected. Calling `deactivate()` on a handler that is already inactive has no effect.

This is an alternative to [`unregisterClock()`](../component/time/unregisterClock.md) that does not need the clock's `TimeConverter`. To deactivate a handler from inside the handler function itself, return `true` from the handler instead; this is more efficient.

## Parameters
* **returns** None


## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/component.h>

example::example(ComponentId_t id, Params& params) : Component(id)
{
    /** Other configuration here */

    clockHandler = registerClock<example, &example::clockTic>("1GHz", this);

    // Don't start the clock until there is work to do
    //highlight-next-line
    clockHandler->deactivate();
}
```

## Header
```cpp
#include <sst/core/clock.h>
```
