---
title: PortModule
---

:::info API Not Final
The PortModule API has not been finalized and may be changed without notice in subsequent versions of SST.
:::

PortModules can be attached to the send and/or receive side of a port. The module intercepts the event stream through that port and can monitor, modify, replace, and delete events. A PortModule is always co-located with the Component whose port it is attached to. PortModules have limited access to SST APIs. For more complex needs, consider using a [SubComponent](../component/subcomponent/class.md) instead.

:::warning
Attaching a PortModule to a port on the send side (i.e., to monitor outgoing traffic) has known performance issues. We recommend attaching to the receive side (input port) when possible or using a SubComponent instead to avoid perturbing the `SST::Link` send path.
:::

## PortModule names
As with SubComponents, PortModules are unnamed. When needed (such as for statistic output), a PortModule will be assigned a name that indicates its location: "component_name.port_name.module_index".
* "component_name" : Name of the component to which the PortModule is attached
* "port_name" : Name of the port that the PortModule was attached to
* "port_index" : A vector index indicating which PortModule on the attached port corresponds to this PortModule. If only one PortModule is attached to a port then the index will be 0.

## PortModule Implementation
PortModules inherit the following functions from the base PortModule and *must* override them.
* [Constructor](./constructor.md)
* [Destructor](./destructor.md)
* [`eventSent`](./eventSent.md)
* [`interceptHandler`](./interceptHandler.md)

PortModules inherit the following functions from the base PortModule and should override them as needed.
* [`installOnReceive`](./installOnReceive.md)
* [`installOnSend`](./installOnSend.md)
* [`serialize_order`](./serialize_order.md)

PortModules share base APIs with other tools that attach to various places ("AttachPoints") in SST. However, PortModules cover a narrower use case (tools that attach only to ports) and therefore PortModules can override these inherited functions as well but are unlikely to need to do so.
* [`registerHandlerIntercept`](./registerHandlerIntercept.md)
* [`registerLinkAttachTool`](./registerLinkAttachTool.md)
* [`serializeEventAttachPointKey`](./serializeEventAttachPointKey.md)
* [`serializeHandlerInterceptPointKey`](./serializeHandlerInterceptPointKey.md)

## Access to SST-Core APIs
PortModules also have the following functions available to access SST-Core state.
* [`getCoreTimeBase`](./getCoreTimeBase.md)
* [`getCurrentSimCycle`](./getCurrentSimCycle.md)
* [`getCurrentPriority`](./getCurrentPriority.md)
* [`getElapsedSimTime`](./getElapsedSimTime.md)
* [`getSimulationOutput`](./getSimulationOutput.md)
* [`fatal`](./fatal.md)
* [`sst_assert`](./fatal.md)
* [`getName`](./getName.md)
* [`getCurrentSimTime`](./getCurrentSimTime.md)
* [`getCurrentSimTimeNano`](./getCurrentSimTimeNano.md)
* [`getCurrentSimTimeMicro`](./getCurrentSimTimeMicro.md)
* [`getCurrentSimTimeMilli`](./getCurrentSimTimeMilli.md)
* [`registerStatistic`](./registerStatistic.md)


## Example
```cpp title="Example PortModule that randomly drops events; header file"
class DropEvent : public SST::PortModule
{
public:
    SST_ELI_REGISTER_PORTMODULE(
        DropEvent,                      // Class name
        "example",                      // Library name, the 'lib' in SST's lib.name format
        "drop",                         // Name used to refer to this port module, the 'name' in SST's lib.name format
        SST_ELI_ELEMENT_VERSION(1,0,0), // A version number
        "Randomly drops events")        // Description

    SST_ELI_DOCUMENT_PARAMS(
        { "drop_probability", "Set the probability of a dropped event between 0\% and 100\%", "10",},
        { "seed", "Seed to use for random number generation", "1" }
    )

    DropEvent(Params& params);
    ~DropEvent();

    void eventSend(uintptr_t key, Event*& ev) override;
    void interceptHandler(uintptr_t key, Event*& ev, bool& cancel) override;

    bool installOnReceive() override { return true; }
    bool installOnSend() override { return false; }

private:
    SST::RNG::MersenneRNG * rng;
    uint32_t probability;
};
```

```cpp title="Example PortModule that randomly drops events; implementation file"
#include "drop_event.h"

DropEvent::DropEvent(Params& params) : PortModule()
{
    rng = new SST::RNG::MersenneRNG(params.find<unsigned>("seed", 1));
    probability = params.find<uint32_t>("drop_probability", 10);
}

~DropEvent::DropEvent() 
{
    delete rng;
}

void DropEvent::eventSent(uintptr_t key, Event*& ev)
{
    uint32_t prob = (rng->getNextUInt32() % 100);
    if (prob <= probability) {
        delete ev;
        ev = nullptr;
    }
}

void DropEvent::interceptHandler(uintptr_t key, Event*& ev, bool& cancel)
{
    uint32_t prob = (rng->getNextUInt32() % 100);
    if (prob <= probability) {
        delete ev;
        ev = nullptr;
        cancel = true;
    } else {
        cancel = false;
    }
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```