---
title: constructor
---

```cpp
// StatisticOutput constructor
StatisticOutputClassName(SST::Params& params);
SST::PortModule();
```
This constructor is called when a StatisticOutput is created by the simulation engine. Each rank in SST has its own instance of the StatisticOutput object; threads share an Output.

:::info

If a StatisticOutput is serializable (for checkpoint/restart or interactive introspection), it must also implement a default constructor for use by the serializer.

:::

:::info
SST provides a global output directory per simulation which can be specified by the user via the `--output-directory=` command line option. StatisticOutput objects should use the [`getAbsolutePathForOutputFile`](./getAbsolutePathForOutputFile) function to place files in this directory. SST will have already checked the directory for write permissions.
:::


## Parameters
* **params** (Params&) The parameter set passed into the module by the loading sub(component).
* **returns** (StatisticOutput) The newly constructed StatisticOutput

## Example

```cpp
ExampleStatisticOutput(SST::Params& params)
{
    Output out = getSimulationOutput();
    setStatisticOutputName("ExampleStatisticOutput"); // Give the output object a name describing its type
    out.verbose( CALL_INFO, 1, 0, "Using StatisticOutput: %s\n", getStatisticOutputName().c_str() );
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```
