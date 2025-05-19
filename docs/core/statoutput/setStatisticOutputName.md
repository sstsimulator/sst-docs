---
title: setStatisticOutputName
---

```cpp
void getStatisticOutputName(const std::string& name);
```

Set the name of the statistic output. StatisticOutput objects should use this function to give themselves a name in their constructor. The default name is `"StatisticOutput"`.

## Parameters
* **name** (std::string&) The name to give this output object
* **returns** none

## Example

```cpp
setStatisticOutputName("StatisticOutputJSON");
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```