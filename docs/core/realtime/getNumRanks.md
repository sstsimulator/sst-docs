---
title: getNumRanks
---

```cpp
RankInfo getNumRanks() const;
```

Returns a RankInfo object containing the number of ranks and threads in the simulation.

## Parameters
* **returns** The number of ranks and threads in the simulation


## Example

```cpp
Output sim_output = getSimulationOutput();
//highlight-next-line
RankInfo num = getNumRanks();

sim_output.output("This simulation has %u ranks and %u threads on each rank\n", num.rank, num.thread);
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
