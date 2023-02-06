---
title: loadModule
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
template <class T, class... ARGS>
T* loadModule(const std::string& type, Params& params, ARGS... args);
```
*Availability:* Component, SubComponent, ComponentExtension

Load an SST Module.

## Parameters
* **type** (string) Module type
* **params** (Params) Set of parameters to pass to the module's constructor
* **args** (ARGS) Additional module-specific arguments for the module's constructor
* **returns** (bool) A pointer to the newly-created module

## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/ariel/arielcore.cc --->
### Example 1
```cpp
// Excerpt from ariel/arielcore.cc
ArielCore::ArielCore(ComponentId_t id, Params& params) : Component(id) {
    /** Configuration here */

    std::string traceGenName = params.find<std::string>("tracegen", "");
    enableTrace = ("" != traceGenName);

    if (enableTracing) {
        Params interfaceParams = params.get_scoped_params("tracer");
        traceGen = loadModule<ArielTraceGenerator>(traceGenName, interfaceParams);

        sst_assert(traceGen, CALL_INFO, -1, "Unable to laod tracing module: \"%s\"\n", traceGenName.c_str());

    /** Rest of configuration here */
    }
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```