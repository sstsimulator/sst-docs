---
title: destructor
---

```cpp
~StandardMem();
```

SST calls the StandardMem destructor prior to exiting. (Sub)Components should *not* call the StandardMem interface's destructor manually. StandardMem interfaces should clean up any state that is not registered with SST (e.g., not a link, clock handler, statistic, etc) in their destructors.

## Requirements
**Memory interface** &nbsp;  
Clean up any internal state that is not registered with SST.

**Endpoint** &nbsp;  
Do not call this function. SST will destroy SubComponents.

## Parameters
* **returns** none


## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.h"
#include <sst/core/interfaces/stdMem.h>

class StandardInterface : public SST::Interfaces::StandardMem {
public:
    // Tell SST that this class is a SubComponent API
    SST_ELI_REGISTER_SUBCOMPONENT(StandardInterface, "memHierarchy", "standardInterface", SST_ELI_ELEMENT_VERSION(1,0,0), "Interface to memory hierarchy between endpoint and cache. COnverts StandardMem requests into MemEventBases.", SST::Interfaces::StandardMem)

    /* Rest of ELI macros */

    StandardInterface(ComponentId_t cid, Params &params, TimeConverter* time, HandlerBase* handler = NULL);

    ~StandardInterface();

    /* Rest of class */
};
```
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
#include <sst_config.h>
#include "standardInterface.h"

StandardInterface::StandardInterface(ComponentId_t cid, Params &params, TimeConverter* time, HandlerBase* handler) :
    StandardMem(id, params, time, handler)
    {
        setDefaultTimeBase(time); // Links are required to have a timebase

        /** Rest of constructor implementation **/
    }
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```
