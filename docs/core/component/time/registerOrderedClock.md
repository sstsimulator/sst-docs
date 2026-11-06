---
title: registerOrderedClock
---

```cpp
template <typename classT, auto funcT>
Clock::HandlerBase* registerOrderedClock(TimeConverter freq, classT* obj, bool reg_all = true);

template <typename classT, auto funcT, typename dataT>
Clock::HandlerBase* registerOrderedClock(TimeConverter freq, classT* obj, dataT metadata, bool reg_all = true);
```
*Availability:* Component, SubComponent, ComponentExtension

**New in SST 16.1**

Register an ordered clock handler at the requested frequency or period. This works like the templated form of [`registerClock()`](./registerClock.md), but SST guarantees that active handlers registered with this function are called in the order they were registered. Handlers registered with `registerClock()` have no guaranteed order.

The order is kept per clock frequency and per Component. Ordered handlers registered by a Component and by any of its SubComponents or ComponentExtensions at the same frequency are called in registration order. On each clock cycle, unordered handlers are called before ordered ones.

The function constructs the [clock handler](../../clock/clock_handler.md) and returns it. Use the handler's [`deactivate()`](../../clock/deactivate.md) and [`activate()`](../../clock/activate.md) functions to stop and restart it. A handler that is reactivated keeps its original place in the order. As with any clock handler, returning `true` from the handler function also deactivates it.

The `freq` argument can be passed as a `TimeConverter`, a `std::string`, or a `UnitAlgebra` (e.g., `"1GHz"`). Unless `reg_all` is false, this call also sets the default time base for the (sub)component to match the clock frequency.


## Parameters
* **classT** (template parameter) Class that the handler function is a member of
* **funcT** (template parameter) Handler function, specified as `&classT::function_name`
* **dataT** (template parameter) Type of the metadata passed to the handler
* **freq** (TimeConverter, string, UnitAlgebra) Frequency or period of the clock
* **obj** (classT*) Object to call the handler function on, usually `this`
* **metadata** (dataT) Metadata passed to the handler function on each call
* **reg_all** (bool) Whether to set the (sub)component's default timebase to this clock frequency
* **returns** (Clock::HandlerBase*) The clock handler that was created


## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/component.h>

example::example(ComponentId_t id, Params& params) : Component(id)
{
    /** Other configuration here */

    // On each cycle, stageTic(cycle, 0) is always called before stageTic(cycle, 1)
    //highlight-start
    stage0 = registerOrderedClock<example, &example::stageTic, int>("1GHz", this, 0);
    stage1 = registerOrderedClock<example, &example::stageTic, int>("1GHz", this, 1);
    //highlight-end
}

bool example::stageTic(Cycle_t cycle, int stage)
{
    /** Do work for this pipeline stage */
    return false; // Keep the handler active
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
