---
title: loadUserSubComponent
---

```cpp
template <class T, class... ARGS>
T* loadUserSubComponent(const std::string& slot_name, uint64_t share_flags, ARGS... args);
```
*Availability:* Component, SubComponent, ComponentExtension

Load a User-defined SST SubComponent, that is, one that was defined in the simulation configuration file.

## Parameters
* **slot_name** (string) Name of the slot to load into
* **slot_num** (int) Index in the slot to load into
* **share_flags** (uint64_t) SST flags that indicate how statistics, ports, and other ELI properties should be shared between parent (Sub)Component and child SubComponent
* **args** (ARGS) Additional SubComponent API-specific arguments for the SubComponent's constructor
* **returns** (bool) A pointer to the newly-created SubComponent

## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/miranda/mirandCPU.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/miranda/mirandCPU.cc"
RequestGenCPU::RequestGenCPU(ComponentId_t id, Params& params) : Component(id) {
    /** Configuration here */

    // Load a StandardMem memory interface to translate our memory requests for the attached memory subsystem
    cache_link = loadUserSubComponent<SST::Interfaces::StandardMem>("memory", ComponentInfo::SHARE_NONE,
        timeConverter, new Interfaces::StandardMem::Handler<RequestGenCPU>(this, &RequestGenCPU::handleEvent));
    

    /** Rest of configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```