---
title: registerHandlerIntercept
---

```cpp
virtual uintptr_t registerHandlerIntercept(const AttachPointMetaData& mdata);
```

This function should not need to be overridden. It is called when SST registers a PortModule on the receive side of a port and is inherited from the underlying APIs that PortModules use to attach themselves to a port. Typically it would be used to differentiate when a tool is registered to multiple types of AttachPoints, but as PortModules can only be attached to a single port, the base PortModule implementation is sufficient. 

## Parameters
* **mdata** (AttachPointMetaData&) Metadata indicating the type of attach point a tool is attached to. For PortModules, they are always attached to ports.
* **returns** (uintptr_t) A key that can be used to differentiate the specific AttachPoint that generates a callback into the PortModule. As PortModules can only attach to one AttachPoint, this is unused and set to 0. If overridden however, the returned value will be passed to `interceptHandler` via the `key` parameter.

## Example
```cpp
uintptr_t
PortModule::registerHandlerIntercept(const AttachPointMetaData& UNUSED(mdata))
{
    return 0;
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
