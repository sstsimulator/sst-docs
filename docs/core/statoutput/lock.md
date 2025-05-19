---
title: lock
---

```cpp
void lock();
```

Use this function to protect against multithreading races if needed. The function will block until the lock is acquired. Any call to `lock()` needs to be paired with a call to [`unlock()`](./unlock).

Note that the lock *has already been acquired* when SST calls `implStartOutputEntries()` on a StatisticOutput object, which ensures that `implStartOutputEntries()`, `implStopOutputEntries()` and any intervening calls to `outputField()` occur atomically for each statistic. Further, `startOfSimulation()` and `endOfSimulation()` are only called for thread 0 on each rank and locking is not necessary. Locking will typically only be required when inheriting from `StatisticOutput` directly, rather than from `StatisticFieldsOutput`.


## Parameters
* **returns** none

## Example

```cpp
//highlight-next-line
this->lock();
buffer += "thing0";
buffer += "thing1";
buffer += "thing2";
this->unlock();
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```