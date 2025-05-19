---
title: getSimulationOutput
---

```cpp
Output& getSimulationOutput() const;
```
Get the instance of the simulation output object that the SST Core is using.


## Parameters
* **returns** (Output) The instance of the simulation output object that SST Core is using


## Example

<!--- SOURCE_CODE: None --->
```cpp
getSimulationOutput().output("This stat output's name is %s\n", getStatisticOutputName().c_str());
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```