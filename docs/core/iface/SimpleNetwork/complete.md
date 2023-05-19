---
title: complete
---

```cpp
virtual void complete(unsigned int phase);
```

This function is called during SST's `complete()` phase. The (Sub)Component loading the interface should call this function on the interface during its own `complete()` function as SST does not automatically call it on SubComponents. See [`complete()`](../../component/lifecycle/complete) for more information. A SubComponent implementing the SimpleNetwork interface should facilitate sending endpoint's events during `complete()`, even if it does not itself use the phase.

## Requirements
**Network interface** &nbsp;  
Faciliate sending untimed requests sent by endpoints through the network

**Endpoint** &nbsp;  
Call `complete()` on the interface during each round of the `complete()` phase as SST does not automatically call this function on SubComponents. 


## Parameters
* **phase** (unsigned) The phase or round number (i.e., number of times complete() has been called on all components).
* **returns** none


## Examples

### Example 1: Implementing complete() in a SimpleNetwork
The Merlin network continues to pass events on network links as needed during `complete()`. Network libraries should do this to ensure that endpoints can send events to each other during `complete()` if required.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
void LinkControl::complete(unsigned int phase)
{
    // Pass any packets sent during complete to the parent
    Event* ev;
    RtrInitEvent* init_ev;

    while ( (ev = rtr_link->recvUntimedData() ) != nullptr ) {
        BaseRtrEvent* bev = static_cast<BaseRtrEvent*>(ev);
        switch (bev->getType()) {
            case BaseRtrEvent::PACKET:
            init_events.push_back(static_cast<RtrEvent*>(ev)); // Save the event to be delivered when the parent calls 'recvUntimedData'
            break;
        default:
            /* should not happen */
            merlin_abort_full.fatal(CALL_INFO, 1, "Reached state where a non-RtrEvent was not handled.");
            break;
        }
    }
}
```

### Example 2: Supporting complete() at an endpoint
```cpp
void Endpoint::complete(unsigned int phase)
{
    net_iface->complete(phase); // Must call complete() on the SimpleNetwork interface
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```