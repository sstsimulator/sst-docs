---
title: getRank
---

```cpp
RankInfo getRank() const;
```

Returns a RankInfo object containing the rank and thread that this action is executing on.

## Parameters
* **returns** The rank and thread id that the action is executing on


## Example

```cpp
Output sim_output = getSimulationOutput();
//highlight-next-line
RankInfo info = getRank();

sim_output.output("This action is running on rank %u, thread %u\n", info.rank, info.thread);
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
