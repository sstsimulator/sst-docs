---
title: recvInitData
---

:::caution Deprecated
This function is deprecated as of SST 13 and will be removed in SST 14. Use [recvUntimedData](recvUntimedData) instead.
:::

```cpp
virtual Request* recvInitData();
```

This function is deprecated in favor of [ecvUntimedData](recvUntimedData).

## Requirements
**Network interface** &nbsp;  
May implement this function during the deprecation period. Interfaces *must* implement at least one of `recvInitData()` and `recvUntimedData()`. In SST 14, interfaces will be required to implement `recvUntimedData()` and `recvInitData()` will be removed.

**Endpoint** &nbsp;  
May optionally use this function during `init()` and `complete()` to receive events sent over the network.

## Parameters
* **returns** (Request*) A request if one was received, otherwise `nullptr`. The caller is responsible for deleting any Request returned.


## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
SST::Interfaces::SimpleNetwork::Request* LinkControl::recvInitData()
{
    return recvUntimedData(); // Redirect to the recvUntimedData function
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
