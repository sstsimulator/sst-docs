---
title: recv
---

```cpp
SST::Event* recv();
```

Poll a link to retrieve an event that has arrived. If no event has arrived, the function returns a `nullptr`.

:::note
This function cannot be used on a Link that was configured as a callback link (i.e., configured with a handler).
:::

## Parameters
* **returns** An Event if one has arrived (if multiple, returns the one at the head of the queue) or `nullptr` if none have arrived.


## Example
```cpp
while (SST::Event* ev = link->recv()) {
    
    // Do something with the event
    
    delete ev;
}
```

## Header
```cpp
#include <sst/core/link.h>
```
