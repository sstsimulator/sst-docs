---
title: SST::RealTimeAction
---

RealTimeActions are actions that SST executes in response to an OS signal such as `SIGINT` or `SIGUSR1`. See the [signal handling guide](../../guides/features/signal.md) for more information about using these actions.

RealTimeActions are SST elements and can be registered with SST as part of an element library. 

The following example creates an element `examples.helloExample` which when triggered via a signal, prints the rank, thread, and simulated time. 

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

## Parallel execution
Actions are executed only when SST's global state is synchronized so unlike most element objects, *actions may perform synchronization and invoke MPI calls*.
Each thread and/or rank instantiates its own action object. When a signal causes an action to execute, each rank and thread calls `execute()` on its local instance of the action.

## Header
```cpp
#include <sst/core/realtimeAction.h>
```