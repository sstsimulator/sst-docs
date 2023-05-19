---
title: setNotifyOnSend
---

```cpp
virtual void setNotifyOnSend(HandlerBase* functor) = 0;
```

An endpoint uses this function to register a functor of the appropriate [form](handler). This functor will be called when a Request is sent by the interface.

## Requirements
**Network interface** &nbsp;  
Must support registering this functor. If a functor is registered, it must be called when a Request is sent by the interface on its output link. This functor need only be used during SST's simulation run loop and should not be called during SST's `init()` and `complete()` phases.

**Endpoint** &nbsp;  
May optionally use this function to be notified when a Request is sent by the interface.

## Parameters
* **functor** (HandlerBase*) A [handler functor](handler)
* **returns** none


## Examples
These examples show the registration only, for more information see the [handler](handler) documentation.

### Example 1: Registering a callback handler in a SimpleNetwork interface
```cpp
void NetworkInterfaceImplementation::setNotifyOnSend(HandlerBase* functor)
{
    // sendFunctor is defined as:
    // HandlerBase* sendFunctor;
    sendFunctor = functor;
}
```

### Example 2: Registering a callback handler from an Endpoint
```cpp
// Assuming this is in a class named 'Endpoint' with a HandlerBase function named 'handler'
net_iface->setNotifyOnSend(new SST::Interfaces::SimpleNetwork::Handler<Endpoint>(this, &Endpoint::handler));
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
