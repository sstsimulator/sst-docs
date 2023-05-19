---
title: recvUntimedData
---

```cpp
Event* recvUntimedData();
```

Receive an event during SST's [`init()`](../component/lifecycle/init) or [`complete()`](../component/lifecycle/complete) phase. Event handlers are not active during this time, so links must be polled using this function.

:::note 
The `recvInitData` and `recvUntimedData` functions are identical. The latter was added when SST added the `complete()` phase to indicate that it could be used during *any* untimed phase, not just `init()`. `recvInitData` may eventually be deprecated in favor of `recvUntimedData`.
:::


## Parameters
* **returns** Event received or `nullptr` if none available


## Example
```cpp title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"
void basicSimLifeCycle::init(unsigned int phase) {

    // Only send our info on phase 0
    if (phase == 0) {
        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);
        leftLink->sendUntimedData(event);
    }

    // Check if an event is received. recvUntimedData returns nullptr if no event is available
    //highlight-next-line
    while (SST::Event* ev = rightLink->recvUntimedData()) {

        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);

        if (event) {
            if (event->getStr() == getName()) { // Event made it around the ring and back to this component
                delete event;
            } else { // Event is from another component
                neighbors.insert(event->getStr());
                eventsToSend += event->getNum();
                leftLink->sendUntimedData(event);
            }

        } else {
            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during init() but it is not the expected type\n", getName().c_str());
        }
    }
}
```

## Header
```cpp
#include <sst/core/link.h>
```
