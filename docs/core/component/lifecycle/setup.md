---
title: setup
---

```cpp
virtual void setup();
```
*Availability:* Component, SubComponent, ComponentExtension

The `setup()` function is called by SST after the `init()` phase is finished and just prior to simulation begin. SST calls this function once on all components. It is an opportunity for components to enqueue initial events for after simulation begins if needed and do any last internal setup prior to simulation.

:::info Important
This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call `setup()` on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Setup phase, and the order in which they participate. 
:::


## Parameters
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
  virtual void setup() override;

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
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"
#include "sst_config.h"
#include "basicSimLifeCycle.h"

void basicSimLifeCycle::setup() {
    // Use the average of each components' eventsToSend parameter to agree on eventsToSend
    // Then, total events to send during simulation is our neighbors * events to each
    eventsToSend /= (neighbors.size() + 1); // Plus one since I am not in the neighbor list
    eventsToSend *= neighbors.size(); // Total number of events to send

    // Sanity check
    if (neighbors.empty() || eventsToSend == 0) {
        primaryComponentOKToEndSim();
        return;
    }

    // Since all the sets are ordered the same, stagger the starting neighbor
    iter = neighbors.upper_bound(getName());
    if (iter == neighbors.end()) iter = neighbors.begin();

    // Send first event
    leftLink->send(new basicLifeCycleEvent(*iter));
    
    // Record that we sent this event
    eventsSent++;

    // Update iter to prepare for next send
    iter++;
    if (iter == neighbors.end()) iter = neighbors.begin();
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```