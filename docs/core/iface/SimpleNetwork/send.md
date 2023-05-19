---
title: send
---

```cpp
virtual bool send(Request* req, int vn) = 0;
```

Send a request to the network. The function returns whether the Request can be sent. If it returns `false`, the Request has been rejected and the endpoint must try again later (e.g., there is not enough buffer space to send). If it returns `true`, the Request has been accepted by the interface. The interface may buffer the event for some period of time, it is not required to send it immediately.

## Requirements
**Network interface** &nbsp;  
When this function is called, determine whether the Request `req` can be sent on the virtual network `vn`. If so, accept the request and return `true`. If not, do nothing with the request and return `false`.

**Endpoint** &nbsp;  
Use this function to send events during simulation. Must correctly handle rejected requests.

## Parameters
* **req** (Request*) Pointer to Request to send
* **vn** (int) Which virtual network to send the Request out on
* **returns** (bool) Whether the event was accepted (`true`) or not (`false`)


## Examples

### Example 1: Implementing send() in a SimpleNetwork interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
bool LinkControl::send(SimpleNetwork::Request* req, int vn)
{
    // Check to see if the VN is in range
    if ( vn >= req_vns ) return false;
    req->vn = vn;

    ...
    RtrEvent* ev = new RtrEvent(req, id, vn);
    ev->computeSizeInFlits(flit_size);
    int flits = ev->getSizeInFlits();

    // Check to see if there are enough credits to send
    if ( out_handle.credits < flits ) return false;

    // Update credits and enqueue Request
    out_handle.credits -= flits;
    out_handle.queue.push(ev);

    /* Update timing, congestion, do tracing here */
    
    return true;
}
```

### Example 2: Sending a Request from an endpoint
```cpp
SimpleNetwork::Request *req = new SimpleNetwork::Request();
SST::Interfaces::StringEvent *strEv = new SST::Interfaces::StringEvent("hi!");
req->src = my_endpoint_id;
req->dest = a_destination_id;
req->size_in_bits = sizeof(strEv->getString()) * 8;
req->vn = vn;
req->givePayload(strEv);

if (!net_iface->send(req, req->vn))
{
    // Try sending later
    request_buffer.push_back(req);
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
