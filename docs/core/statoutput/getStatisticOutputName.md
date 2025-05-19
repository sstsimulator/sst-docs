---
title: getStatisticOutputName
---

```cpp
std::string& getStatisticOutputName();
```

Returns the name of the statistic output. StatisticOutput objects should give themselves a name in their constructor, using [`setStatisticOutputName()`](./setStatisticOutputName.md). The default name is `"StatisticOutput"`.

## Parameters
* **returns** (bool) The name of this output object

## Example

```cpp
getSimulationOutput().output("This statistic output's name is %s\n", getStatisticOutputName().c_str());
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```