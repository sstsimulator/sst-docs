---
title: SST::TimeConverter
---

A TimeConverter is an object used to manage the conversion of time between global time and various local (Component/SubComponent) views of time. See [Time in SST](../../guides/concepts/time) for a more detailed discussion of how SST handles time.

TimeConverters can be created by calling certain (Sub)Component functions. These are:
* [registerClock](../component/time/registerClock)
* [registerTimeBase](../component/time/registerTimeBase)
* [getDefaultTimeBase](../component/time/getDefaultTimeBase)
* [getTimeConverter](../component/time/getTimeConverter)
