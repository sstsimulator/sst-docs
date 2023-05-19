---
title: sendUntimedData
---

```cpp
void sendUntimedData(Request* req);
```

This function should be used to send requests on a network during SST's untimed phases, `init()` and `complete`. This is not a pure virtual function, however, implementing it is recommended per the note below. See [SST::Link::sendUntimedData](../../link/sendUntimedData) for additional detail on the use of this function.

:::note 
The `sendInitData` and `sendUntimedData` functions are identical. The latter was added when SST added the `complete()` phase to indicate that it could be used during *any* untimed phase, not just `init()`. `sendInitData` is deprecated as of SST 13, and `sendUntimedData` will become required (pure virtual) in SST 14.
:::

## Requirements
**Network interface** &nbsp;  
Must support sending events via this function during SST's `init()` and `complete()` phases. During `init()`. This function is allowed to cause an error if it is called during `init()` but a call to `isNetworkInitialized()` would return `false`.

**Endpoint** &nbsp;  
May optionally use this function during `init()` and `complete()` to send events over the network. Must *not* call this function during `init()` until `isNetworkInitialized()` returns `true`.

## Parameters
* **returns** (Request*) A request if one was received, otherwise nullptr. The caller is responsible for deleting any Request returned.

## Parameters
* **req** (Request*) A [Request](Request) to send
* **returns** none


## Examples

### Example 1: Supporting sendUntimedData at a network interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
void LinkControl::sendUntimedData(SST::Interfaces::SimpleNetwork::Request* req)
{
    if ( use_nid_map ) {
        req->dest = nid_map[req->dest];
    }
    // Send the request on interface's link into the network using merlin's internal RtrEvent type
    rtr_link->sendUntimedData(new RtrEvent(req, id, 0));
}
```

### Example 2: Sending untimed data from an endpoint
After the network is initialized, the endpoint uses `sendUntimedData()` to broadcast a message containing the endpoint's name and network ID. The endpoints use these messages to build a map of available network destinations (`IDmap`). 
```cpp
void Endpoint::init(unsigned int phase) {
    net_iface->init(phase);
    
    bool networkReady = net_iface->isNetworkInitialized();

    if (networkReady) {
        /* Broadcast all the endpoint IDs so the endpoints can send data */
        SST::Interfaces::SimpleNetwork::Request * req = new SST::Interfaces::SimpleNetwork::Request();
        req->dest = SST::Interfaces::SimpleNetwork::INIT_BROADCAST_ADDR; /* Broadcast */
        req->src = net_iface->getEndpointID();
        
        // Create an event with this endpoint's name so the other endpoints can map our ID to our name
        SST::Interfaces::StringEvent* strEv = new SST::Interfaces::StringEvent(getName());
        req->givePayload(strEv);

        //highlight-next-line
        net_iface->sendUntimedData(req); 

        while (SST::Interfaces::SimpleNetwork::Request* req = net_iface->recvInitData()) {
            /* set up a mapping table of the other endpoints' names -> IDs */
            SST::Interfaces::StringEvent* name = static_cast<SST::Interfaces::StringEvent*>(req->takePayload());
            IDMap.insert(std::make_pair(name->getString(), req->src));
            delete req;
            delete name; /* Have to delete separately from req since we used takePayload() to extract it */
        }
    }
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
