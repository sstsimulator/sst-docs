---
title: destructor
---

```cpp
~PortModuleClassName();
```

SST calls each port module's destructor prior to exiting.

## Parameters
* **returns** none

## Example

```cpp title="Example PortModule that randomly drops events; header file"
class DropEvent : public SST::PortModule
{
public:
    SST_ELI_REGISTER_PORTMODULE(
        DropEvent,                      // Class name
        "example",                      // Library name, the 'lib' in SST's lib.name format
        "drop",                         // Name used to refer to this port module, the 'name' in SST's lib.name format
        SST_ELI_ELEMENT_VERSION(1,0,0), // A version number
        "Randomly drops events")        // Description
    )

    SST_ELI_DOCUMENT_PARAMS(
        { "drop_probability", "Set the probability of a dropped event between 0\% and 100\%", "10",},
        { "seed", "Seed to use for random number generation", "1" }
    )

    DropEvent(Params& params);
    //highlight-next-line
    ~DropEvent();

    void eventSent(uintptr_t key, Event*& ev) override;
    void interceptHandler(uintptr_t key, Event*& ev, bool& cancel) override;

    bool installOnReceive() override { return true; }
    bool installOnSend() override { return false; }

private:
    SST::RNG::MersenneRNG * rng;
    uint32_t probability;
};
```

```cpp title="Example constructor implementation for above class"
~DropEvent::DropEvent()
{
    delete rng;
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
