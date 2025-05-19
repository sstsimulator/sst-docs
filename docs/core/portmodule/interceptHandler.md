---
title: interceptHandler
---

```cpp
virtual void interceptHandler(uintptr_t key, Event*& ev, bool& cancel) override = 0;
```

This function must be implemented. When a PortModule is installed on the *receive* side of a port, this function will be called whenever an event is received. It will be called before the event is delivered to a port's handler. The function must do the following depending on what it does with the passed in event.

* **Monitor** If the PortModule only monitors the event with no changes, it should set `cancel` to false.
* **Modify** If the PortModule modifies the event, it should set `cancel` to false.
* **Replace** If the PortModule replaces the event with another, it should set `cancel` to false and must also use [copyAllDeliveryInfo](../events/copyAllDeliveryInfo.md) to transfer metadata between the original and new events. The function must then delete the original event and set `ev` to the new event.
* **Delete** If the PortModule deletes the event, it should set `cancel` to true.

The `key` parameter is inherited from a generic underlying base API that PortModules use and can be ignored in PortModules.

## Parameters
* **key** (uintptr_t) A key that identifies the PortModule attach site. This can be ignored and will always be 0 for PortModules.
* **ev** (Event*&) A pointer to the event that was received.
* **cancel** (bool&) Indicates whether delivery of the event should be cancelled. If set to True, then `interceptHandler` must also delete the event.
* **returns** none


## Example

```cpp
void DropEvent::interceptHandler(uintptr_t key, Event*& ev, bool& cancel)
{
    uint32_t prob = (rng->getNextUInt32() % 100);
    if (prob <= probability) { // Where 0 <= probability <= 100
        delete ev;
        ev = nullptr;
        cancel = true;
    } else {
        cancel = false;
    }
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
