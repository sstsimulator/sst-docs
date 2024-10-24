---
title: getSyncQueueDataSize
---

```cpp
uint64_t getSyncQueueDataSize() const;
```

Returns the size of the SyncQueue on this rank.

## Parameters
* **returns** The size of the SyncQueue on the current rank


## Example

```cpp
uint64_t rank_queue_size = getSyncQueueDataSize();
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
