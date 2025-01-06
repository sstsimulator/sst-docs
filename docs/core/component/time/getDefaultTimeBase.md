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

## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
StandardInterface::StandardInterface(SST::ComponentId_t id, Params& params, TimeConverter* time,
    HandlerBase* handler) : StandardMem(id, params, time, handler)
{
    /** Begin configuration code here */

    // Pass our default time base to our child subcomponent
    //highlight-next-line
    link_ = loadUserSubComponent<MemLinkBase>("lowlink", ComponentInfo::SHARE_NONE, getDefaultTimeBase());

    /** Remaining configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
