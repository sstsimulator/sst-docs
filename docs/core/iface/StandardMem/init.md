---
title: init
---

```cpp
virtual void init(unsigned int phase);
```

This function is called during SST's `init()` phase. The (Sub)Component loading the interface should call this function on the interface during its own `init()` function as SST does not automatically call it on SubComponents. See [`init()`](../../component/lifecycle/complete) for more information.

## Requirements
**Memory interface** &nbsp;  
Not required, may be implemented if desired.

**Endpoint** &nbsp;  
Call `init()` on the interface during each round of the `init()` phase as SST does not automatically call this function on SubComponents. 

## Parameters
* **phase** (unsigned int) The phase or round number (i.e., number of times `init()` has been called on all components)
* **returns** none


## Examples

### Example 1: Implementing init() in StandardMem
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
In this example, taken from the MemHierarchy element library, the StandardMem interface both supports some internal setup and parameter handshakes in memHierarchy as well as allows the endpoint to initialize memory contents. 

```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
void StandardInterface::init(unsigned int phase)
{
    link_->init(phase); // Call init() on the StandardInterface's "link_" subcomponent

    /* Internal memHierarchy initialization - get line size from whichever memory component is connected, facilitate discovery of memory system structure, etc. */
    if (!phase)
    {
        MemEventInitCoherence * event = new MemEventInitCoherence(getName(), epType, false, false, 0, false);
        link_->sendInitData(event);

        /* Other messages if this endpoint is also addressable (e.g., MMIO) */
    }

    while (SST::Event * ev = link_->recvInitData())
    {
        MemEventInit* memEvent = dynamic_cast<MemEventInit*>(ev);
        if (memEvent)
        {
            /* Some code here to record the name, line size, addresses, etc. of components that are
             * on the other side of the interface's link 
             * Once we have enough info to facilitate send messages on the link, set `initDone_ = true;`
             */
        }
        delete event;
    }

    // Forward any messages that the endpoint has sent during init()
    if (initDone_)
    {
        while (!initSendQueue_.empty())
        {
            link_->sendInitData(initSendQueue_.front(), false);
            initSendQueue_.pop();
        }
    }
}
```

### Example 2: Initializing StandardMem, from the endpoint's point of view
<!--- SOURCE_CODE: None --->

During each phase of `init()`, an endpoint must call `init()` on a StandardMem interface.

```cpp
void Endpoint::init(unsigned int phase) {
    //highlight-next-line
    mem_iface->init(phase);
    
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```