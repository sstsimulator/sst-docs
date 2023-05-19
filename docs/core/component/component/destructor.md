---
title: destructor
---

```cpp
~Component();
```
*Availability*: Component
SST calls each components destructor prior to exiting. Components are responsible for cleaning up internal state but not state registered with SST including links, clock handlers, and statistics. Note that some SSTCore state may have already been cleaned up when the destructor is called and so components should not attempt to call any Component API functions in their destructors.

## Parameters
* **returns** none


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
```cpp title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"
#include "sst_config.h"
#include "basicSimLifeCycle.h"

basicSimLifeCycle::~basicSimLifeCycle()
{
    // Links are deleted by the SST Core. 
    // The only thing we need to do is delete our output object
    delete out;
}
```

## Header
```cpp
#include <sst/core/component.h>
```
