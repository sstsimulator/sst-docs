---
id: basics_header_files
title: Basics: Header (.h) Files
---

## SST::Component Subclass

For the most part, header files are just like any other C++ header file. There are only a few required pieces. Generally, these includes:

- Registering the component with SST
- Registering params, ports, subcomponents, statistics, etc. with SST.
- Variable and function declarations

### Syntax

<!--- java used here since it looked liked the highlight was a bit better (in VS code), would need to test and see what looks best --->

```cpp
//include guard
#ifndef _INSERT_CLASS_NAME_H
#define _INSERT_CLASS_NAME_H

//required
#include <sst/core/component.h>
#include <sst/core/elementinfo.h>

//if you have a port on your component
#include <sst/core/link.h>

//if you have a subcomponent
#include <sst/core/subcomponent.h>

//generally a good idea to have a namespace
namespace SOME_NAMESPACE {

class INSERT_CLASS_NAME : public SST::Component {

public:

    //required, constructor/destructor
    INSERT_CLASS_NAME( SST::ComponentId_t id, SST::Params& params );
	~INSERT_CLASS_NAME();

    //required, functions to run at the start and end of the simulation.
    //  can just be functions that do nothing
	void setup();
	void finish();

    //not required, but almost all components will register a clock and do something on a clock tick. The function name can be anything.
    bool clockTick( SST::Cycle_t currentCycle );

//Register pieces of the component with SST.

    //required
    // Register the component
	SST_ELI_REGISTER_COMPONENT(
		INSERT_CLASS_NAME, // class
		"exA_helloSST", // element library
		"INSERT_CLASS_NAME", // component
		SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version
		"Simple model that prints Hello World!", //description
		COMPONENT_CATEGORY_UNCATEGORIZED //category
	)
    //if you want to accept params from the Project Driver
    //           This text will be used to generate the sst-info documentation.
	SST_ELI_DOCUMENT_PARAMS(
        // Parameter name, description, default value
		{ "repeats", "Number of repetitions to make", "10" },
        { "param", "description", "default" }
	)

    //if you want to collect statistics
	SST_ELI_DOCUMENT_STATISTICS(
        // Statistic name, description, unit, enable level
        { "smallCarsWashed", "Number of small cars washed", "cars", 1 },  
        { "largeCarsWashed", "Number of large cars washed", "cars", 1 },
        { "noCarEvents", "Number of no car generated events", "cars", 2 },
        { "smallCarsWaiting", "Number of small cars still waiting in line", "cars", 1 },
        { "largeCarsWaiting", "Number of large cars still waiting in line", "cars", 1 }
    )
	
	//if you have subcomponents
	SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
        // Slot name, description, slot type
		{ "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }
	)

	//if you have ports
	SST_ELI_DOCUMENT_PORTS(
        // Port name, description, event type
		{ "port", "Port on which to receive cars", {"sst.Interfaces.StringEvent"} }
	)

    private:
	
    //private variables, functions, etc.
	
	//if you have subcomponents
	std::vector<SUBCOMPONENT_CLASS_NAME*> subComps;

    //if you have a port
	SST::Link *port;
	
	// if you have statistics
	Statistic<int>* smallCarsWashed;
	Statistic<int>* largeCarsWashed;
	Statistic<int>* noCarEvents;
	Statistic<int>* smallCarsWaiting;
	Statistic<int>* largeCarsWaiting;
};
} // namespace exC_carWash
#endif
\
```

### Examples

#### <span style="font-size:20px">Example 1: Simple</span>

```cpp
#ifndef _hello_H
#define _hello_H

#include <sst/core/component.h>
#include <sst/core/elementinfo.h>

namespace exA_hello {

class hello : public SST::Component {

public:
	hello( SST::ComponentId_t id, SST::Params& params );
	~hello();

	void setup();
	void finish();

	bool clockTick( SST::Cycle_t currentCycle );

	// Register the component
	SST_ELI_REGISTER_COMPONENT(
		hello, // class
		"exA_helloSST", // element library
		"hello", // component
		SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),
		"Simple model that prints Hello World!",
		COMPONENT_CATEGORY_UNCATEGORIZED
	)

	// Parameter name, description, default value
	SST_ELI_DOCUMENT_PARAMS(
		{ "repeats", "Number of repetitions to make", "10" }
	)

private:
	SST::Output output;
	SST::Cycle_t maxRepeats; //number of repetitions to make
	SST::Cycle_t repeats; //number of repetitions printed already

};
} // namespace exA_hello
#endif
```

