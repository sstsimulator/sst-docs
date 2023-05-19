---
title: destructor
---

```cpp
~SimpleNetwork();
```

SST calls the SimpleNetwork destructor prior to exiting. (Sub)Components should *not* call the SimpleNetwork interface's destructor manually. SimpleNetwork interfaces should clean up any state that is not registered with SST (e.g., not a link, clock handler, statistic, etc) in their destructors.

## Requirements
**Network interface** &nbsp;  
Clean up any internal state that is not registered with SST.

**Endpoint** &nbsp;  
Do not call this function. SST will destroy SubComponents.

## Parameters
* **returns** none


## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.h"
#include <sst/core/interfaces/simpleNetwork.h>

// SubComponent API - define an API for a type of subcomponent
class LinkControl : public SST::Interfaces::SimpleNetwork {
public:
    // Tell SST that this class is a SubComponent API
    SST_ELI_REGISTER_SUBCOMPONENT(LinkControl, 
        "merlin",
        "linkcontrol",
        SST_ELI_ELEMENT_VERSION(1,0,0),
        "Link Control module for building Merlin-enabled NICs",
        SST::Interfaces::SimpleNetwork)

    /* Rest of ELI macros */
    LinkControl(ComponentId_t cid, Params &params, int vns);

    ~LinkControl();

    /* Rest of class */
};
```
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
#include <sst_config.h>
#include "linkControl.h"

LinkControl::~LinkControl()
{
    delete [] vn_remap_out;
    delete [] output_queues;
    delete [] router_credits;
    delete [] router_return_credits;
    delete [] input_queues;
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
