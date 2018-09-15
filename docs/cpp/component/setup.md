---
id: setup
title: setup()
---
## Fully Qualified Name
```cpp
SST::BaseComponent::setup()
```

### Remarks
Called after all components have been constructed and initialization has completed, but before simulation time has begun.

Typical tasks done:
- Initialize variables
- Perform checks to make sure the Component is setup correctly.
- Other tasks to do before starting the simulation.

## Requirements

```cpp
 #include <sst/core/component.h>
```

## Syntax

```cpp
void SST::BaseComponent::setup ()
```

## Parameters

**None**

## Return Value

**None**

## Examples

### Example 1
```cpp
void carWash::setup() {
	ptrCarRecordList = NULL;
	CarWash.currentTime = 0;
	CarWash.smallCarsWashed = 0;
	CarWash.largeCarsWashed =0;
	CarWashTick = 0;
	HourlyReport.smallCarsArrived = 0;
	HourlyReport.largeCarsArrived = 0;
	HourlyReport.noCarsArrived = 0;
	CarType = NO_CAR;
}
```

#### Example 2
```cpp

void DirectoryController::setup (void)
{
     network->setup();
     
     numTargets = network->getSources()->size();
     
     if(0 == numTargets) dbg.fatal(CALL_INFO,-1,"%s, Error: Did not find any caches during init\n",getName().c_str());
 
     entrySize = (numTargets+1)/8 +1;
 }
```

## See Also

- [finish](cpp/component/finish.md)