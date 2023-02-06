---
title: complete
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
virtual void complete(unsigned phase);
```
*Availability:* Component, SubComponent, ComponentExtension

The `complete()` function is analagous to the `init()` function but called after simulation end. Any call to get simulation time during this phase returns the simulation's end time. During this phase, components may send events using the untimed event send and receive functions. As with init, complete occurs in rounds and the phase terminates when there are no events to deliver in a subsequent round. Common uses of this lifecycle phase include post-processing data for analysis, quiescing state, and error checking.

:::info Important
This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call `complete()` on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Complete phase, and the order in which they participate. 
:::

## Parameters
* **phase** (unsigned) The phase or round number (i.e., number of times complete() has been called on all components).
* **returns** none


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

    virtual void complete(unsigned int phase) override;

	/** Other public functions here */

  private:
	// Parameters
    unsigned eventsToSend;
    bool verbose;

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

/********* basicSimLifeCycle.cc *********/
#include "sst_config.h"
#include "basicSimLifeCycle.h"

void basicSimLifeCycle::complete(unsigned phase)
{
    if (phase == 0) {
        std::string goodbye = "Goodbye from " + getName();
        std::string farewell = "Farewell from " + getName();
        leftLink->sendUntimedData( new basicLifeCycleEvent(goodbye) );
        rightLink->sendUntimedData( new basicLifeCycleEvent(farewell) );
    }

    // Check for an event on the left link
    while (SST::Event* ev = leftLink->recvUntimedData()) {
        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);
        if (event) {
            leftMsg = event->getStr();
            delete event;
        } else {
            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during complete() but it is not the expected type\n", getName().c_str());
        }
    }

    // Check for an event on the right link
    while (SST::Event* ev = rightLink->recvUntimedData()) {
        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);
        if (event) {
            rightMsg = event->getStr();
            delete event;
        } else {
            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during complete() but it is not the expected type\n", getName().c_str());
        }
    }
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```