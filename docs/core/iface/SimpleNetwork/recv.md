---
title: recv
---

```cpp
virtual Request* recv(int vn) = 0;
```

Receive a Request from the network on the specified virtual network (`vn`).

## Requirements
**Network interface** &nbsp;  
Return a Request that was received on virtual network `vn`. If no Request exists, return `nullptr`.

**Endpoint** &nbsp;  
Call this function to get a request from the network.

## Parameters
* **vn** (int) Virtual network to receive on
* **returns** (Request*) Request that has been delivered or `nullptr` if none is available. Caller is responsible for deleting any event returned.


## Examples

### Example 1: Implementing recv() in a SimpleNetwork interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"

// Returns nullptr if no event in input_buf[vn]. Otherwise, returns
// the next event.
SST::Interfaces::SimpleNetwork::Request* LinkControl::recv(int vn) {
    if ( input_queues[vn].size() == 0 ) return nullptr; /* No events */

    RtrEvent* event = input_queues[vn].front();
    input_queues[vn].pop();

    /* Some bookkeeping to manage network credits for this event */

    SST::Interfaces::SimpleNetwork::Request* ret = event->takeRequest();
    if ( use_nid_map ) ret->dest = logical_nid; /* Merlin is maintaining aliases for network IDs */
    delete event;

    return ret; /* Return the Request */
}
```

### Example 2: Polling SimpleNetwork from an endpoint
In this example, the endpoint calls `recv()` in a clock handler function to check if anything has been received.
```cpp
bool Endpoint::clockTick(SimCycle_t cycle)
{
    SST::Interfaces::SimpleNetwork::Request* req = net_iface->recv(0);
    if (req)
    {
        /* Got something - code to handle it here */
        delete req; /* Delete the request when we're done with it */
    }
    return false;
}

```

### Example 3: Using a callback from an endpoint to receive a notification when a request is received
In this example, the endpoint registers a callback function, `requestAvailable()` with a SimpleNetwork interface. Inside the callback, the endpoint uses `recv()` to acquire a Request.
```cpp
Endpoint::Endpoint( ComponentId_t id, Params& params ) : Component(id)
{
    ...
    net_iface->setNotifyOnRecv(new SimpleNetwork::Handler<Endpoint>(this, &Endpoint::requestAvailable));
    ...
}

bool Endpoint::requestAvailable(int vn) {
    //highlight-next-line
    SST::Interfaces::SimpleNetwork::Request* req = net_iface->recv(vn);
    if (req) {
        /* Got something, code to handle it here */
        delete req;
    } else {
        /* That's strange, we were notified there was a request and it disappeared! */
    }
}
```


## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
