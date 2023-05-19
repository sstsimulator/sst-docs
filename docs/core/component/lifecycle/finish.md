---
title: finish
---

```cpp
virtual void finish();
```

*Availability:* Component, SubComponent, ComponentExtension

The `finish()` function is analagous to the `setup()` function but called after simulation end. It is called once on each component, just prior to simulation destruction. Common uses of this function include generating output, local post-processing, and error-checking.

:::info Important
This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call `finish()` on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Finish phase, and the order in which they participate. 
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
  virtual void finish() override;

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

void basicSimLifeCycle::finish()
{
    out->output("    My name is %s and I sent %u messages. I received %u messages and forwarded %u messages.\n"
            "    My left neighbor said: %s\n"
            "    My right neighbor said: %s\n",
            getName().c_str(), eventsSent, eventsReceived, eventsForwarded,
            leftMsg.c_str(), rightMsg.c_str());
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```