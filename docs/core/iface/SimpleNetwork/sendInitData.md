---
title: sendInitData
---

:::caution Deprecated
This function is deprecated as of SST 13 and will be removed in SST 14. Use [sendUntimedData](sendUntimedData) instead.
:::

```cpp
void sendInitData(Request* req);
```

This function is deprecated in favor of [sendUntimedData](sendUntimedData).

## Requirements
**Network interface** &nbsp;  
May implement this function during the deprecation period. Interfaces *must* implement at least one of `sendInitData()` and `sendUntimedData()`. In SST 14, interfaces will be required to implement `sendUntimedData()` and `sendInitData()` will be removed.

**Endpoint** &nbsp;  
May optionally use this function during `init()` and `complete()` to send events over the network. Must *not* call this function during `init()` until `isNetworkInitialized()` returns `true`.

## Parameters
* **returns** (Request*) A request if one was received, otherwise nullptr. The caller is responsible for deleting any Request returned.

## Parameters
* **req** (Request*) A [Request](Request) to send
* **returns** none


## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
void LinkControl::sendInitData(SST::Interfaces::SimpleNetwork::Request* req)
{
    sendUntimedData(req); // Redirect to the sendUntimedData function
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
