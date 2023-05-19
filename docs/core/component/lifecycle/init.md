---
title: init
---

```cpp
virtual void init(unsigned phase);
```

*Availability:* Component, SubComponent, ComponentExtension

The `init()` function is called by SST after all components are constructed but before simulation begins. It is an opportunity to set up state and prepare for simulation. Components may send events during init but must use the special untimed send and receive functions. Event handlers are not yet active so links must be polled. Init occurs in rounds or phases, with events sent in a prior round delivered in the subsequent round. All components participate in all rounds. SST calls `init()` in a loop until there are no events to deliver in the next round.

:::info Important
This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call `init()` on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Init phase, and the order in which they participate. 
:::

## Parameters
* **phase** (unsigned) The phase or round number (i.e., number of times `init()` has been called on all components).
* **returns** none


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"
#include <sst/core/component.h>
#include <sst/core/link.h>

class basicSimLifeCycle : public SST::Component {
  public:
	
	/** ELI removed for brevity, would be here **/

	basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);
	~basicSimLifeCycle();

    //highlight-next-line
    virtual void init(unsigned phase) override;

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
```
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"
#include "sst_config.h"
#include "basicSimLifeCycle.h"

void basicSimLifeCycle::init(unsigned int phase) {

    // Only send our info on phase 0
    if (phase == 0) {
        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);
        leftLink->sendUntimedData(event);
    }

    // Check if an event is received. recvUntimedData returns nullptr if no event is available
    while (SST::Event* ev = rightLink->recvUntimedData()) {

        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);

        if (event) {
            if (event->getStr() == getName()) { // Event made it around the ring and back to this component
                delete event;
            } else { // Event is from another component
                neighbors.insert(event->getStr());
                eventsToSend += event->getNum();
                leftLink->sendUntimedData(event);
            }

        } else {
            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during init() but it is not the expected type\n", getName().c_str());
        }
    }
}
```

## Header
## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```