---
title: loadComponentExtension
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
template <class T, class... ARGS>
T* loadComponentExtension(ARGS... args);
```
*Availability:* Component, SubComponent, ComponentExtension

Load an SST ComponentExtension. The extension will be loaded as if it were part of the parent (Sub)Component and will share the parent's ELI information. This functions similarly to creating a new instance of the templated type, except that the instance has access to the (Sub)Component API as if it were part of the (Sub)Component itself.

## Parameters
* **args** (ARGS) ComponentExtension-specific arguments for the extension's constructor
* **returns** (bool) A pointer to the newly-created extension

## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/ember/emberengine.cc --->
### Example 1
```cpp
// Excerpt from ember/emberengine.cc
EmberEngine::EmberEngine(ComponentId_t id, Params& params) : Component(id),
    currentMotif(0), m_motifDone(false), m_detailedCompute(NULL)
{
    /** Configuration here */
    std::string motifLogFile = params.find<std::string>("motifLog", "");
    if ("" != motifLogFile) {
        m_motifLogger = loadComponentExtension<EmberMotifLog>(motifLogFile, m_jobId);
    } else {
        m_motifLogger = nullptr;
    }

    /** Rest of configuration here */
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```