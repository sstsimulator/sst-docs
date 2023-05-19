---
title: finish
---

```cpp
virtual void finish();
```

See [`finish()`](../../component/lifecycle/finish) for a description of SST's finish phase and the use of this function. The (Sub)Component that loaded a SimpleNetwork interface should call this function during its own `finish()` function. A SimpleNetwork interface may implement this function if needed, but it is not required.

## Requirements
**Network interface** &nbsp;  
This function is optional.

**Endpoint** &nbsp;  
Call `finish()` on the interface during the `finish()` phase as SST does not automatically call this function on SubComponents. 


## Parameters
* **returns** none


## Examples

### Example 1: Implementing finish() at a SimpleNetwork
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
void LinkControl::finish(void)
{
    // Final update to statistics if needed
    if (is_idle) {
        idle_time->addData(getCurrentSimCycle() - idle_start);
        is_ide = false;
    }

    // Clean up all the events left in the queues. This will help
    // track down real memory leask as all these events won't be in the
    // way
    for ( int i = 0; i < req_vns; i++ ) {
        while ( !input_queues[i].empty() ) {
            delete input_queues[i].front();
            input_queues[i].pop();
        }
    }
    for ( int i = 0; i < used_vns; i++ ) {
        while ( !output_queues[i].queue.empty() ) {
            delete output_queues[i].queue.front();
            output_queues[i].queue.pop();
        }
    }
}
```

### Example 2: Supporting SimpleNetwork's finish() at an endpoint
An endpoint should call `finish()` on a SimpleNetwork interface in its own `finish()` function.
```cpp
void Endpoint::finish() 
{
    net_iface->finish();
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```