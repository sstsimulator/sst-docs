---
title: registerClock
---

```cpp
// Deprecated in SST 15.0
TimeConverter* registerClock(const TimeConverter* freq, Clock::HandlerBase* handler, bool regAll = true);
// Deprecated, will be replaced in SST 16.0
TimeConverter* registerClock(const std::string& freq, Clock::HandlerBase* handler, bool regAll = true);
TimeConverter* registerClock(const UnitAlgebra& freq, Clock::HandlerBase* handler, bool regAll = true);
TimeConverter* registerClock(const TimeConverter freq, Clock::HandlerBase* handler, bool regAll = true);
// Will replace deprecated functions in SST 16.0
TimeConverter registerClock(const std::string& freq, Clock::HandlerBase* handler, bool regAll = true);
TimeConverter registerClock(const UnitAlgebra& freq, Clock::HandlerBase* handler, bool regAll = true);
TimeConverter registerClock(const TimeConverter freq, Clock::HandlerBase* handler, bool regAll = true);
```
*Availability:* Component, SubComponent, ComponentExtension

:::warning Deprecation
Shared TimeConverters returned by SST-Core APIs will be removed in SST 16.0. All functions accepting TimeConverter* now accept TimeConverter instead. Elements using a TimeConverter* returned by SST-Core should create a local non-shared instance as shown:
```cpp
// Old code
TimeConverter* tc = function_that_returns_tc();
// New code
TimeConverter tc = function_that_returns_tc();
```
:::

Register a clock at the specified frequency. On each clock cycle, the associated handler will be called. Unless otherwise specified, this call wil also sets the default time base for the (sub)component to match the clock frequency.


## Parameters
* **freq** (string, UnitAlgebra, TimeConverter) Frequency of the clock
* **handler** (Clock::HandlerBase*) Clock handler function to invoke each cycle
* **regAll** (bool) Whether to set the (sub)component's default timebase to this clock frequency
* **returns** (TimeConverter*) A time converter representing the clock frequency


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/example0.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"
#include <sst/core/component.h>

example0::example0(ComponentId_t id, Params& params) : Component(id)
{
    /** Other configuration here */

    registerClock("1GHz", new Clock::Handler2<example0, &example0::clockTic>(this));

    /** Other configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
