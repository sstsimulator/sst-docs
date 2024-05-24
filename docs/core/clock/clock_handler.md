---
title: "Clock Handlers"
---

```cpp
bool handler( Cycle t cycle );
bool handler( Cycle_t cycle, dataT data);
```

Clock handlers must follow the function definitions above. When the SSTCore invokes a handler, it passes in the current cycle count, and optionally, an additional argument provided by the user. The handler function should return a boolean value indicating whether the clock should be disabled (true) or stay enabled (false). Disabling a clock function through the handler is more efficient than using [`unregisterClock()`](../component/time/unregisterClock).

## Parameters
* **cycle** (Cycle_t) Current clock cycle count
* **data** (dataT) Optional, arbitrary data that the handler is created with
* **returns** (bool) Whether the clock should be disabled (true) or not (false)

## Constructing Handlers
A clock handler belonging to class `class` and pointing to function `func` is constructed as follows. The second line demonstrates a handler with metadata of type `dataT` and a value of `data`.
```cpp
SST::Handler* handler = new Clock::Handler2<class, &class::func>(this);
SST::Handler* handler = new Clock::Handler2<class, &class::func, dataT>(this, data);
```

This definition has changed as of SST 14.0 due to the reintroduction of checkpointing support. The old style handler was named `Handler` instead of `Handler2` and passed the handler function pointer to the constructor as a function parameter rather than a template parameter. The `Handler` type is not checkpointable. `Handler` is deprecated in SST 14.0 and the name will be reintroduced in SST 15.0 with the same syntax as `Handler2`.

```cpp title="Handler construction in different versions of SST"
/* Pre-SST 14.0 handler - not checkpointable */
SST::Handler* handler = new Clock::Handler<class>(this, &class::func);
SST::Handler* handler = new Clock::Handler<class, metaT>(this, &class::func, data);

/* SST 14.0 - old and new style supported */
// Old style, deprecated and not checkpointable - update to Handler2 style instead
HandlerBase* handler = new Clock::Handler<class>(this, &class::func);
HandlerBase* handler = new Clock::Handler<class, dataT>(this, &class::func, data);
// New style, checkpointable
HandlerBase* handler = new Clock::Handler2<class, &class::func>(this);
HandlerBase* handler = new Clock::Handler2<class, &class::func, dataT>(this, data);

/* SST 15.0+ - old and new type name both use new style. Eventually the name 'Handler2' will be deprecated. */
HandlerBase* handler = new Clock::Handler<class, &class::func>(this);
HandlerBase* handler = new Clock::Handler<class, &class::func, dataT>(this, data);
HandlerBase* handler = new Clock::Handler2<class, &class::func>(this);
HandlerBase* handler = new Clock::Handler2<class, &class::func, dataT>(this, data);
```

## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicClocks.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicClocks.cc --->
In this example, a component has two clock handlers, `mainTick` and `otherTick`. Each is registered to a different clock.
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicClocks.h"
class basicClocks : public SST::Component
{
public:
    /* ELI and un-related functins omitted for brevity */
    basicClocks(SST::ComponentId_t id, SST::Params& params);
private:
    //Handler function for one clock
    bool mainTick(SST::Cycle_t cycle);

    //Handler function for another clock
    bool otherTick(SST::Cycle_t cycle, uint32_t id);

    // Clock handler handle
    Clock::HandlerBase* clock2Handler;
};
```
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicClocks.cc"
basicClocks::basicClocks(ComponentId_t id, Params& params) : Component(id)
{
    /* Code to read parameters for the clock frequencies clock0Freq, clock1Freq, clock2Freq */

    // Register a clock at clock0Freq to call back the 'mainTick' function
    registerClock(clock0Freq, new Clock::Handler2<basicClocks, &basicClocks::mainTick>(this));

    // Register a clock at clock1Freq to call back the 'otherTick' function. 
    // THe handler also has a uint32_t (our arbitrary data) and this handler will pass a '1' in that field
    clock1converter = registerClock(clock1Freq,
        new Clock::Handler2<basicClocks, &basicClocks::otherTick, uint32_t>(this, 1));

    // Register a clock at clock2Freq to also call back the 'otherTick' function. This will pass a '2' to the 
    // handler so we can differentiate when clock1 calls the handler vs. clock2
    Clock::HandlerBase* handler = new Clock::Handler2<basicClocks, &basicClocks::otherTick, uint32_t>(this, 2);
    clock2converter = registerClock(clock2Freq, handler);

    // How many cycles we'll run the simulation
    cycleCount = 100;
}

bool basicClocks::mainTick( Cycle_t cycle )
{
    // Do something when the clock is called
    cycleCount--;

    if (cycleCount == 0) {
        // Let simulation end, unregister this clock since we have nothing else to do
        primaryComponentOKToEndSim();
        return true;
    } else {
        // Keep the clock registered
        return false;
    }
}

bool basicClocks::otherTick ( Cycle_t cycle, uint32_t id )
{
    // Do something when the clock is called, maybe do something different if id=1 vs id=2
    if (cycle == 10)
        return true; // Stop calling this handler after 10 cycles
    else
        return false;
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```