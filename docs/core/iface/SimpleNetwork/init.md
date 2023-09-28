---
title: init
---

```cpp
virtual void init(unsigned int phase);
```

See [`init()`](../../component/lifecycle/init) for a description of SST's init phase and the use of this function. The (Sub)Component that loaded a SimpleNetwork interface should call this function during its own `init()` function. A SimpleNetwork interface should facilitate sending untimed requests during the init() phase, however, it may use the [`isNetworkInitialized()`](isNetworkInitialized) function to block an endpoint from sending requests until it is ready to accept them.

## Requirements
**Network interface** &nbsp;  
Facilitate sending untimed requests sent by endpoints through the network. The network does not need to facilitate sending requests until the interface's [`isNetworkInitialized()`](isNetworkInitialized) function returns true. In addition to routing events to specific endpoints, the network must also support broadcasting of messages during the untimed phases when INIT_BROADCAST_ADDRESS is specified as the destination. This can be done either by the SimpleNetwork object creating an event for each endpoint in the network, or the network routers can use more intelligent algorithms to guarantee that each end point receives exactly one copy of the event.

**Endpoint** &nbsp;  
Call `init()` on the interface during each round of the `init()` phase as SST does not automatically call this function on SubComponents. 

## Parameters
* **phase** (unsigned int) The phase or round number (i.e., number of times `init()` has been called on all components)
* **returns** none


## Examples

### Example 1: Initializing a newtork, from a SimpleNetwork interface's point of view
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

### Example 2: Initializing a network, from the endpoint's point of view
<!--- SOURCE_CODE: None --->

During each phase of `init()`, an endpoint must call `init()` on a SimpleNetwork interface. It must not call any other functions on the interface until a call to `isNetworkInitialized()` returns `true`.
```cpp
void Endpoint::init(unsigned int phase) {
    //highlight-next-line
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
