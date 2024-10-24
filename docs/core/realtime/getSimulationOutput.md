---
title: getSimulationOutput
---

```cpp
Output& getSimulationOutput() const;
```

Returns a reference to the simulation's output object.

## Parameters
* **returns** The output object.


## Example

```cpp
//highlight-next-line
Output sim_output = getSimulationOutput();
RankInfo info = getRank();

sim_output.output("This action is running on rank %u, thread %u\n", info.rank, info.thread);
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
