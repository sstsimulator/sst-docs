---
title: Handler
---

```cpp
void func(StandardMem::Request* request);
void func(StandardMem::Request* request, dataT data);
```

StandardMem passes requests back to an endpoint using a handler. Handlers should use one of the above function signatures and are passed to the interface in its constructor. Calling this function denotes a transfer of responsibility for a Request from the interface to the endpoint. Once called, the interface should no longer access the `request` and the endpoint is responsible for subsequently `delete`ing the `request` if necessary. 

## Requirements
**Memory interface** &nbsp;  
Memory interface must support the use of handlers.

**Endpoint** &nbsp;  
Use of handlers is optional. If not used, endpoint must poll the interface regularly (e.g., during a clock handler).

## Parameters
* **request** (StandardMem::Request*) The event being passed from the interface to the endpoint
* **data** (dataT) A constant returned with the call. This can be used, for example, to differentiate which interface called the handler, when the same handler is used for multiple interfaces.
* **returns** none

## Examples

### Example 1: Defining a handler function in an endpoint
The following shows a handler used inside miranda's BaseCPU Component. The handler determines which request corresponds the response, does some bookkeeping updates, handles the response, and then deletes it. The `stdMemHandlers` variable is an instance of Miranda's `StdMemHandler` class which inherits from StandardMem's [`RequestHandler`](reqhandler) visitor class.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/miranda/mirandaCPU.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/miranda/mirandaCPU.cc"
/*
 * Called by memory interface to return an event to Miranda
 */
void RequestGenCPU::handleEvent( Interfaces::StandardMem::Request* ev )
{
	out->verbose(CALL_INFO, 2, 0, "Recv event for processing from interface\n");

    // Match this response to its request, using ID
    Interfaces::StandardMem::Request::id_t reqID = ev->getID();
	std::map<Interfaces::StandardMem::Request::id_t, CPURequest*>::iterator reqFind = requestsInFlight.find(reqID);

	if(reqFind == requestsInFlight.end()) {
		out->fatal(CALL_INFO, -1, "Unable to find request %" PRIu64 " in request map.\n", reqID);
	} else{

        /* Some bookkeeping updates, statistics tracking, output, etc here */

        // Handle the response according to type
        ev->handle(stdMemHandlers);

        /* Some clean up for bookkeeping here */

		delete ev;
	}
}
```

### Example 2: Invoking a registered handler from a SimpleMem interface
This example shows how MemHierarchy's StandardInterface subcomponent, which implements the StandardMem interface, triggers callbacks using a handler with the specified signature. The function shown, `receive`, is a callback handler registered on the StandardInterface's Link to the memory subsystem and is called when the Link delivers an SST Event.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from memHierarchy/standardInterface.cc"
void StandardInterface::receive(SST::Event* ev)
{
    // MemEventBase is the memHierarchy library's internal event type
    MemEventBase *me = static_cast<MemEventBase*>(ev);
    StandardMem::Request* deliverReq = nullptr;
    
    /* 
     * Some logic to generate 'deliverReq' which is the StandardMem::Request that should be passed 
     * back to the endpoint 
     */

    delete me;

    if (deliverReq) {
#ifdef __SST_DEBUG_OUTPUT__
        debug.debug(_L5_, "E: %-40" PRIu64 "  %-20s Req:Deliver   (%s)\n", getCurrentSimCycle(), getName().c_str(), deliverReq->getString().c_str());
#endif
// highlight-next-line
        (*recvHandler_)(deliverReq);
    }

}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```