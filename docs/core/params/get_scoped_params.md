---
title: get_scoped_params
---
```cpp
Params get_scoped_params(const std::string& scope) const;
```

Copy parameters with the scope prefix into a new Params object and return the new object. SST uses a naming convention where a scope is a series of names separated by '.'. In particular, any parameter key prefixed by "scope." will be in the returned Params object. The returned params will have the scope stripped from their key strings. Scoping is commonly used when a parent object handles parameters for child SubComponents, modules, etc. Scoping parameters allows the parent to easily identify which object should receive the given parameters.

Both local and global params will be searched but all matching params will be copied into the local space of the new Params object.

## Parameters
* **scope** (std::string) The scope to search for. A '.' will be appended to the scope for the search.
* **returns** (Params) A new parameter object with all scoped parameters.

## Examples

### Example 1
```cpp
/* Excerpt from sst-elements/src/sst/elements/prospero/proscpu.cc */
ProsperoComponent::ProsperoComponent(ComponentId_t id, Params& params) : Component(id) 
{
    /* Some constructor stuff and then: load a subcomponent from the python input configuration if
     * it was indicated there. Otherwise, load a default one and get any parameters it needs from our own 
     * set of parameters by looking for parameters prefixed with "readerParams.".
     */

    reader = loadUserSubComponent<ProsperoTraceReader>("reader", ComponentInfo::SHARE_NONE< output>);

    if (!reader) {
        std::string traceModule = params.find<std::string>("reader", "prospero.ProsperoTextTraceReader");

        Params readerParams = params.get_scoped_params("readerParams");
        reader = loadAnonymousSubComponent<ProsperoTraceReader>(traceModule, "reader", 0, ComponentInfo::INSERT_STATS, readerParams, output);
    }

    /* Rest of constructor */
}
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```