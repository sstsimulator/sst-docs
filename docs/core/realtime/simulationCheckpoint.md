---
title: simulationCheckpoint
---

```cpp
void simulationCheckpoint();
```

Causes the local thread/rank to checkpoint its state. It is critical that any action calling this function also override [`canInitiateCheckpoint()`](canInitiateCheckpoint.md) to return `true`.

## Parameters
* **returns** none


## Example

```cpp
void
CheckpointRealTImeAction::execute()
{
    Output sim_output = getSimulationOutput();
    RankInfo rank     = getRank();

    sim_output.output(
        "Creating checkpoint at simulated time %s (rank=%u, thread=%u).\n",
            getElapsedSimTime().to_stringBestSI().c_str(), rank.rank, rank.thread);
    
    //highlight-next-line
    simulationCheckpoint();
}
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
