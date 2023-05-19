---
title: isNetworkInitialized
---

```cpp
virtual bool isNetworkInitialized() const = 0;
```

This function is used during SST's `init()` phase to give a network time to initialize itself prior to accepting requests. Once the network is initialized the function should return `true`. The following must be the case at that point:
* Any future call to `isNetworkInitialized()` must return `true`
* A call to `getEndpointID()` returns an accurate ID
* A call to `getLinkBW()` returns the correct link bandwidth
* A call to `sendUntimedData()` successfully sends data on the network
* A call to `recvUntimedData()` returns Requests if any have arrived

During `init()`, endpoints must not call the above functions until this function indicates the network is initialized.

## Requirements
**Network interface** &nbsp;  
May return `false` during early phases of `init()`. As soon as the network is initialized, should return `true`. May not later return `false` after previously returning `true`. When returning `true`, the functions identified above must operate correctly.

**Endpoint** &nbsp;  
Must use this function during `init()` to wait until the network is initialized prior to calling any of the functions listed above.

## Parameters
* **returns** (bool) Whether the network is initialized


## Examples

### Example 1: A network interface using isNetworkIntialized
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
In this example, taken from the Merlin element library, the SimpleNetwork interface uses phase numbers 0-2 of `init()` to perform internal initialization and allow network components to agree on network parameters. During those phase numbers, calls to `isNetworkInitialized()` will return `false`. Once the network is ready, `isNetworkInitialized()` returns `true`, allowing the endpoints to do their own `init()` protocols if needed.

```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.h/cc"
#include <sst/core/interfaces/simpleNetwork.h>

LinkControl::LinkControl(...) {
    ...
    network_initialized = false;
    ...
}

void LinkControl::init(unsigned int phase)
{
    /* Starting at phase=0 of init(), merlin routers and interfaces perform handshakes to determine
     * endpoint IDs, agree on link bandwidths, and establish routing information */
     switch ( phase ) {
        case 0:
            /* Start negotiating bandwidth */
            break;
        case 1:
            /* Finish negotiating bandwidth and start setting up mappings for virtual networks */
            /* Set the endpoint ID */
            break;
        case 2:
            /* Set up mappings for virtual networks; other initialization activities */
            network_initialized = true;
            break;
        default:
            /* Network is initialized now, handle init() for the endpoints by sending/receiving untimed events */
            break;
     }
}

bool isNetworkInitialized() const { return network_initialized; }
```

### Example 2: An endpoint using isNetworkInitialized
<!--- SOURCE_CODE: None --->

During each phase of `init()`, an endpoint must call `init()` on a SimpleNetwork interface. It must not call any other functions on the interface until a call to `isNetworkInitialized()` returns `true`.
```cpp
void Endpoint::init(unsigned int phase) {
    net_iface->init(phase);

    //highlight-next-line
    bool networkReady = net_iface->isNetworkInitialized();

    if (networkReady) {
        /* Broadcast all the endpoint IDs so the endpoints can send data */
        SST::Interfaces::SimpleNetwork::Request * req = new SST::Interfaces::SimpleNetwork::Request();
        req->dest = SST::Interfaces::SimpleNetwork::INIT_BROADCAST_ADDR; /* Broadcast */
        req->src = net_iface->getEndpointID();
        
        // Create an event with this endpoint's name so the other endpoints can map our ID to our name
        SST::Interfaces::StringEvent* strEv = new SST::Interfaces::StringEvent(getName());
        req->givePayload(strEv);

        net_iface->sendUntimedData(req); 

        while (SST::Interfaces::SimpleNetwork::Request* req = net_iface->recvUntimedData()) {
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
