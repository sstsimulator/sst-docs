---
title: constructor
---

```cpp
RealTimeAction();
```

SST invokes this constructor during simulation construction.

## Parameters

* **returns** (RealTimeAction) The newly constructed RealTimeAction object.


## Example
```cpp title="helloExample.h"
#include <sst/core/realtimeAction.h>
#include <sst/core/rankInfo.h>

class ExampleRealTimeAction : public SST::RealTimeAction
{
    public:

    // ELI macro to register action with SST-Core
    SST_ELI_REGISTER_REALTIMEACTION(
        ExampleRealTimeAction,                  // Class
        "examples",                             // Library name
        "helloExample",                         // Element name
        SST_ELI_ELEMENT_VERSION(0, 1, 0),       // Version
        "Prints hello in response to a signal") // Description

    //highlight-next-line
    ExampleRealTimeAction(); // Constructor
    ~ExampleRealTimeAction(); // Destructor

    virtual void execute() override; // Action to take
}
```

```cpp title="helloExample.cc"
#include <sst/core/sst_config.h>

#include "helloExample.h"

#include <sst/core/realtimeAction.h> 
#include <sst/core/unitAlgebra.h>
#include <sst/core/rankInfo.h>

//highlight-next-line
ExampleRealTimeAction::ExampleRealTimeAction() { }

~ExampleRealTimeAction::ExampleRealTimeAction() { }

void ExampleRealTimeAction::execute()
{
    Output sim_output = getSimulationOutput();
    RankInfo rank     = getRank();

    sim_output.output("Hello from rank %u, thread %u at simulated time %s.\n", 
        rank.rank, rank.thread, getElapsedSimTime().toStringBestSI().c_str());
}
```


## Header
```cpp
#include <sst/core/realtimeAction.h>
```
