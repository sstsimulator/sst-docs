---
title: sendUntimedData
---

```cpp
void sendUntimedData(Event* data);
```

Send an event during SST's [`init()`](../component/lifecycle/init) or [`complete()`](../component/lifecycle/complete) phase.

## Parameters
* **data** (Event*) Event to send
* **returns** none


## Examples

### Example 1
```cpp
/* excerpt from basicSimLifeCycle.cc */
void basicSimLifeCycle::init(unsigned int phase) {

    // Only send our info on phase 0
    if (phase == 0) {
        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);
        leftLink->sendUntimedData(event);
    }

    /** Rest of init() handling **/
}
```

## Header
```cpp
#include <sst/core/link.h>
```
