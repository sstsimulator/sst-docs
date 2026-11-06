---
title: getEndSimTime
---

```cpp
UnitAlgebra getEndSimTime() const;
```

Returns the time that simulation ended, as a time with units. The time will be incorrect unless simulation is ending. To get the end time as a cycle count, use [`getEndSimCycle()`](./getEndSimCycle.md).

## Parameters
* **returns** (UnitAlgebra) The time that simulation ended


## Example
```cpp
UnitAlgebra time = getEndSimTime();
getSimulationOutput().output("Simulation ended at %s\n", time.toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
