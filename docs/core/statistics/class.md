---
title: SST::Statistic
---

SST Statistic objects can be used to track metrics about a (Sub)Component. SST statistic output format/frequency/etc. is controlled by the [SST configuration file](../../config/stats/overview), whereas statistic collection is handled by (Sub)Components. 

(Sub)Components create statistics by using the [`registerStatistic()`](../component/stat/registerStatistic) function in their APIs. The (sub)component can then add data to the statistic during the simulation using the following functions:
* [`addData`](addData)
* [`addDataNTimes`](addDataNTimes)

Statistics are templated on a statistic type which defines the type of the data they collect. The following types are supported:
* `int32_t`
* `uint32_t`
* `int64_t`
* `uint64_t`
* `float`
* `double`

## Header
The base class for statistics resides in `sst-core/src/sst/core/statapi/statbase.h`, however the class is available through the (Sub)Component API headers.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```