---
title: configureSelfLink
---

```cpp
Link* configureSelfLink(const std::string& name, TimeConverter timebase, Event::HandlerBase* handler = nullptr);
Link* configureSelfLink(const std::string& name, Event::HandlerBase* handler = nullptr);
```
*Availability:* Component, SubComponent, ComponentExtension

Configure a self link on the named ports. This call also optionally registers an event handler to be called on event arrivals. If a handler is not registered, the link must be polled. A timebase can also be specified; this can be used in future send calls to add additional send latency. If a timebase is not specified, the component's default timebase will be used.

The `timebase` argument can be passed as a `TimeConverter`, a `std::string`, or a `UnitAlgebra` (e.g., `"1GHz"`). The string and `UnitAlgebra` forms are not separate overloads; they are implicitly converted to a `TimeConverter`.

A return value of nullptr indicates the link could not be configured. The most common cause of a self link not being configured is an incorrect port name. Components are responsible for detecting and managing any errors.


## Parameters
* **name** (string) Name of the port to configure the link on
* **timebase** (TimeConverter, string, UnitAlgebra) The base time units to use with time-related calls on the link. When a time is specified on the link as cycles, this will be the assumed period for those cycles.
* **handler** (Event::HandlerBase*) The event handler to use for event arrivals
* **returns** (Link*) A handle to the configured link. A return value of nullptr indicates the link could not be configured.


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/kingsley/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/kingsley/linkControl.cc"
#include <sst/core/component.h>

LinkControl::LinkControl(ComponentId_t id, Params& params) : Component(id) 
{
    /** Other configuration here */

    // Configure self link for delaying events internally 
    //highlight-start
    output_timing = configureSelfLink("rtr_port_output_timing", "1GHz",
            new Event::Handler<LinkControl, &LinkControl::handle_output>(this));
            //highlight-end

    /** Other configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