#### <span style="font-size:20px">Example 2: More Complex</span>

```cpp
#ifndef _carWash_H
#define _carWash_H

#include <sst/core/component.h>
#include <sst/core/link.h>
#include <sst/core/elementinfo.h>
#include <sst/core/subcomponent.h>

#define WASH_BAY_EMPTY 0
#define WASH_BAY_FULL 1
#define NO_CAR 0
#define SMALL_CAR 1
#define LARGE_CAR 2

namespace exC_carWash {
// carWash subcomponent prototype
class carWashBay : public SST::SubComponent {
public:
	// constructor and destructor cannot be virtual, all other functions must be
	carWashBay(SST::Component *owningComponent) : SubComponent(owningComponent) {};
	~carWashBay() {};
	virtual bool newCar(int CarType) = 0;
	virtual int baySize() = 0;
	virtual int isOccupied() = 0;
	virtual void tick() {};
};


class carWash : public SST::Component {

public:
	carWash( SST::ComponentId_t id, SST::Params& params );
	~carWash();

	void setup();
	void finish();

	bool tick( SST::Cycle_t currentCycle );

    //handle events on the port
	void handleEvent(SST::Event *ev);
	
	// Link list entry; used to store the cars as they are queued for service
	typedef struct CAR_RECORD_T {
		int CarSize; // 0 == Small Car; 1 == Large Car
		CAR_RECORD_T *ptrNext; // The next Car in the linked list	
	} CAR_RECORD;

	// Record to track how many cars have been washed
	typedef struct {
		int currentTime; // Time (ticks) since the epoch of the day
		int smallCarsWashed;
		int largeCarsWashed;
	} CARS_WASHED;
	
	// Record to track how many cars arrived in the past hour
	typedef struct {
		int smallCarsArrived;
		int largeCarsArrived;
		int noCarsArrived;
	} CAR_WASH_JOURNAL;
	
	// Register the component
	SST_ELI_REGISTER_COMPONENT(
		carWash, // class
		"exC_carWash", // element library
		"carWash", // component
		SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),
		"carWash main simulator. Accepts car inputs from a carGenerator component, then queues and washes cars using bay subcomponents",
		COMPONENT_CATEGORY_UNCATEGORIZED
	)

	// Parameter name, description, default value
	SST_ELI_DOCUMENT_PARAMS(
		{ "simulationTime", "How long to run simulation (hours)", "24" }
	)
	
	// Statistic name, description, unit, enable level
	SST_ELI_DOCUMENT_STATISTICS(
        { "smallCarsWashed", "Number of small cars washed", "cars", 1 },  
        { "largeCarsWashed", "Number of large cars washed", "cars", 1 },
        { "noCarEvents", "Number of no car generated events", "cars", 2 },
        { "smallCarsWaiting", "Number of small cars still waiting in line", "cars", 1 },
        { "largeCarsWaiting", "Number of large cars still waiting in line", "cars", 1 }
    )
	
	// Slot name, description, slot type
	SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
		{ "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }
	)

	// Port name, description, event type
	SST_ELI_DOCUMENT_PORTS(
		{ "port", "Port on which to receive cars", {"sst.Interfaces.StringEvent"} }
	)

private:
	SST::Output output;
	CAR_RECORD *ptrCarRecordList;
	CARS_WASHED CarWash;
	CAR_WASH_JOURNAL HourlyReport;

	void QueueACar(int carSize);
	void CarWashClockTick();
	
	int CarWashTick;
	std::string clock;
	float ticksPerHour;
	int64_t runTime;
	int CarType;
	std::vector<carWashBay*> subComps;
	SST::Link *port;
	
	// Statistics
	Statistic<int>* smallCarsWashed;
	Statistic<int>* largeCarsWashed;
	Statistic<int>* noCarEvents;
	Statistic<int>* smallCarsWaiting;
	Statistic<int>* largeCarsWaiting;
};
} // namespace exC_carWash
#endif

```

