---
title: RequestHandler
---

In constrast to `StandardMem::RequestConverter` which the StandardMem interface uses to convert a StandardMem::Request to an SST::Event for use on a link, the `RequestHandler` class defines a similar set of functions for handling requests by type at a compute endpoint. The default implementation of the handler for each Request type returns a fatal error indicating that the StandardMem::Request type is not handled. Endpoints should derive from this class, override the handler for any types they support, and call `handle` on incoming StandardMem::Requests to handle request by type. 

## Member variables
The `RequestHandler` class requires access to an SST::Output object which enables it to raise fatal errors for unimplemented handlers. This should be passed to the constructor
* **out** (Output*) An SST::Output object

## Constructor/destructor
```cpp
RequestConverter(SST::Output* o) : out(o) {}
virtual ~RequestConverter() {}
```
The RequestHandler class constructor takes a pointer to an SST Output object. 


## Virtual functions
The following functions are virtual and should be overridden with handlers for each type of request that the endpoint handles. Any function that is not overridden will invoke the base class version which results in a fatal error. 

```cpp
virtual void handle(Read* request);
virtual void handle(ReadResp* request);
virtual void handle(Write* request);
virtual void handle(WriteResp* request);
virtual void handle(FlushAddr* request);
virtual void handle(FlushResp* request);
virtual void handle(ReadLock* request);
virtual void handle(WriteUnlock* request);
virtual void handle(LoadLink* request);
virtual void handle(StoreConditional* request);
virtual void handle(MoveData* request);
virtual void handle(CustomReq* request);
virtual void handle(CustomResp* request);
virtual void handle(InvNotify* request);
```

<!--- TODO add example --->

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```