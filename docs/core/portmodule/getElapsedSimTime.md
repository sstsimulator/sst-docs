---
title: getElapsedSimTime
---

```cpp
UnitAlgebra getElapsedSimTime() const;
```

Returns the current simulation time as a time with units.

## Parameters
* **returns** (UnitAlgebra) Current simulation time


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The simulation has been running for %s.\n", getElapsedSimTime().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/portModule.h>
```
