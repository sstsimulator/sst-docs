---
title: registerStatistic
---

```cpp
template <typename T>
Statistics::Statistic<T>* registerStatistic(const char* statName, const char* statSubId = "");
Statistics::Statistic<T>* registerStatistic(const std::string& statName, const std::string& statSubId = "");
Statistics::Statistic<T>* registerStatistic(Params& params, const std::string& statName, const std::string& statSubId = "");
```
*Availability:* Component, SubComponent, ComponentExtension

Register a statistic with the statistics engine. The returned statistic handle can then be used to add data to the statistic. If the same statistic is registered more than once, subsequent calls return the original handle. Statistics can also optionally be tagged with a "subId". This allows multiple copies of the same statistic, for example, a component may have multiple ports and want to track the number of bits sent on each one via a statistic. The statistic output will display each copy of the statistic with the given subId.

## Parameters
* **statName** (string) Name of the statistic
* **statSubId** (string) An optional identifier for the statistic if multiple copies of the same statistic will be tracked separately
* **params** (Params) Parameters for the statistic if the statistic type requires it.
* **returns** (bool) A handle to the statistic

## Example

<!--- SOURCE_CODE: None --->
```cpp
example::example(ComponentId_t id, Params& params) : Component(id) {
    stat_occupancy = registerStatistic<uint64_t>("queue_occupancy");
    stat_latency = registerStatistic<int32_t>("latency");
    stat_bits_sent = registerStatistic<int64_t>("bits_sent");

    /* Assume 'ports' is the number of ports this component has so we want multiple instances 
     * of the same statistic name, one for each port
     */
    for (unsigned int i = 0; i < ports; i++)
        stat_ports.push_back( registerStatistic<double>("events_sent_on_port", "port"+std::to_string(i)) );
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
