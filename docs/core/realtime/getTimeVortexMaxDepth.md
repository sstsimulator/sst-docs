---
title: getTimeVortexMaxDepth
---

```cpp
uint64_t getTimeVortexMaxDepth() const;
```

Returns the maximum depth of the TimeVortex (event queue) on the current rank/thread. Each thread has its own TimeVortex.

## Parameters
* **returns** The maximum size of the TimeVortex


## Example

```cpp
uint64_t local_max_depth = getTimeVortexMaxDepth();
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
