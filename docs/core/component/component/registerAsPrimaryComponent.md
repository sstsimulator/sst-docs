---
title: registerAsPrimaryComponent
---
```cpp
void registerAsPrimaryComponent();
```
*Availability*: Component

Register as a primary component, which allows the component to specify when it is and is not OK to end simulation.  The simulator will not end simulation naturally (through use of the Exit object) while any primary component has specified [primaryComponentDoNotEndSim()](primaryComponentDoNotEndSim). However, it is still possible for Actions other than Exit to end simulation. Once all primary components have specified [primaryComponentOKToEndSim()](primaryComponentOKToEndSim), the Exit object will trigger and end simulation.

This must be called during simulation wireup (i.e during the constructor for the component). By default, the state of the primary component is set to OKToEndSim.

If no component registers as a primary component, then the Exit object will not be used for that simulation and simulation termination must be accomplished through some other mechanism (e.g. `--stop-at` flag, or some other Action object).


## Parameters
* **returns** None

## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc --->
```cpp title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"
basicSimLifeCycle::basicSimLifeCycle( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) 
{
	// Register as primary and prevent simulation end until we've received all the events we need
	registerAsPrimaryComponent();
	primaryComponentDoNotEndSim();
}
```

## Header
```cpp
#include <sst/core/component.h>
```