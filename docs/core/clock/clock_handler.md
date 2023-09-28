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
    registerClock(clock0Freq, new Clock::Handler<basicClocks>(this, &basicClocks::mainTick));

    // Register a clock at clock1Freq to call back the 'otherTick' function. 
    // THe handler also has a uint32_t (our arbitrary data) and this handler will pass a '1' in that field
    clock1converter = registerClock(clock1Freq,
        new Clock::Handler<basicClocks, uint32_t>(this, &basicClocks::otherTick, 1));

    // Register a clock at clock2Freq to also call back the 'otherTick' function. This will pass a '2' to the 
    // handler so we can differentiate when clock1 calls the handler vs. clock2
    Clock::HandlerBase* handler = new Clock::Handler<basicClocks, uint32_t>(tis, &basicClocks::otherTick, 2);
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