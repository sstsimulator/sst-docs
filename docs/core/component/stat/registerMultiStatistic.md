---
title: registerMultiStatistic
---

```cpp
template <typename... Args>
Statistics::Statistic<std::tuple<Args...>>* registerMultiStatistic(const std::string& statistic_name, const std::string& statistic_sub_id = "");
Statistics::Statistic<std::tuple<Args...>>* registerMultiStatistic(Params& params, const std::string& statistic_name, const std::string& statistic_sub_id = "");
```
*Availability:* Component, SubComponent, ComponentExtension

Register a statistic whose type takes multiple template parameters with the statistics engine. This enables collecting the statistic if the user enabled the statistic in the simulation configuration. Returns the newly created handle. If the same statistic is registered more than once, subsequent calls return the original handle.

## Parameters
* **statistic_name** (string) Name of the statistic
* **statistic_sub_id** (string) An optional identifier for the statistic if multiple copies of the same statistic will be tracked
* **params** (Params) Parameters for the statistic
* **returns** (`Statistics::Statistic<std::tuple<Args...>>*`) A handle to the statistic

## Example

<!--- SOURCE_CODE: None --->
```cpp
auto* stat = registerMultiStatistic<int, uint64_t, uint64_t>("multi_stat_counter");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
