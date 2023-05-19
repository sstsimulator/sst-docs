---
title: sendUntimedData
---

```cpp
virtual void sendUntimedData(Request* req) = 0;
```

Send a request to the interface during SST's `init()` or `complete()` phases

## Requirements
**Memory interface** &nbsp;  
May support accepting requests for the memory system if desired. If memory system also faciliates communication between multiple endpoints, should support transferring untimed requests during these phases between the endpoints as well.

**Endpoint** &nbsp;  
Use if needed.

## Parameters
* **req** (Request*) A Request to send during SST's untimed lifecycle phases
* **returns** none


## Examples

### Example 1: Implementing sendUntimedData() in a StandardMem interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
The MemHierarchy library supports initializing data values in a memory component during `init()`. It only supports Write requests during this phase.
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
void StandardInterface::sendUntimedData(StandardMem::Request* req)
{
    StandardMem::Write* wr = static_cast<StandardMem::Write*>(req);
    MemEventInit* me = new MemEventInit(getName(), Command::Write, wr->pAddr, wr->data);
    if (initDone_)
    {
        link_->sendInitData(me, false); /* Send immediately */
    }
    else
    {
        initSendQueue_.push(me); /* Send once the memory system is ready to accept requests */
    }
}
```

### Example 2: Using sendUntimedData() from an endpoint
<!--- SOURCE_CODE: sst-elements/src/sst/elements/vanadis/os/vloadpage.cc --->
The Vanadis library initializes memory with the binary and any data that will be used during simulation.
```cpp title="Excerpt from sst-elements/src/sst/elements/vanadis/os/vloadpage.cc"
mem_if->sendUntimedData( new SST::Interfaces::StandardMem::Write( physAddr, page_size, pageBuffer) );
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```