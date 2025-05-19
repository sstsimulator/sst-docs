---
title: getCurrentSimCycle
---

```cpp
SimTime_t getCurrentSimCycle() const;
```
Returns the current simulation time as a cycle count in terms of the Core's timebase (default: 1ps).

## Parameters
* **returns** (SimTime_t) Current simulation time in core cycles


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("Printing statistics at time %" PRIu64 ".\n", getCurrentSimCycle());
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```
