---
title: Introduction
---

The fundamental building block of an SST simulation is a *Component*. A Component is a C++ class that implements some part of the simulated system and interacts with other Components via Events sent on Links. Component functionality can be dynamically extended using SubComponents and ComponentExtensions. These three objects, Components, SubComponents, and ComponentExtensions, share a common API defined in the SST::BaseComponent class. The classes also each have their own class-specific functions. The common APIs as well as the class-specific ones are described in this section.  

## Headers
Components should include the `<sst/core/component.h>` header, SubComponents the `<sst/core/subcomponent.h>` header, and ComponentExtensions the `<sst/core/componentExtension.h>`. The BaseComponent header should not be included directly. 

## Virtual Component API
In addition to constructors and destrctors, these functions should be implemented as needed by SST Components, SubComponents, and ComponentExtensions. The Core will call these functions during different stages of simulation. These stages are also referred to as the *SST LifeCycle*.

* [init](lifecycle/init) Called during the init() simulation phase.
* [setup](lifecycle/setup) Called during the setup() simulation phase.
* [complete](lifecycle/complete) Called during the complete() simulation phase.
* [finish](lifecycle/finish) Called during the finish() simulation phase.
* [emergencyShutdown](lifecycle/emergencyShutdown) Called during abnormal shutdown.
* [printStatus](lifecycle/printStatus) Called when SST receives certain SIGUSER signals.


## Documentation
Alongside the above virtual API, the API includes a number of functions that grant access to SST Core features including clocks, events, links, output, debug, and statistics. Because the API is large, the functions are organized into the following categories.

### Class-Specific APIs
* [Component](component/class)
* [SubComponent](subcomponent/class)
* [ComponentExtension](componentext/class)

### Common API
* [LifeCycle](lifecycle/init)
* [Time and Clocks](time/registerClock)
* [Links](link/configureLink)
* [Loadable Objects (Components, SubComponents, Modules, etc)](load/loadUserSubComponent)
* [Statistics](stat/registerStatistic)
* [Output and Error Handling](output/getSimulationOutput)

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
