---
title: SST::Component
---

A Component is the basic unit of simulation in SST. Components communicate with other components via SST Events sent over SST links. Components can load SubComponents and ComponentExtensions for additional functionality.

## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc --->
```cpp title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"
#include <sst/core/component.h>
#include <sst/core/link.h>

class basicSimLifeCycle : public SST::Component {
  public:
	
	/** ELI removed for brevity, would be here **/

	basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);
	~basicSimLifeCycle();

	/** Other public functions here */

  private:
	// Parameters
    unsigned eventsToSend;

    // Component state
    unsigned eventsReceived;                // Number of events we've received
    unsigned eventsForwarded;               // Number of events we've forwarded
    unsigned eventsSent;                    // Number of events we've sent (initiated)
    std::set<std::string> neighbors;        // Set of all neighbors on the ring
    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map 

    // Additional state reported during finish
    std::string leftMsg, rightMsg;

    // SST Output object, for printing, error messages, etc.
    SST::Output* out;

    // Links
    SST::Link* leftLink;
    SST::Link* rightLink;
}
```
```cpp title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"
#include "sst_config.h"
#include "basicSimLifeCycle.h"

basicSimLifeCycle::basicSimLifeCycle(ComponentId_t, Params& params) : Component(id) {
    out = new Output("", 1, 0, Output::STDOUT);
    
    // Get parameter from the Python input
    bool found;
    eventsToSend = params.find<unsigned>("eventsToSend", 0, found);

    if (!found) {
        out->fatal(CALL_INFO, -1, "Error in %s: the input did not specify 'eventsToSend' parameter\n", getName().c_str());
    }

    // configure our links with a callback function that will be called whenever an event arrives
    leftLink = configureLink("left", new Event::Handler<basicSimLifeCycle>(this, &basicSimLifeCycle::handleEvent));
    rightLink = configureLink("right", new Event::Handler<basicSimLifeCycle>(this, &basicSimLifeCycle::handleEvent));

    // Make sure we successfully configured the links
    // Failure usually means the user didn't connect the port in the input file
    sst_assert(leftLink, CALL_INFO, -1, "Error in %s: Left link configuration failed\n", getName().c_str());
    sst_assert(rightLink, CALL_INFO, -1, "Error in %s: Right link configuration failed\n", getName().c_str());

    // Register as primary and prevent simulation end until we've received all the events we need
    registerAsPrimaryComponent();
    primaryComponentDoNotEndSim();

    // Initialize our variables that count events
    eventsReceived = 0;
    eventsForwarded = 0;
    eventsSent = 0;
}

/* Rest of functions here */
```

## Header
```cpp
#include <sst/core/component.h>
```