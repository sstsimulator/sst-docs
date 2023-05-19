---
title: RequestConverter
---

The StandardMem::RequestConverter class is a pure virtual visitor class that allows StandardMem implementations to convert an incoming StandardMem::Request type to an SST::Event type that can be passed over SST::Links. StandardMem implementations should derive from RequestConverter to define a conversion function for each built-in StandardMem request type. Upon receiving a request the StandardMem implementation can use the derived RequestoConverter class to convert StandardMem requests by type. 

If a memory system implementation does not support a particular request type, it may call ([SubComponent::fatal](../../component/output/fatal)) in the corresponding conversion function or otherwise indicate an error. 

## Constructor
The RequestConverter provides an empty constructor and destructor. 
```cpp
RequestConverter() {}
virtual ~RequestConverter() {}
```

## Required function implementations
The following functions are pure virtual within the RequestConverter class and must be implemented. The implementation should either convert the incoming request into an appropriate SST::Event type, or return an error indicating that the request type is not supported by the StandardMem implementation.

```cpp
virtual SST::Event* convert(Read* request) = 0;
virtual SST::Event* convert(ReadResp* request) = 0;
virtual SST::Event* convert(Write* request) = 0;
virtual SST::Event* convert(WriteResp* request) = 0;
virtual SST::Event* convert(FlushAddr* request) = 0;
virtual SST::Event* convert(FlushResp* request) = 0;
virtual SST::Event* convert(ReadLock* request) = 0;
virtual SST::Event* convert(WriteUnlock* request) = 0;
virtual SST::Event* convert(LoadLink* request) = 0;
virtual SST::Event* convert(StoreConditional* request) = 0;
virtual SST::Event* convert(MoveData* request) = 0;
virtual SST::Event* convert(CustomReq* request) = 0;
virtual SST::Event* convert(CustomResp* request) = 0;
virtual SST::Event* convert(InvNotify* request) = 0;
```

<!--- TODO add example --->

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```