## SST::Subcomponent Subclass

The syntax is the same as a Component class, except you use SST_ELI_REGISTER_SUBCOMPONENT instead of SST_ELI_REGISTER_COMPONENT. 

```cpp
// Register the subcomponent
	SST_ELI_REGISTER_SUBCOMPONENT(
		bay, // class
		"exC_carWash", // element library
		"bay", // subcomponent
		SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version
		"Bay subcomponent for the carwash", //description
		"SST::exC_carWash::carWashBay" // type of objects that subcomponent slots will have
	)
```

### Syntax 

```cpp
#ifndef _INSERT_CLASS_NAME_H
#define _INSERT_CLASS_NAME_H

#include "INSERT_COMPONENT_WITH_SUBCOMPONENT_DEFINITION.h"

//generally a good idea to have a namespace
namespace SOME_NAMESPACE {

class INSERT_CLASS_NAME : public INSERT_PARENT_CLASS_NAME {

public:
	INSERT_CLASS_NAME( SST::Component *owningComponent, SST::Params& params );
	~INSERT_CLASS_NAME();

	//public interface functions. 
	// - pass in data from events the main component gets
	// - functions to run on each clock tick of the main component
	// - other getters/setters

	// Register the subcomponent
	SST_ELI_REGISTER_SUBCOMPONENT(
		INSERT_CLASS_NAME, // class
		"exC_carWash", // element library
		"INSERT_CLASS_NAME", // subcomponent
		SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),
		"Bay subcomponent for the carwash",
		"SST::SOME_NAMESPACE::INSERT_PARENT_CLASS_NAME" // subcomponent slot
	)

	// Parameter name, description, default value
	SST_ELI_DOCUMENT_PARAMS(
		{ "size", "Size of the bay (1 = small, 2 = large)", "1" },
		{ "smallCarWashTime", "How long to wash a small car (ticks)", "3" },
		{ "largeCarWashTime", "How long to wash a large car (ticks)", "5" }
	)
	
	// Statistic name, description, unit, enable level
	SST_ELI_DOCUMENT_STATISTICS(
        { "carsWashed", "Number of cars washed", "cars", 1 },
        { "idleTime", "Time spent not washing cars", "ticks", 1 }
    )


private:
	//private variables, functions, etc.
};
} // namespace SOME_NAMESPACE
#endif
```

### Examples

#### <span style="font-size:20px">Example 1<span>
```cpp
#ifndef _bay_H
#define _bay_H

#include "carWash.h"

namespace exC_carWash {

class bay : public carWashBay {

public:
	bay( SST::Component *owningComponent, SST::Params& params );
	~bay();

	bool newCar(int CarType);
	int baySize();
	int isOccupied();
	void tick();

	// Register the subcomponent
	SST_ELI_REGISTER_SUBCOMPONENT(
		bay, // class
		"exC_carWash", // element library
		"bay", // subcomponent
		SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),
		"Bay subcomponent for the carwash",
		"SST::exC_carWash::carWashBay" // subcomponent slot
	)

	// Parameter name, description, default value
	SST_ELI_DOCUMENT_PARAMS(
		{ "size", "Size of the bay (1 = small, 2 = large)", "1" },
		{ "smallCarWashTime", "How long to wash a small car (ticks)", "3" },
		{ "largeCarWashTime", "How long to wash a large car (ticks)", "5" }
	)
	
	// Statistic name, description, unit, enable level
	SST_ELI_DOCUMENT_STATISTICS(
        { "carsWashed", "Number of cars washed", "cars", 1 },
        { "idleTime", "Time spent not washing cars", "ticks", 1 }
    )


private:
	SST::Output output;
	int bay_size;
	int smallTime;
	int largeTime;
	int occupied;
	int timeToOccupy;
	Statistic<uint32_t>* carsWashed;
	Statistic<uint32_t>* idleTime;
};
} // namespace exC_carWash
#endif
```
