---
title: getNextClockCycle
---

```cpp
Cycle_t getNextClockCycle(TimeConverter* freq);
```
*Availability:* Component, SubComponent, ComponentExtension

Return the next cycle count that a clock with the provided frequency would fire. If called prior to the simulation run loop, returns 0. If called after the simulation run loop, returns one cycle past the time that the simulation ended. 


## Parameters
* **freq** (TimeConverter*) Frequency of the clock
* **returns** (Cycle_t) Cycle count that the clock would next be fired at 

## Example

<!--- SOURCE_CODE: None --->
```cpp
void example::handleEvent(SST::Event* ev) {
    
    /** Handle event here */

    output.output("Received event at cycle %" PRIu64 "\n", getNextClockCycle());
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
