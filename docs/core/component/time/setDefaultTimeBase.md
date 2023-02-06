---
title: setDefaultTimeBase
---

```cpp
void setDefaultTimeBase(TimeConverter* base);
```
*Availability:* Component, SubComponent, ComponentExtension

Sets the calling (Sub)Component's default time base to the specified base.

## Parameters
* **base** (TimeConverter*) TimeConverter specifying the new default time base
* **returns** None


## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
### Example 1
```cpp
// Excerpt from memHierarchy/standardInterface.cc
StandardInterface::StandardInterface(SST::ComponentId_t id, Params& params, TimeConverter* time,
    HandlerBase* handler) : StandardMem(id, params, time, handler)
{
    setDefaultTimeBase(time); // This subcomponent does not have its own timebase, use the parent's

    /** Remaining configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
