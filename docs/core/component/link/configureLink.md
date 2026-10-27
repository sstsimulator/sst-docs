---
title: configureLink
---

```cpp
Link* configureLink(const std::string& name, TimeConverter timebase, Event::HandlerBase* handler = nullptr);
Link* configureLink(const std::string& name, Event::HandlerBase* handler = nullptr);
```
*Availability:* Component, SubComponent, ComponentExtension

Configure a link. Checks that the named port is connected and optionally registers an event handler to be called on event arrivals. If a handler is not registered, the link must be polled. A timebase can also be specified; this can be used in future send calls to add additional send latency. If a timebase is not specified, the (Sub)Component's default timebase will be used.

The `timebase` argument can be passed as a `TimeConverter`, a `std::string`, or a `UnitAlgebra` (e.g., `"1GHz"`). The string and `UnitAlgebra` forms are not separate overloads; they are implicitly converted to a `TimeConverter`.

A return value of nullptr indicates the link could not be configured. A common cause of a nullptr return value is that the port is not connected to a link. (Sub)Components are responsible for detecting and managing any errors.


## Parameters
* **name** (string) Name of the port to configure the link on
* **timebase** (TimeConverter, string, UnitAlgebra) The base time units to use with time-related calls on the link. When a time is specified on the link as cycles, this will be the assumed period for those cycles.
* **handler** (Event::HandlerBase*) The event handler to use for event arrivals
* **returns** (Link*) A handle to the configured link. A return value of nullptr indicates the link could not be configured.


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/example0.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"
#include <sst/core/component.h>

example0::example0(ComponentId_t id, Params& params) : Component(id) 
{
    /** Other configuration here */

    // highlight-next-line
    link = configureLink("port", new Event::Handler<example0, &example0::handleEvent>(this));
    sst_assert(link, CALL_INFO, -1, "Error in %s: Link configuration failed\n", getName().c_str());

    /** Other configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
