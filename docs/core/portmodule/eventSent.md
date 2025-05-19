---
title: eventSent
---

```cpp
virtual void eventSent(uintptr_t key, Event*& ev) override = 0;
```


This function must be implemented. When a PortModule is installed on the *send* side of a port, this function will be called whenever an event is sent. The function may do the following with the event.

* **Monitor** The PortModule may leave `ev` unchanged.
* **Modify** The PortModule may modify `ev`.
* **Replace** If the PortModule replaces the event with another, it must use [copyAllDeliveryInfo](../events/copyAllDeliveryInfo.md) to transfer metadata between the original and new events. The function must then delete the original event and set `ev` to the new event.
* **Delete** If the PortModule deletes the event, it must set `ev` to `nullptr` so that SST knows to cancel the send.

The `key` parameter is inherited from a generic underlying base API that PortModules use and can be ignored in PortModules.

## Parameters
* **key** (uintptr_t) A key that identifies the PortModule attach site. This can be ignored and will always be 0 for PortModules.
* **ev** (Event*&) A pointer to the event being sent.
* **returns** none


## Example

```cpp
void DropEvent::eventSent(uintptr_t key, Event*& ev)
{
    uint32_t prob = (rng->getNextUInt32() % 100);
    if (prob <= probability) { // Where 0 <= probability <= 100
        delete ev;
        ev = nullptr;
    }
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
