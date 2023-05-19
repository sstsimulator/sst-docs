---
title: loadAnonymousSubComponent
---

```cpp
template <class T, class... ARGS>
T* loadAnonymousSubComponent(const std::string& type, const std::string slot_name,
    int slot_num, uint64_t share_flags, Params& params, ARGS... args);
```
*Availability:* Component, SubComponent, ComponentExtension

Load an SST SubComponent anonymously, that is, not via the simulation configuration file.

## Parameters
* **type** (string) SubComponent type in `lib.name` format
* **slot_name** (string) Name of the slot to load into
* **slot_num** (int) Index in the slot to load into
* **share_flags** (uint64_t) SST flags that indicate how statistics, ports, and other ELI properties should be shared between parent (Sub)Component and child SubComponent
* **params** (Params) Set of parameters to pass to the SubComponent's constructor
* **args** (ARGS) Additional SubComponent API-specific arguments for the SubComponent's constructor
* **returns** (bool) A pointer to the newly-created SubComponent

## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/miranda/mirandCPU.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/miranda/mirandaCPU.cc"
RequestGenCPU::RequestGenCPU(ComponentId_t id, Params& params) : Component(id) {
    /** Configuration here */

    // Load a StandardMem memory interface to translate our memory requests for the attached memory subsystem
    std::string interfaceName = params.find<std::string>("memoryinterface", "memHierarchy.standardInterface");
    Params interfaceParams = params.get_scoped_params("memoryinterfaceparams");
    interfaceParams.insert("port", "cache_link"); // The interface will share our port named 'cache_link'

    //highlight-start
    cache_link = loadAnonymousSubComponent<SST::Interfaces::StandardMem>(interfaceName, "memory", 0,
        ComponentInfo::SHARE_PORTS | ComponentInfo::INSERT_STATS, interfaceParams, timeConverter, 
        new Interfaces::StandardMem::Handler<RequestGenCPU>(this, &RequestGenCPU::handleEvent));
    //highlight-end

    sst_assert(cache_link, CALL_INFO, -1, "%s, Error loading memory interface\n", getName().c_str());

    /** Rest of configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```