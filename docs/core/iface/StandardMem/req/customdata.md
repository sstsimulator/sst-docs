---
title: CustomData
---

```cpp
// Constructor
SST::Interfaces::StandardMem::CustomData();
```

The StandardMem::CustomData class is a base class for custom implementations of different request types. It provides a minimal set of functions needed by StandardMem to be able to route CustomReq/Resp requests, create responses, and generate debug/output for the CustomReq/Resp. 

CustomData derivatives must be serializable and provide a serializer function. The CustomData class itself inherits from `SST::Core::Serialization::serializable` to enforce this requirement. This allows the CustomData structure to be serialized as part of SST Events, enabling components to exchange the structure without interpreting it.

## Member variables
The `StandardMem::CustomData` class is a pure virtual class and defines no member variables.

## Member functions
The following are virtual functions that must be defined by derived classes.

### getRoutingAddress
```cpp
virtual Addr getRoutingAddress() = 0;
```
This function should return an address that can be used by the memory sytem implementation to appropriately forward the request to its intended destination.

### getSize
```cpp
virtual uint64_t getSize() = 0;
```
Return the size of the request or response. This is intended to be used for memory, network, and other components to be able to accurately account for bandwidth and other resource usage.

### makeResponse
```cpp
virtual CustomData* makeResponse() = 0;
```
This function should return a new CustomData* object formatted as a response to a request `CustomData* `object. When `makeResponse()` is called on a `StandardMem::CustomReq` request, this function is called its CustomData object and the returned data structure is included in the `StandardMem::CustomReq`'s returned `StandardMem::CustomResp` request.

### needsResponse
```cpp
virtual bool needsResponse() = 0;
```
The function is invoked when `needsResponse` is called on a `StandardMem::CustomReq` or `StandardMem::CustomResp`. The return value should be `true` if the custom request requires a response and `false` otherwise.

### getString
```cpp
virtual std::string getString() = 0;
```
This function should return a string representation of the `CustomData` object for use in debug, tracing, or other output.

### serialize_order
```cpp
virtual void serialize_order(SST::Core::Serialization::serializer& ser) = 0;
```
This function must be implemented by all CustomData derivatives to enable serialization of the class' data members. See [Event serialization](../../../events/serialize_order) for additional details. In addition to defining this function, derivative classes *must* include this macro in their class header:
```cpp
ImepmentSerializable(CLASS); // Where CLASS is the name of the derivative class
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```