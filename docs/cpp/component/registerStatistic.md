---
id: registerStatistic
title: registerStatistic()
---
## Fully Qualified Name
```cpp
SST::BaseComponent::registerStatistic()
```cpp

### Remarks
Registers a statistic.

If statistics are allowed to run (controlled by [Configuration](guides/external/projectDriver.md)), then a statistic will be created and returned. If not allowed to run, then a NullStatistic will be returned. In either case, the returned value should be used for all future statistic calls. The type of Statistic and the Collection Rate is set by [Configuration](guides/external/projectDriver.md) parameters. If no type is defined, then an Accumulator Statistic will be provided by default. If the rate is set to 0 or not provided, then the statistic will output results only at end of sim (if output is enabled).

## Requirements

```cpp
#include <sst/core/component.h>
```cpp

## Syntax

```cpp
// #1
Statistic<T>* SST::BaseComponent::registerStatistic(std::string statName, std::string statSubId = "")

// #2 - same as #1, but automatically converts char* to std::string
Statistic<T>* SST::BaseComponent::registerStatistic(const char* statName, const char* statSubId = "")
```cpp

## Parameters

**statName** - Primary name of the statistic. This name must match the defined ElementInfoStatistic in the component, and must also be enabled in the [Configuration](guides/external/projectDriver.md). 

**statSubId** - An additional substitute name for the statistic.

## Return Value

**Statistic<T>\*** - Either a created statistic of the desired type or a NullStatistic, depending upon runtime settings.

## Examples

### Example 1
```cpp
char* subID = (char*) malloc(sizeof(char) * 32);
sprintf(subID, "%" PRIu32, thisCoreID);

Statistic<uint64_t>* statReadRequests  = own->registerStatistic<uint64_t>( "read_requests", subID );
```cpp

###
```cpp
smallCarsWashed = registerStatistic<int>("smallCarsWashed");
	largeCarsWashed = registerStatistic<int>("largeCarsWashed");
	noCarEvents = registerStatistic<int>("noCarEvents");
	smallCarsWaiting = registerStatistic<int>("smallCarsWaiting");
	largeCarsWaiting = registerStatistic<int>("largeCarsWaiting");
```cpp

## See Also

- [SST::Statistics::addData()](cpp/statistics/addData.md)
- Configuration Functions
  - [sst.setStatisticLoadLevel](projectDriver/sst/setStatisticLoadLevel.md)
  - [sst.enableAllStatisticsForAllComponents](projectDriver/sst/enableAllStatisticsForAllComponents.md)
  - [enableAllStatistics](projectDriver/component/enableAllStatistics.md)
