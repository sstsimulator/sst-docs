---
title: simulationSignalShutdown
---

```cpp
void simulationSignalShutdown(bool abnormal);
```

Inform the simulation that it should end when any pending actions finish executing. The `abnormal` parameter controls whether the shutdown is an "emergency" and SST should immediately terminate or whether it should continue to its normal complete/finish/destruction stages.

## Parameters
* **abnormal** (bool) Whether to terminate immediately (true) or proceed to the end of simulation stages (false).
* **returns** none


## Example
The exit-after action causes SST to end simulation after a certain amount of time has passed. 
```cpp
void
ExitCleanRealTimeAction::execute()
{
    Output   sim_output = getSimulationOutput();
    RankInfo rank       = getRank();
    
    sim_output.output("EXIT-AFTER TIME REACHED; SHUTDOWN (%u,%u)!\n", rank.rank, rank.thread);
    sim_output.output("# Simulated time:                  %s\n", getElapsedSimTime().toStringBestSI().c_str());
    //highlight-next-line
    simulationSignalShutdown(false); /* Not an abnormal shutdown */
}
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
