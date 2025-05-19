---
title: getCurrentSimCycle
---

```cpp
SimTime_t getCurrentSimCycle() const;
```

Returns the current simulation time as a cycle count. See [getCoreTimeBase](getCoreTimeBase) for cycle time.

## Parameters
* **returns** (SimTime_t) Current simulation time in core cycles


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The simulation has been running for %" PRIu64 " cycles.\n", getCurrentSimCycle());
```

## Header
```cpp
#include <sst/core/portModule.h>
```
