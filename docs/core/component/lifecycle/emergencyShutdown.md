---
title: emergencyShutdown
---

```cpp
virtual void emergencyShutdown();
```

*Availability:* Component, SubComponent, ComponentExtension

This function is called by the SSTCore on each Component if SST encounters a SIGINT or SIGTERM. Common uses include cleaning up external state and generating additional error or debug information.

:::info Important
This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call `emergencyShutdown()` on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in EmergencyShutdown, and the order in which they participate. 
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
  virtual void emergencyShutdown() override;

	/** Other public functions here */

  private:

    // Component state
    unsigned eventsReceived;                // Number of events we've received
    unsigned eventsForwarded;               // Number of events we've forwarded
    unsigned eventsSent;                    // Number of events we've sent (initiated)

    // SST Output object, for printing, error messages, etc.
    SST::Output* out;

    /** Additional private class members here */
}
```
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"
#include "sst_config.h"
#include "basicSimLifeCycle.h"

void basicSimLifeCycle::emergencyShutdown() 
{
    out->output("Uh-oh, my name is %s and I have to quit. I sent %u messages.\n", getName().c_str(), eventsSent);
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```