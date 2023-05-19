---
title: setup
---

```cpp
virtual void setup();
```

See [`setup()`](../../component/lifecycle/setup) for a description of SST's setup phase and the use of this function. The (Sub)Component that loaded a SimpleNetwork interface should call this function during its own `setup()` function. A SimpleNetwork interface may implement this function if needed, but it is not required.

## Requirements
**Network interface** &nbsp;  
This function may be optionally implemented.

**Endpoint** &nbsp;  
Call `setup()` on the interface during the `setup()` phase as SST does not automatically call this function on SubComponents. 

## Parameters
* **returns** none


## Examples

### Example 1: Implementing setup() in a SimpleNetwork
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"
// The LinkControl's setup function clears out its `init_events` queue
void LinkControl::setup()
{
    while ( init_events.size() ) {
        delete init_events.front();
        init_events.pop_front();
    }
}
```

### Example 2: Supporting SimpleNetwork's setup() at an endpoint
An endpoint should call `setup()` on a SimpleNetwork interface in its own `setup()` function.
```cpp
void Endpoint::setup() 
{
    net_iface->setup();
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
