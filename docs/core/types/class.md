---
title: sst_types
---

SST defines a number of types that developers may encounter throughout the codebase. Several of these types are defined in the `sst_types.h` header and described below.

## Identifiers
These types are used to uniquely tag SST objects.
* **ComponentId_t** (uint64_t)

    A unique identifier assigned to each component and subcomponent in the simulation. SubComponent IDs share lower-order bits with their parent Component ID. 
* **StatisticId_t** (uint64_t)

    An identifier assigned to each statistic in the simulation

* **LinkId_t** (uint32_t)

    A unique identifier assigned to each link in the simulation
* **HandlerId_t** (uint64_t)

    A unique identifier assigned to handler functions (clock, link, etc.)

## Time
Several time types are used through SST.
* **Cycle_t** (uint64_t)

    A count of clock cycles
* **SimTime_t** (uint64_t)

    Time counted in the simulation's base time quanta. By default this is picoseconds (ps).
* **Time_t** (double)

    Time in seconds

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