---
title: reregisterClock
---

```cpp
Cycle_t reregisterClock(TimeConverter* freq, Clock::HandlerBase* handler);
```
*Availability:* Component, SubComponent, ComponentExtension

Re-register a clock at the specified frequency. On each clock cycle, the associated handler will be called. Calling this function for a clock frequency that was not previously registered will cause an error. The function will return the cycle count (in terms of the clock frequency) at which the clock will next be called.

*Note:* If called after the simulation run loop (e.g., in `finish()` or `complete()`)), the cycle time returned by this function will be one cycle past the end time of the simulation. Because there can be a small lag bectween simulation end and detection of simulation end, during which clocks can run a few extra cycles, the return value of this function just prior to simulation end may be greater than the value returned after simulation end.


## Parameters
* **freq** (string, UnitAlgebra, TimeConverter*) Frequency of the clock
* **handler** (Clock::HandlerBase*) Clock handler function to invoke each cycle
* **returns** (Cycle_t) Cycle count, in terms of clock frequency, that the re-registered clock handler will next be called at 

## Example

<!--- SOURCE_CODE: None --->
```cpp
/* 
 * Example component. Events toggle the clock registration.
 */
class Sender : public SST::Component {
public:
    /** ELI removed for brevity */

    Sender(ComponentId_t id, Params& params) : Component(id)
    {
        clockOn = true;
        clockHandler = new Clock::Handler<Sender>(this, &Sender::handleClock);
        clockTimeConverter = registerClock("1GHz", clockHandler);

        /** Other configuration here */
    }

    /** Event handler, called when an event arrives */
    void handleEvent(SST::Event *ev) {
        if (clockOn) {
            clockOn = false;
            unregisterClock(clockTimeConverter, clockHandler);
        } else {
            clockOn = true;
            //highlight-next-line
            reregisterClock(clockTimeConverter, clockHandler);
        }
        delete ev;
    }

    /** Clock handler */
    bool handleClock(Cycle_t cycle) {
        output.output("Clock called at cycle %" PRIu64 "\n", cycle);
        return false;
    }
private:
    bool clockOn;
    TimeConverter* clockTimeConverter;
    Clock::Handler<Sender>* clockHandler;
    /* Other class members here */
};
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
