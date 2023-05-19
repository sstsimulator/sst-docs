---
title: recvUntimedData
---

```cpp
virtual Request* recvUntimedData() = 0;
```

Receive messages from the interface during SST's `init()` and `complete()` phases. A registered callback handler is not used during these phases so the parent must use this function to poll for messages if any are expected.

## Requirements
**Memory interface** &nbsp;  
Facilitate returning messages to an endpoint via this function.

**Endpoint** &nbsp;  
Use this function to get messages during SST's `init()` and `complete()` phases if needed.

## Parameters
* **returns** (Request*) A pointer to a Request if one is available, otherwise `nullptr`


## Examples

### Example 1: Implementing recvUntimedData() in a StandardMem interface
<!--- SOURCE_CODE: None --->
```cpp
Request* StandardMemClassName::recvUntimedData()
{
    if ( !receivedUntimedMessages.empty() )
    {
        Request* top = receivedUntimedMessages.front();
        receivedUntimedMessages.pop():
        return top;
    }
    return nullptr;
}
```

### Example 2: Using recvUntimedData from an endpoint
```cpp
void Endpoint::complete(unsigned int phase)
{
    while ( (Request* req = mem_iface->recvUntimedData()) ) {
        /* Handle request */
        delete req;
    }
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```