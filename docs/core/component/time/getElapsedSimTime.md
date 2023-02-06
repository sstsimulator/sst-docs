---
title: getElapsedSimTime
---

```cpp
UnitAlgebra getElapsedSimTime() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the current simulation time as a time with units.

## Parameters
* **returns** (UnitAlgebra) Current simulation time


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
output.output("The simulation has been running for %s.\n", getElapsedSimTime().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
