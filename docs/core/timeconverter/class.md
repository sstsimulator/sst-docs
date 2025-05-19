---
title: SST::TimeConverter
---

:::warning Deprecation
Shared TimeConverters returned by SST-Core APIs will be removed in SST 16.0. All functions accepting TimeConverter* now accept TimeConverter instead. Elements using a TimeConverter* returned by SST-Core should create a local non-shared instance as shown:
```cpp
// Old code
TimeConverter* tc = function_that_returns_tc();
// New code
TimeConverter tc = function_that_returns_tc();
```

Functions that return a `TimeConverter*` will instead return a `TimeConverter` in SST 16.0.
:::


A TimeConverter is an object used to manage the conversion of time between global time and various local (Component/SubComponent) views of time. See [Time in SST](../../guides/concepts/time) for a more detailed discussion of how SST handles time.

TimeConverters can be created by calling certain (Sub)Component functions. These are:
* [registerClock](../component/time/registerClock)
* [registerTimeBase](../component/time/registerTimeBase)
* [getDefaultTimeBase](../component/time/getDefaultTimeBase)
* [getTimeConverter](../component/time/getTimeConverter)
