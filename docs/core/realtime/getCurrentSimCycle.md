---
title: getCurrentSimCycle
---

```cpp
SimTime_t getCurrentSimCycle() const;
```

Returns the current simulation time as a cycle count in terms of the SST-Core time base.

## Parameters
* **returns** The current simulation cycle count.


## Example
```cpp
SimTime_T cycles = getCurrentSimCycle();
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
