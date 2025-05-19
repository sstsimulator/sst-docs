---
title: getCurrentSimTimeMilli
---

```cpp
SimTime_t getCurrentSimTimeMilli() const;
```

Returns the current simulation time as a time in milliseconds. 

## Parameters
* **returns** (SimTime_t) Current simulation time in milliseconds


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The simulated time is %" PRIu64 " ms\n", getCurrentSimTimeMilli());
```

## Header
```cpp
#include <sst/core/portModule.h>
```
