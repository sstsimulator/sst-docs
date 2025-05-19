---
title: constructor
---

```cpp
// PortModule constructor
PortModuleClassName(SST::Params& params);
// Base SST::Module class constructor
SST::PortModule();
```
This constructor is called when a PortModule is loaded.

## Parameters
* **params** (Params&) The parameter set passed into the module by the loading sub(component).
* **returns** (PortModule) The newly constructed PortModule

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

    SST_ELI_DOCUMENT_PARAMS(
        { "drop_probability", "Set the probability of a dropped event between 0\% and 100\%", "10",},
        { "seed", "Seed to use for random number generation", "1" }
    )
    //highlight-next-line
    DropEvent(Params& params);
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
DropEvent::DropEvent(Params& params) : PortModule()
{
    rng = new SST::RNG::MersenneRNG(params.find<unsigned>("seed", 1));
    probability = params.find<uint32_t>("drop_probability", 10);
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
