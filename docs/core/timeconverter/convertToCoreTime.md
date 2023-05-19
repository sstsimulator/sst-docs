---
title: convertToCoreTime
---

```cpp
SimTime_t convertToCoreTime (SimTime_t time);
```

This function converts from the local view of time to the count in the global view. For
example, if a local component counts time in 1ns quanta and its time is 250, the function would return 
250,000 if the core time base was 1ps (250ns * 1000 = 250,000ps). This function is used in Links when
adding extra latency (specified in the local view of time) on an event send.

## Parameters
* **time** (SimTime_t) Local time to convert to core time 
* **returns** (SimTime_t) Converted core time

## Example

<!--- SOURCE_CODE: None --->
```cpp
void example::exampleClockHandler(Cycle_t cycle) 
{
    out->output("My clock is at cycle %" PRIu64 " which is %" PRIu64 " in the core time base units.\n",
        cycle, clockTimeConverter->convertToCoreTime(cycle));
}
```

## Header
```cpp
#include <sst/core/timeConverter.h
```
