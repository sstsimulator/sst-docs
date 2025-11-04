---
title: registerStatistic
---

```cpp
template <typename T>
Statistics::Statistic<T>* registerStatistic(const std::string& stat_name, const std::string& stat_sub_id = "");
Statistics::Statistic<T>* registerStatistic(Params& params, const std::string& stat_name, const std::string& stat_sub_id = "");
```

Register a statistic with the statistics engine. The returned statistic handle can then be used to add data to the statistic. In contrast to components where registering the same statistics returns pointers to the same statistic instance, registering the same statistic multiple times in a PortModule will result in undefined behavior.

## Parameters
* **stat_name** (string) Name of the statistic
* **stat_sub_id** (string) An optional additional string identifier to differentiate in the case multiple instances of the same stat_name are registered.
* **params** (Params) Optional additional parameters for the statistic
* **returns** (bool) A handle to the statistic

## Example

<!--- SOURCE_CODE: None --->
```cpp
example::example(Params& params) : PortModule() {
    stat_latency = registerStatistic<int32_t>("latency");
    stat_bits_sent = registerStatistic<int64_t>("bits_sent");
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
