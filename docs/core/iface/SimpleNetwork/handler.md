---
title: Handler
---

```cpp
bool func(int vn);
bool func(int vn, dataT data);
```

The above function signatures should be used for SimpleNetwork handlers that are registered with a SimpleNetwork interface using the [setNotifyOnReceive](setNotifyOnReceive) and [setNotifyOnSend](setNotifyOnSend) calls. The function is passed a virtual network on which the interface has event ready to be received or on which an event has just been sent. The return value dictates whether the interface should keep this callback function for the next event or discard it.

## Requirements
**Network interface** &nbsp;  
Network interfaces must support the use of handlers.

**Endpoint** &nbsp;  
Use of handlers is optional. If not used, endpoint must poll the link regularly (e.g., during a clock handler).

## Parameters
* **vn** (int) Which virtual network the notification pertains to
* **data** (dataT) A constant returned with the call. This can be used, for example, to differentiate which interface called the handler, when the same handler is used for multiple interfaces.
* **returns** (bool) Whether to keep the handler registered for a future event or unregister it. Unregistering the handler does not cause it to be deleted.

## Examples

### Example 1: Defining a handler function in an endpoint
The following shows a handler used inside memHierarchy's memNIC SubComponent. The memNIC sends memory traffic over the a network using SimpleNetwork. The SimpleNetwork interface is a subcomponent stored in the `link_control` variable.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/memNIC.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/memNIC.cc"
/*
 * Called by link control when an event is ready to be received
 * Returns whether to keep or discard the handler 
 */
bool MemNIC::recvNotify(int) {
    // 'doRecv' calls linkcontrol->recv(0) to obtain the event that
    // this callback is notifying about. It then gets the MemRtrEvent payload
    // from the SimpleNetwork::Request, deletes the request, and returns the MemRtrEvent.
    MemRtrEvent* mre = doRecv(link_control); // link_control is a SimpleNetwork interface

    if (mre) {
        MemEventBase* ev = mre->event; // Extract the event wrapped in a MemEventBase
        if (ev) {
            /* Some debug code here */
            (*recvHandler)(ev); // Pass received event to MemNIC's parent
        }
    }
    return true; // Tell SimpleNetwork to keep using this handler
}
```

### Example 2: Invoking a registered handler from a SimpleNetwork interface
This example shows how Merlin's LinkControl subcomponent, which implements the SimpleNetwork interface, triggers callbacks using a handler with the specified signature. The function shown, `handle_input`, is a callback handler registered on the LinkControl's Link into the network and is called when the Link delivers an SST Event.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
void LinkControl::handle_input(Event* ev)
{
    /* Determine if the LinkControl has received a credit, control, or data packet event*/
    BaseRtrEvent* base_event = static_cast<BaseRtrEvent*>(ev);

    if ( base_event->getType() == BaseRtrEvent::CREDIT ) {
        /* A credit event, the LinkControl handles this and deletes the Event */
    }
    else if ( baseEvent->getType() == BaseRtrEvent::CTRL ) {
        /* A control packet, the LinkControl handles this and deletes the Event */
    }
    else {
        /* A data packet, this should be delivered to the endpoint */
        RtrEvent* event = static_cast<RtrEvent*>(ev);
        int vn = event->getLogicalVN();

        input_queues[vn].push(event);

        /* Some statistics updates and trace output code is here, removed for brevity */

        // Invoke the receive functor if one was registered with this interface
        // Remove or keep the functor depending on the functor's return value
        if (receiveFunctor != nullptr ) {
            //highlight-next-line
            bool keep = (*receiveFunctor)(vn);
            if ( !keep ) receiveFunctor = nullptr;
        }

    }
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
