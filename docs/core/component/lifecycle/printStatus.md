---
title: printStatus
---

```cpp
virtual void printStatus(SST::Output& out);
```
*Availability:* Component, SubComponent, ComponentExtension

This function is called by the SSTCore on each Component if SST encounters a SIGUSR2. A common use of this function is to print the current state of the component for debug purposes or to check progress.

:::info Important
This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call `printStatus()` on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in printStatus, and the order in which they participate. 
:::

## Parameters
* **out** (Output&) The output object SST is using to output state
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
  virtual void printStatus(Output& out) override;

	/** Other public functions here */

  private:

    // Component state
    unsigned eventsReceived;                // Number of events we've received
    unsigned eventsForwarded;               // Number of events we've forwarded
    unsigned eventsSent;                    // Number of events we've sent (initiated)

    /** Additional private class members here */
}
```
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"
#include "sst_config.h"
#include "basicSimLifeCycle.h"

void basicSimLifeCycle::printStatus(Output& out) {
    out.output("%s reporting. I have sent %u messages, received %u, and forwarded %u.\n", 
            getName().c_str(), eventsSent, eventsReceived, eventsForwarded);
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```