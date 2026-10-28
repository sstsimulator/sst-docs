---
title: sst_types
keywords: [ComponentId_t, StatisticId_t, LinkId_t, Cycle_t, SimTime_t, Time_t, watts, joules, farad, volts, LIKELY, UNLIKELY]
---

SST defines a number of types that developers may encounter throughout the codebase. Several of these types are defined in the `sst_types.h` header and described below.

## Identifiers
These types are used to uniquely tag SST objects.

### ComponentId_t
`uint64_t`

A unique identifier assigned to each component and subcomponent in the simulation. SubComponent IDs share lower-order bits with their parent Component ID. Related definitions are:
* **UNSET_COMPONENT_ID** A ComponentId_t set to `UNSET_COMPONENT_ID` indicates an uninitialized ID
* **COMPONENT_ID_BITS** Number of bits belonging to the Component (vs a SubComponent) ID
* **COMPONENT_ID_MASK(x)** Returns the Component portion of a ComponentId_t `x`
* **SUBCOMPONENT_ID_BITS** Number of bits belonging to the SubComponent (vs a Component) ID
* **SUBCOMPONENT_ID_MASK(x)** Returns the SubComponent portion of a ComponentId_t `x`

### StatisticId_t
`uint64_t`

An identifier assigned to explicitly-enabled statistics in the simulation. Statistics enabled by enabling all statistics in the simulation, component, etc. may have an ID set to `STATALL_ID`. Uninitialized IDs are initialized to `UNSET_STATISTIC_ID`.

### LinkId_t
`uint64_t`

A unique identifier assigned to each link in the simulation.

### HandlerId_t
`uint64_t` 

A unique identifier assigned to handler functions (clock, link, etc.).

### PortModuleId_t 
`std::pair<std::string,size_t>`

Uniquely identifies a PortModule attached to a particular Component. The `string` names the port that the module is attached to.

## Time
Several time types are used through SST.

### Cycle_t
`uint64_t`

A count of clock cycles. 

### SimTime_t
`uint64_t`

Time counted in the simulation's base time quanta. By default this is picoseconds (ps). A macro, `PRI_SIMTIME`, is also provided for print formatting.

### Time_t
`double`

Time measured in seconds.

### Defined times
THe following time-related defines

## Units
Typedefs are included for the following units.
* **watts** (double)
* **joules** (double)
* **farads** (double)
* **volts** (double)

## Macros
Lastly, `sst_types.h` includes some macros for optimizing branch code. 
```cpp
#define LIKELY(x)   __builtin_expect((int)(x), 1)
#define UNLIKELY(x) __builtin_expect((int)(x), 0)
```


## Header
The `sst_types.h` header file is included in many SST header files already but can also be included directly if needed.
```cpp
#include <sst/core/sst_types.h>
```