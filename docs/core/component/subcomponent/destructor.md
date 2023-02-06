---
title: SubComponent destructor
---

```cpp
~SubComponent();
```
*Availability*: SubComponent
SST calls each subcomponent's destructor prior to exiting. Components should *not* call a SubComponent's destructor manually. SubComponents are responsible for cleaning up internal state but not state registered with SST including links, clock handlers, and statistics. Note that some SSTCore state may have already been cleaned up when the destructor is called and so subcomponents should not attempt to call any SubComponent API functions in their destructors.

## Parameters
* **returns** none


## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h --->
### Example 1
```cpp
/* Source: simpleElementExample/basicSubComponent_subcomponent.h */

#include <sst/core/subcomponent.h>

// SubComponent API - define an API for a type of subcomponent
class basicSubComponentAPI : public SST::SubComponent 
{
public:
    // Tell SST that this class is a SubComponent API
    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)

    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}
    virtual ~basicSubComponentAPI() {}

    virtual int compute (int num) =0;
    virtual std::string compute (std::string comp) =0;
};
```

## Header
```cpp
#include <sst/core/subcomponent.h>
```
