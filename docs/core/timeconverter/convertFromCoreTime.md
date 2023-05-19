---
title: convertFromCoreTime
---

```cpp
SimTime_t convertFromCoreTime (SimTime_t time);
```

This function converts a count from the global view of time to a count in the local view. This
function is used to get elapsed simulation time in the local view. For example, if a
Component has a clock frequency of 2GHz, the local time base would be 500ps (period of a 2GHz
clock). If the clock timeconverter was used to convert a simulation time of 2ms to the local clock 
frequency, this call would return 4,000 (2ms / 500ps).

## Parameters
* **time** (SimTime_t) Core time to convert to local time 
* **returns** (SimTime_t) Converted local time

## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/cacheController.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/cacheController.cc"
// This function checks if the cache has been stalling an 
// event for too long and may be in a deadlock situation
void Cache::checkTimeout() {
    MSHREntry* entry = mshr_->getOldestEntry();

    if (entry) {
        // Get the current simulation time in nano seconds
        SimTime_t curTime = getCurrentSimTimeNano();
        // Convert the arrival time for the oldest active event to ns and compute how long it has been waiting in ns
        //highlight-next-line
        SimTime_t startTime = getTimeConverter("1ns")->convertFromCoreTime(entry->getStartTime());
        SimTime_t waitTime = curTime - startTime;

        // If the event has been stalled for more than timeout_ ns, end the simulation with an error
        if (waitTime > timeout_) {
            out_->fatal(CALL_INFO, -1, "%s, Error: Maximum cache timeout reached - potential deadlock or other error. Event: %s. Current time: %" PRIu64 "ns. Event start time: %" PRIu64 "ns.\n",
                getName().c_str(), entry->getEvent()->getVerboseString().c_str(), curTime, startTime);
        }
    }
}
```

## Header
```cpp
#include <sst/core/timeConverter.h
```
