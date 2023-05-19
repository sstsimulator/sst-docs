---
title: recvUntimedData
---

```cpp
virtual Request* recvUntimedData();
```

This function should be used to check for received requests on a network during SST's untimed phases, `init()` and `complete`. This is not a pure virtual function, however, implementing it is recommended per the note below. See [SST::Link::recvUntimedData](../../link/recvUntimedData) for additional detail on the use of this function.

:::note 
The `recvInitData` and `recvUntimedData` functions are identical. The latter was added when SST added the `complete()` phase to indicate that it could be used during *any* untimed phase, not just `init()`. `recvInitData` is deprecated as of SST 13, and `recvUntimedData` will become required (pure virtual) in SST 14.
:::

## Requirements
**Network interface** &nbsp;  
Must support receiving events via this function during SST's `init()` and `complete()` phases. 

**Endpoint** &nbsp;  
May optionally use this function during `init()` and `complete()` to receive events sent over the network.

## Parameters
* **returns** (Request*) A request if one was received, otherwise nullptr. The caller is responsible for deleting any Request returned.


## Examples

### Example 1: Implementing recvUntimedData() in a SimpleNetwork interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
SST::Interfaces::SimpleNetwork::Request* LinkControl::recvUntimedData()
{
    if ( init_events.size() ) {
        RtrEvent *ev = init_events.front();
        init_events.pop_front();
        SST::Interfaces::SimpleNetwork::Request* ret = ev->takeRequest();
        delete ev;
        return ret;
    } else {
        return nullptr;
    }
}
```

### Example 2: Using recvUntimedData() from an endpoint
```cpp
void Endpoint::init(unsigned int phase)
{
    net_iface->init(phase);
    
    if (net_iface->isNetworkInitialized())
    {
        while ( (SST::Interfaces::SimpleNetworkRequest* req = net_iface->recvUntimedData()) ) 
        {
            /* Handle req here */
            delete req;
        }
    }
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
