---
title: getEndpointID
---

```cpp
virtual nid_t getEndpointID() const = 0;
```

Returns the ID assigned by the network to this endpoint. This is the same ID used in the [Request](Request) `src` and `dest` fields. A SimpleNetwork interface *must* implement this function and an endpoint can use it to get the correct ID to fill the `src` field of its Requests with. Likewise, Requests whose `dest` field matches the ID returned by this function should be sent to this endpoint.

## Requirements

**Network interface** &nbsp;  
Return a unique ID assigned to the endpoint. Does not need to return correct data *until* [isNetworkInitialized()](isNetworkInitialized) returns `true`.

**Endpoint** &nbsp;  
Use this function to get the endpoint's ID and fill the source field of Requests sent with this ID. Cannot call this function prior to network initialization, when `isNetworkInitialized()` returns `true`.


## Parameters
* **returns** (nid_t) The network ID assigned to this endpoint


## Examples

### Example 1: Returning an ID from a SimpleNetwork
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.h"
inline nid_t getEndpointID() const {
    if (use_nid_map) {
        return logical_nid;
    } else {
        return id;
    }
}
```

### Example 2: Using an ID from an endpoint
```cpp
SimpleNetwork::Request* req = new SimpleNetwork::Request();
req->src = network_iface->getEndpointID();
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```