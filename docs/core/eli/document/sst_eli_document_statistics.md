---
title: SST_ELI_DOCUMENT_STATISTICS
sidebar_label: Statistics
---
```cpp
#define SST_ELI_DOCUMENT_STATISTICS( 
    { "stat_0", "description", "units", enable_level },
    { "stat_1", "description", "units", enable_level },
    ...
    { "stat_x", "description", "units", enable_level }
)
```

*Availability:* Components, SubComponents

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters
* **stat_x** (string) Name of the statistic
* **description** (string) Description of the statistic. This value is displayed when sst-info is run at the command line.
* **units** (string) Units for the statistic's value. For example 'cycles' or 'MB'. This value is displayed when sst-info is run at the command line.
* **enable_level** (int) Integer between 1 and 7. The statistic will be generated if the user configures the simulation enable level to be greater than or equal to this number.

## Examples

### Example 1
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example1.h"
SST_ELI_DOCUMENT_STATISTICS( 
    {"EventSizeReceived", "Records the payload size of each event received", "bytes", 1}
)
```

### Example 2
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicStatistics.h"
SST_ELI_DOCUMENT_STATISTICS(
    {"UINT32_statistic", "Statistic that records unsigned 32-bit values", "unitless", 1},
    {"UINT32_statistic_duplicate", "Statistic that records unsigned 32-bit values. Multiple stats record values to this statistic.", "unitless", 1},
    {"UINT64_statistic", "Statistic that records unsigned 64-bit values", "unitless", 2},
    {"INT32_statistic",  "Statistic that records signed 32-bit values", "unitless", 3},
    {"INT64_statistic",  "Statistic that records signed 64-bit values", "unitless", 3},
    {"SUBID_statistic", "Statistic to demonstrate SubIDs to obtain multiple instances of the same statistic name. Type is double.", "unitless", 4},
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
