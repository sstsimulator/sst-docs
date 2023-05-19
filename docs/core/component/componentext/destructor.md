---
title: destructor
---

```cpp
~ComponentExtension();
```
*Availability*: ComponentExtension
SST calls each components destructor prior to exiting. Components are responsible for cleaning up internal state but not state registered with SST including links, clock handlers, and statistics. Note that some SSTCore state may have already been cleaned up when the destructor is called and so components should not attempt to call any Component API functions in their destructors.

## Parameters
* **returns** none


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/mshr.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/mshr.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/mshr.h"
#include <sst/core/componentextension.h>

/* The MSHR is really just a buffer that a cache uses but it is useful to be able to access
 * some of the simulation time functions available to components. We could make this a subcomponent 
 * but it doesn't need to be available to users to swap dynamically. 
 */
class MSHR : public SST::ComponentExtension
{
public:
    // No ELI needed

    // id is passed automatically by SST when loaded, the rest of the args are provided by the Component 
    // that loads this extension
    MSHR(ComponentId_t id, Output* dbg, int maxSize, std::string cacheName, std::set<Addr> debugAddr);
    //highlight-next-line
    virtual ~MSHR() {}

    int getMaxSize();
    int getSize();

    /* Rest of class here */

};
```
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/mshr.cc"
#include <sst_config.h>
#include "mshr.h"

MSHR::~MSHR()  { }
{
    /* Destructor here */
}

/* Rest of functions defined here */

```

## Header
```cpp
#include <sst/core/componentExtension.h>
```
