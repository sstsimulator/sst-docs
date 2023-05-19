---
title: setNotifyOnReceive
---

```cpp
virtual void setNotifyOnReceive(HandlerBase* functor) = 0;
```

An endpoint uses this function to register a functor of the appropriate [form](handler). This functor will be called when a Request is received by the interface. The registered function is a notification only and the endpoint must subsequently call [`recv()`](recv) to acquire the received Request.

## Requirements
**Network interface** &nbsp;  
Must support registering this functor. If a functor is registered, it must be called when a Request is received at the interface during simulation (i.e., during SST's run loop). During `init()` and `complete()`, links are polling only and this functor should not be called.

**Endpoint** &nbsp;  
May optionally use this function to be notified when requests arrive.

## Parameters
* **functor** (HandlerBase*) A [handler functor](handler)
* **returns** none


## Examples
These examples show the registration only, for more information see the [handler](handler) documentation.

### Example 1: Registering a callback handler in a SimpleNetwork interface
```cpp
void NetworkInterfaceImplementation::setNotifyOnReceive(HandlerBase* functor)
{
    // receiveFunctor is defined as:
    // HandlerBase* receiveFunctor;
    receiveFunctor = functor;
}
```

### Example 2: Registering a callback handler from an Endpoint
```cpp
// Assuming this is in a class named 'Endpoint' with a HandlerBase function named 'handler'
net_iface->setNotifyOnReceive(new SST::Interfaces::SimpleNetwork::Handler<Endpoint>(this, &Endpoint::handler));
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
