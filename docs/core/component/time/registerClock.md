---
title: registerClock
---

```cpp
TimeConverter registerClock(TimeConverter freq, Clock::HandlerBase* handler, bool reg_all = true);

template <typename classT, auto funcT>
Clock::HandlerBase* registerClock(TimeConverter freq, classT* obj, bool reg_all = true);

template <typename classT, auto funcT, typename dataT>
Clock::HandlerBase* registerClock(TimeConverter freq, classT* obj, dataT metadata, bool reg_all = true);
```
*Availability:* Component, SubComponent, ComponentExtension

Register a clock at the requested frequency or period. On each clock cycle, the associated handler will be called. Unless otherwise specified, this call also sets the default time base for the (sub)component to match the clock frequency. The frequency parameter can be specified as a frequency or period (e.g., "1GHz" and "1ns" are interchangeable).

The `freq` argument can be passed as a `TimeConverter`, a `std::string`, or a `UnitAlgebra` (e.g., `"1GHz"`). The string and `UnitAlgebra` forms are not separate overloads; they are implicitly converted to a `TimeConverter`.


The templated forms (**New in SST 16.1**) construct the [clock handler](../../clock/clock_handler.md) for you and return it, rather than returning a `TimeConverter`. The returned handler can be stopped and restarted with its [`deactivate()`](../../clock/deactivate.md) and [`activate()`](../../clock/activate.md) functions. To guarantee the order in which handlers on the same clock are called, use [`registerOrderedClock()`](./registerOrderedClock.md) instead.


## Parameters
* **freq** (TimeConverter, string, UnitAlgebra) Frequency or period of the clock
* **handler** (Clock::HandlerBase*) Clock handler function to invoke each cycle
* **reg_all** (bool) Whether to set the (sub)component's default timebase to this clock frequency
* **returns** (TimeConverter) A time converter representing the clock frequency

Templated forms:
* **classT** (template parameter) Class that the handler function is a member of
* **funcT** (template parameter) Handler function, specified as `&classT::function_name`
* **dataT** (template parameter) Type of the metadata passed to the handler
* **freq** (TimeConverter, string, UnitAlgebra) Frequency or period of the clock
* **obj** (classT*) Object to call the handler function on, usually `this`
* **metadata** (dataT) Metadata passed to the handler function on each call
* **reg_all** (bool) Whether to set the (sub)component's default timebase to this clock frequency
* **returns** (Clock::HandlerBase*) The clock handler that was created


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/example0.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"
#include <sst/core/component.h>

example0::example0(ComponentId_t id, Params& params) : Component(id)
{
    /** Other configuration here */

    registerClock("1GHz", new Clock::Handler<example0, &example0::clockTic>(this));

    /** Other configuration here */
}
```

### Templated form

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/component.h>

example::example(ComponentId_t id, Params& params) : Component(id)
{
    /** Other configuration here */

    // Handler calls example::clockTic(Cycle_t)
    //highlight-next-line
    clockHandler = registerClock<example, &example::clockTic>("1GHz", this);

    // Handler calls example::otherTic(Cycle_t, uint32_t), passing in 2
    //highlight-next-line
    otherHandler = registerClock<example, &example::otherTic, uint32_t>("500MHz", this, 2);
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
