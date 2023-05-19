---
title: primaryComponentDoNotEndSim
---
```cpp
void primaryComponentDoNotEndSim();
```
*Availability*: Component

A primary component that has previous registered using [registerAsPrimaryComponent()](registerAsPrimaryComponent) calls this function to let the simulation know that simulation should not end until this component changes its state using [primaryComponentOKToEndSim()](primaryComponentOKToEndSim). Simulation will not end while any component has used this function to indicate that they are not ready for simulation end.


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