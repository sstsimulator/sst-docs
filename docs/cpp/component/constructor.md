---
id: constructor
title: constructor
---
## Fully Qualified Name
```cpp
SST::Component
```

### Remarks
Typically not called directly. SST will build and call the constructor.

Typical tasks:
- read params from the project driver
- process params
- initialize SubComponents
- register one or more clocks
- configure ports
- setup statistics

## Requirements

```cpp
#include <sst/core/component.h>
```

## Syntax

```cpp
// base constructor, this is not usually overridden by custom components.
// instead SST will call the constructor with SST::Params
SST::Component::Component (SST::ComponentId_t id)

// typical syntax for custom components.
MyComponent::MyComponent (SST::ComponentId_t id, SST::Params& params) : SST::Component(id) { /* constructor code */ }
```

## Parameters

**id** - the id for the component, this is passed in by SST. Usually just need to pass it to the base SST::Component constructor.

**SST::Params&** - the params set by the project driver.

## Return Value

**None**

## Examples

### Example 1
```cpp
carWash::carWash( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) {

	output.init("carWash-" + getName() + "-> ", 1, 0, SST::Output::STDOUT);

	// read params from the project driver
	runTime = params.find<int64_t>("simulationTime", 24);
	clock = params.find<std::string>("tickFreq", "60s");
	
    //process params
	// Figure out the ticks per hour using the given tickFreq
	if ( clock.compare(clock.length()-1, 1, "s") == 0 ) {
		ticksPerHour = (60.0 / std::stof(clock)) * 60.0;
	}else if ( clock.compare(clock.length()-2, 2, "Hz") == 0 ) {
		ticksPerHour = std::stof(clock) * 60.0 * 60.0;
	}
	
	// Initialize subcomponents
	// Using this technique allows for 1 or more bays
	SST::SubComponentSlotInfo* info = getSubComponentSlotInfo("bay");
	if ( !info ) {
		output.fatal(CALL_INFO, -1, "Must specify at least one bay.\n");
	}
	info->createAll(subComps);
	
	// tell the simulator not to end without us
	registerAsPrimaryComponent();
	primaryComponentDoNotEndSim();

	//register one or more clocks
	// Set our Main Clock (register main clocks)
	// This will automatically be called by the SST framework
	registerClock(clock, new SST::Clock::Handler<carWash>(this, &carWash::tick));
	
	// Setup statistics
	smallCarsWashed = registerStatistic<int>("smallCarsWashed");
	largeCarsWashed = registerStatistic<int>("largeCarsWashed");
	noCarEvents = registerStatistic<int>("noCarEvents");
	smallCarsWaiting = registerStatistic<int>("smallCarsWaiting");
	largeCarsWaiting = registerStatistic<int>("largeCarsWaiting");
	
	// configure ports
	port = configureLink("port", new SST::Event::Handler<carWash>(this, &carWash::handleEvent));
	if ( !port ) {
		output.fatal(CALL_INFO, -1, "Failed to configure port 'port'\n");
	}
}
```

## See Also