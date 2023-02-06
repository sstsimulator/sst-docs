---
title: Clock
---

Clocks are SST events that are triggered at a regular cadence. A (sub)component can register a clock with a period or frequency and a handler which will cause a callback to the handler at the specified clock period.

Clock objects are not directly accessed by (Sub)Components, instead they use their own [API](../component/time/registerClock) to create, enable, and disable clocks.


## Header
All public-facing clock functions are available through the Component headers.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```