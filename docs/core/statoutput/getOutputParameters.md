---
title: getOutputParameters
---

```cpp
Params& getOutputParameters();
```

Returns the parameters for this StatisticOutput object.

## Parameters
* **returns** (Params&) Parameters given to this output object

## Example

```cpp
std::string filepath = getOutputParameters().find<std::string>("filepath", "StatisticOutput.json");
bool should_output_simtime = getOutputParameters().find<bool>("outputsimtime", true);
bool should_output_rank    = getOutputParameters().find<bool>("outputrank", true);
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```