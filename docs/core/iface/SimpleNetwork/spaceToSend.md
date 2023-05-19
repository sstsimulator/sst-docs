---
title: spaceToSend
---

```cpp
virtual bool spaceToSend(int vn, int num_bits) = 0;
```

Checks if there is sufficient space to send the specified number of bits on the specified virtual network.

## Requirements
**Network interface** &nbsp;  
Return whether the network interface can accept a Request of size `num_bits` on virtual network `vn`. Returning `true` implies that an immediately subsequent call to `send()` for a Request with this same number of bits and virtual network should succeed and return `true` as well.

**Endpoint** &nbsp;  
May optionally use this function to query available buffer space.

## Parameters
* **vn** (int) Virtual network to check
* **num_bits** (int) Number of bits to check for. If this number of bits can be accepted by the interface, the interface has space to send.
* **returns** `true` if space exists, `false` otherwise

## Examples

### Example 1: Implementing spaceToSend in a SimpleNetwork
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
bool LinkControl::spaceToSend(int vn, int bits) 
{
    if ( vn_remap_out[vn]->credits * flit_size < bits )
    {
        return false;
    }
    return true;
}
```

### Example 2: Using spaceToSend in an Endpoint
```cpp
SimpleNetwork::Request *req = new SimpleNetwork::Request();
SST::Interfaces::StringEvent *strEv = new SST::Interfaces::StringEvent("hi!");
req->src = my_endpoint_id;
req->dest = a_destination_id;
req->size_in_bits = sizeof(strEv->getString()) * 8;
req->vn = vn;
req->givePayload(strEv);

//highlight-next-line
if ( net_iface->spaceToSend(req->vn, req->num_bits) )
{
    // Do not need to check return value of send()
    // since we already checked that the request
    // can be accepted
    net_iface->send(req, req->vn);
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
