---
title: supportsDynamicRegistration
---

```cpp
virtual bool supportsDynamicRegistration() const;
```

This function *may* be overridden if needed.

The default implementation returns `false`. This function should return whether the StatisticOutput can register new statistics after [`startOfSimulation()`](./startOfSimulation) has been called. Typically this occurs if a new SubComponent is dynamically instantiated during simulation. 

## Parameters
* **returns** (bool) Whether the output object supports registration of statistics during simulation

## Example

```cpp title="Validating parameters"
bool supportsDynamicRegistration() const override
{
    return true;
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```