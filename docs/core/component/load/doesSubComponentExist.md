---
title: doesSubComponentExist
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
bool doesSubComponentExist(const std::string& type);
```
*Availability:* Component, SubComponent, ComponentExtension

Determine whether a SubComponent of the specified type is known to SST.

## Parameters
* **type** (string) Type of SST SubComponent in `lib.type` format
* **returns** (bool) True if SubComponent exists, otherwise false

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