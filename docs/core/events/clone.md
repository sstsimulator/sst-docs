---
title: clone
---

```cpp
virtual Event* clone();
```

`clone()` can be implemented by event classes for copying the event.

## Parameters
* **returns** A copy of the event 


## Examples

### Example 1
<!--- SOURCE_CODE: sst-elements/src/sst/merlin/router.h> --->
```cpp
// Implement a clone function that can 
// be used to copy a RtrEvent for broadcasts
virtual RtrEvent* clone() override {
    RtrEvent * ret = new RtrEvent(*this);
    ret->request = this->request->clone(); // Clone the request that this event wraps
    return ret;
}
```

## Header
```cpp
#include <sst/core/event.h>
```
