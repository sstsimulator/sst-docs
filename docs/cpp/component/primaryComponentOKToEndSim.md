---
id: primaryComponentOKToEndSim
title: primaryComponentOKToEndSim()
---
## Fully Qualified Name
```cpp
SST::Component::primaryComponentOKToEndSim()
```

### Remarks
The component should be [registered as a primary component](cpp/component/registerAsPrimaryComponent.md) before calling.

Tells the simulation that it is now OK to end simulation.

Simulation will not end until all primary components have called this function.

## Requirements

```cpp
 #include <sst/core/component.h>
```

## Syntax

```cpp
void SST::Component::primaryComponentOKToEndSim()
```

## Parameters

**None**

## Return Value

**None**

## Examples

### Example 1
```cpp
carWash::carWash( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) {
// ** SNIP **

	registerClock(clock, new SST::Clock::Handler<carWash>(this, &carWash::tick));

// ** SNIP **
}

bool carWash::tick( SST::Cycle_t currentCycle ) 
{
// ** SNIP **

	// Car Wash simulation has finished
	if((runTime * ticksPerHour) <= CarWash.currentTime) {
		primaryComponentOKToEndSim();
		return(true);
	}
	
// ** SNIP **
}
```

## See Also

- [primaryComponentOKToEndSim](cpp/component/primaryComponentOKToEndSim.md)
- [registerAsPrimaryComponent](cpp/component/registerAsPrimaryComponent.md)