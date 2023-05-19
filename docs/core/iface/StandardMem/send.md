---
title: send
---

```cpp
virtual void send(Request* req) = 0;
```

Send a Request to the interface.

## Requirements
**Memory interface** &nbsp;  
Accept requests through this call. Requests cannot be refused so the interface must handle overflow internally.

**Endpoint** &nbsp;  
Use this function to send requests to the memory system via the interface.

## Parameters
* **req** (Request*) A Request to send to the memory system
* **returns** none


## Examples

### Example 1: Implementing send() in a StandardMem interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp "Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
void StandardInterface::send(StandardMem::Request* req)
{
    // Convert req to memHierarchy's internal event type, 'MemEventBase'
    MemEventBase* me = static_cast<MemEventBase*>(req->convert(converter_));
    if (req->needsResponse())
    {
        requests_[me->getID()] = std::make_pair(req, me->getCmd()); /* Save the request so we can use it to generate a response later */
    } else 
    {
        delete req;
    }

    link_->send(me);
}
```

### Example 2: Using send() from an endpoint
StandardCPU issues memory transactions during its clock function, excerpted here.
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/testcpu/standardCPU.cc"
bool standardCPU::clockTic ( Cycle_t )
{
    /* Bookkeeping here */

    /* Generate a request if possible - pseudocode for brevity */
    if ( /* conditions are right to generate a new request */ )
    {
        /* Randomly generate an address */
        StandardMem::Addr addr = rng.generateNextUInt64();

        uint32_t instNum = /* Randomly selected instruction type */
        Interfaces::StandardMem::Request* req = create(/* Instruction with type instNum and address addr */);

        memory->send(req);
    }
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```