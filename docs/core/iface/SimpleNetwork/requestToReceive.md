---
title: requestToReceive
---

```cpp
virtual bool requestToReceive(int vn) = 0;
```

Checks if there is a waiting network request pending in the specified virtual network.

## Requirements
**Network interface** &nbsp;  
Must return whether a network request is pending in the specified virtual network, `vn`. If this function returns `true`, a subsequent call to `recv()` must return a request.

**Endpoint** &nbsp;  
Can use this function to determine if a request is waiting.


## Parameters
* **vn** (int) Virtual network to check
* **returns** (bool) `true` if a network request is pending in the specified virtual network, `false` otherwise


## Examples

### Example 1: Implementing requestToReceive in a SimpleNetwork interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.h"
#include <sst/core/interfaces/simpleNetwork.h>

bool requestToReceive( int vn )
{
    /* 
     * When LinkControl receives a request on a link, it puts 
     * the request into the input_queues buffer for the 
     * relevant virtual network
     */
    return !input_queues[vn].empty();
}
```

### Example 2: Calling requestToReceive from an endpoint
```cpp
...
if ( net_iface->requestToReceive(vn) )
{
    SST::Interfaces::SimpleNetwork::Request* req = net_iface->recv(vn); // Will not return nullptr since requestToReceive returned true
    /* Do something with req here */
    delete req;
}
...
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
