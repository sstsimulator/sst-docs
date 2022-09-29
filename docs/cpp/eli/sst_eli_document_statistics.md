---
id: sst_eli_document_statistics
title: SST_ELI_DOCUMENT_STATISTICS
---
## Fully Qualified Name
```cpp
#define SST_ELI_DOCUMENT_STATISTICS( ... )
```

### Remarks

Document and register statistics for a component or subcomponent.

## Requirements

```cpp
#include <sst/core/elementinfo.h>
```

## Syntax

```cpp
// Statistic name, description, unit, enable level
SST_ELI_DOCUMENT_STATISTICS(
    { "stat1_NAME", "stat1_DESCRIPTION", "stat1_UNITS", stat1_ENABLE_LEVEL },
    { "stat2_NAME", "stat2_DESCRIPTION", "stat2_UNITS", stat2_ENABLE_LEVEL },
    { "stat3_NAME", "stat3_DESCRIPTION", "stat3_UNITS", stat3_ENABLE_LEVEL },
    ...
    { "statN_NAME", "statN_DESCRIPTION", "statN_UNITS", statN_ENABLE_LEVEL }
)
```

## Parameters

**statN_NAME** - A unique name for the statistic.

**statN_DESCRIPTION** - A description of the statistic being collected.

**statN_UNITS** - The plural name for the units the statistic is collecting.

**statN_ENABLE_LEVEL** - An integer value used to enable/disable statistic collection. You can specify a system statistic load level that will collect all statistics with an enable level less than or equal to the system level. So, if the system statistic load level is 5, then all stats with an enable level 5 or less will be enabled.

## Examples

### Example 1
```cpp
SST_ELI_DOCUMENT_STATISTICS(
    { "carsWashed", "Number of cars washed", "cars", 1 },
    { "idleTime", "Time spent not washing cars", "ticks", 1 }
)
```

## See Also

<!-- - [Statistics API Documentation](http://sst-simulator.org/SSTPages/SSTDeveloperSSTStatisticsAPI/) -->

- [sst.setStatisticLoadLevel](projectDriver/sst/setStatisticLoadLevel.md)
- [sst.enableAllStatisticsForAllComponents](projectDriver/sst/enableAllStatisticsForAllComponents.md)
- [enableAllStatistics](projectDriver/component/enableAllStatistics.md)