---
title: getEndSimCycle
---

```cpp
SimTime_t getEndSimCycle() const;
```

Returns the time that simulation ended. The time will be incorrect unless simulation is ending.

## Parameters
* **returns** The time that simulation ended.


## Example
```cpp
SimTime_t time = getEndSymCycle();
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
