---
title: primaryComponentOKToEndSim
---
```cpp
void primaryComponentOKToEndSim();
```
*Availability*: Component

A primary component that has previous registered using [registerAsPrimaryComponent()](registerAsPrimaryComponent) calls this function to let the simulation know that it is currently OK to end simulation. Simulation will not end until all primary components have called this function.

To change status and prevent simulation end, use [primaryComponentDoNoEndSim()](primaryComponentDoNotEndSim).


## Parameters
* **returns** None

## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc --->
### Example 1
```cpp
/********* basicSimLifeCycle.h **********/
#include <sst/core/component.h>
#include <sst/core/link.h>

class basicSimLifeCycle : public SST::Component {
  public:
	
	/** ELI removed for brevity, would be here **/

	basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);
	~basicSimLifeCycle();

	void handleEvent(SST::Event* ev);
	
	/** Other public functions here */

  private:
	// Parameters
    unsigned eventsToSend;					// Number of events we will send and receive
    bool verbose;

    // Component state
    unsigned eventsReceived;                // Number of events we've received
    unsigned eventsForwarded;               // Number of events we've forwarded
    unsigned eventsSent;                    // Number of events we've sent (initiated)

	/** Other private class members here */
}

/********* basicSimLifeCycle.cc *********/
#include "sst_config.h"
#include "basicSimLifeCycle.h"

basicSimLifeCycle::basicSimLifeCycle( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) 
{
	/** Rest of constructor here */

	// Register as primary and prevent simulation end until we've received all the events we need
	registerAsPrimaryComponent();
	primaryComponentDoNotEndSim();
}

/* Event handler for use during SST's run loop */
void basicSimLifeCycle::handleEvent(SST::Event* ev) {
	basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);

	if (event && event->getStr() == getName()) {
		eventsReceived++;
		delete event;

		// We send the same number of events that we receive
		// If we've received all the events we expect, it's OK to end simulation
		if (eventsReceived == eventsToSend)
			primaryComponentOKToEndSim();
	}

	/** Rest of handler here */
}
```


## Header
```cpp
#include <sst/core/component.h>
```
