---
title: begin
---

```cpp
virtual void begin(time_t scheduled_time) { }
```

Real time actions may implement this function if they need to do any actions when they are registered on a recurring interval (i.e., attached to SIGALRM).
SST calls this function once on each action that is registered to SIGALRM. The function is called when the run stage begins.

## Parameters
* **scheduled_time** (time_t) The first time at which this action is scheduled to execute.
* **returns** none


## Example

The ExitClean action prints the time that the simulation will end.
```cpp
void
ExitCleanRealTimeAction::begin(time_t scheduled_time)
{
    Output sim_output = getSimulationOutput();
    if ( scheduled_time == 0 ) return;

    struct tm* end = localtime(&scheduled_time);
    sim_output.verbose(
        CALL_INFO, 1, 0, " Will end by: %04u/%02u/%02u at: %02u:%02u:%02u\n",
            (end->tm_year + 1900), (end->tm_mon + 1), end->tm_mday, end->tm_hour, end->tm_min, end->tm_sec);
}
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
