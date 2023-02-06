---
title: registerMultiStatistic
---

```cpp
template <typename... Args>
Statistics::Statistic<std::tuple<Args...>>* registerMultiStatistic(const char* statName, const char* statSubId = "");
Statistics::Statistic<std::tuple<Args...>>* registerMultiStatistic(Params& params, const std::string& statName, const std::string& statSubId = "");
```
*Availability:* Component, SubComponent, ComponentExtension

Register a statistic whose type takes multiple template parameters with the statistics engine. This enables collecting the statistic if the user enabled the statistic in the simulation configuration. Returns the newly created handle. If the same statistic is registered more than once, subsequent calls return the original handle.

## Parameters
* **statName** (string) Name of the statistic
* **statSubId** (string) An optional identifier for the statistic if multiple copies of the same statistic will be tracked
* **params** (Params) Parameters for the statistic
* **returns** (bool) A handle to the statistic

## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
auto* stat = registerMultiStatistic<int, uint64_t, uint64_t>("multi_stat_counter");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
