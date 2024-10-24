---
title: execute
---

```cpp
virtual void execute() = 0;
```

Real time actions must implement this function. It is called when the action is triggered. 

## Parameters
* **returns** none


## Example
The Checkpoint action initiates a checkpoint on its local rank and thread.

```cpp
void
CheckpointRealTImeAction::execute()
{
    Output sim_output = getSimulationOutput();
    RankInfo rank     = getRank();

    sim_output.output(
        "Creating checkpoint at simulated time %s (rank=%u, thread=%u).\n",
            getElapsedSimTime().to_stringBestSI().c_str(), rank.rank, rank.thread);
    
    simulationCheckpoint();
}
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
