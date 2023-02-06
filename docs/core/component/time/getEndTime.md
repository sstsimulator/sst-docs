---
title: getEndTime
---

```cpp
UnitAlgebra getEndTime() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the time that simulation ended with units. This function is for use in the [complete()](../lifecycle/complete) and [finish()](../lifecycle/finish) phases of simulation.

## Parameters
* **returns** (UnitAlgebra) Time that simulation ended with units


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
output.output("The simulation ended after %s.\n", getEndTime().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
