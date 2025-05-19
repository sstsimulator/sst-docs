---
title: SST::Statistic(Fields)Output
---

StatisticOutput objects generate output for all [Statistics](../statistics/class) that are registered to them. There are several built-in StatisticOutput objects in SST and custom ones can also be registered from an element library to provide additional options. The [SST configuration file](../../config/stats/overview) determines which output(s) are used and specifies their parameters, such as output frequency.

## StatisticOutput and StatisticFieldsOutput
Statistics (the data object itself, not the output), are typically implemented as a derivative of the `Statistic<T>` class. This class implements statistics that track data fields of type `T` (e.g., histogram of `int`s, accumulator of `double`s, etc.). However, custom statistics *can* be created from a base class of `Statistic<T>` called `StatisticBase`. In the same way, the `StatisticOutput` class is designed to handle arbitrary statistics derived from `StatisticBase` while the `StatisticFieldsOutput` is a derivative class designed for statistics of type `Statistic<T>`. All built in statistics in SST derive from `Statistic<T>` and all built-in statistic output objects derive from `StatisticFieldsOutput`. This section documents the `StatisticFieldsOutput` API, *not* the underlying `StatisticOutput` API.

## Creating a new StatisticFieldsOutput element
SST's StatisticEngine constructs statistic outputs, registers statistics with outputs, and triggers output according to parameters given in the SST input file. From the perspective of a StatisticFieldsOutput object, the following will happen throughout simulation.

#### Construction
1. When SST begins, the output objects are constructed (one per rank).
1. SST calls `checkOutputParameters` to ensure that the statistic output object's parameters are valid and the OutputObject constructed correctly. For example, if the output requires a filename and none was given, the output can flag that error here.
    1. If `checkoutOutputParameters()` fails, SST will call `printUsage`.
1. SST calls `startOfSimulation` when the simulation is fully constructed and ready to start. Any pre-simulation preparation such as opening files can be done here.

#### Output generation
When output needs to be generated, the following calls to the output object will be made for *each statistic registered to the output*.
1. `implStartOutputEntries`
1. Some number of `outputFields` - these are called by the statistic itself to generate output each of its fields in the desired format.
1. `implStopOutputEntries`

#### End of simulation
When simulation ends, the following functions are called on each statistic output object.
1. `endOfSimulation`
1. Destructor

### Implementation
To implement a new StatisticFieldsOutput, create a class that inherits from `SST::StatisticFieldsOutput` and uses the `SST_ELI_REGISTER_DERIVED` macro to declare itself a derivative from the element type `StatisticOutput` as shown below.

```cpp title="Example custom StatisticOutput derived from StatisticFieldsOutput"
#include <sst/core/statapi/statoutput.h>

class ExampleStatOutput : public StatisticFieldsOutput
{
public:
    SST_ELI_REGISTER_DERIVED(
        StatisticOutput,                // Base class name (element type)
        ExampleStatOutput,              // Class name
        "example",                      // Library
        "outputexample",                // ELI name
        SST_ELI_ELEMENT_VERSION(1,0,0), // ELI version
        "Example StatisticOutput"       // Description
    )
    
    // ... rest of class
};
```

StatisticOutput types derived from `StatisticFieldOutput` should implement the following functions.
* [Constructor](./constructor)
* [Destructor](./destructor)
* [implStartOutputEntries](./implStartOutputEntries)
* [implStopOutputEntries](./implStopOutputEntries)
* [checkOutputParameters](./checkOutputParameters)
* [printUsage](./printUsage)
* [startOfSimulation()](./startOfSimulatin)
* [endOfSimulation()](./endOfSimulation)
* [outputField()](./outputField)
* [serialize_order](./serialize_order)

Outputs may also need to implement these.
* [acceptsGroups](./acceptsGroups)
* [supportsDynamicRegistration](./supportsDynamicRegistration)

These additional functions are available for use by StatisticFieldsOutput objects.
* [getAbsolutePathForOutputFile](./getAbsolutePathForOutputFiel)
* [getCurrentSimCycle](./getCurrentSimCycle)
* [getFieldInfoArray](./getFieldInfoArray)
* [getFieldTypeShortName](./getFieldTypeShortName)
* [getNumRanks](./getNumRanks)
* [getOutputParameters](./getOutputParameters)
* [getRank](./getRank)
* [getRegisteredField](./getRegisteredField)
* [getSimulationOutput](./getSimulationOutput)
* [getStatisticOutputName](./getStatisticOutputName)
* [setStatisticOutputName](./setStatisticOutputName)
* [lock](./lock)/[unlock](./unlock)

### Parallel considerations
In parallel SST executions, each rank has its own instance of a StatisticOutput object while threads on a rank share the same instance. Be aware of this when creating an output object that creates files. The `StatisticFieldsOutput` class ensures statistics are generated serially but if an output object inherits from `StatisticOutput` directly or overrides certain API functions from `StatisticOutput` that `StatisticFieldsOutput` provides an implementation for, the object will need to manage threading itself. Those specific functions are not documented here as they are part of the `StatisticOutput` API but not part of `StatisticFieldsOutput`.


## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```
