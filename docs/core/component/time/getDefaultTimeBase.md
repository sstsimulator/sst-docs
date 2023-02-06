---
title: getDefaultTimeBase
---

```cpp
TimeConverter* getDefaultTimeBase();
const TimeConverter* getDefaultTimeBase() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Return the default time base for the calling (Sub)Component.

## Parameters
* **returns** (TimeConverter*) Default time base

vi m
## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
### Example 1
```cpp
// Excerpt from memHierarchy/standardInterface.cc
StandardInterface::StandardInterface(SST::ComponentId_t id, Params& params, TimeConverter* time,
    HandlerBase* handler) : StandardMem(id, params, time, handler)
{
    /** Begin configuration code here */

    // Pass our default time base to our child subcomponent
    link_ = loadUserSubComponent<MemLinkBase>("memlink", ComponentInfo::SHARE_NONE, getDefaultTimeBase());

    /** Remaining configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
