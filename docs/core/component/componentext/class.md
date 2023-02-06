---
title: SST::ComponentExtension
---

A ComponentExtension is a class that shares ELI with a Component. It can be useful when it is convienent to divide a Component class into separate classes but the additional classes do not need to be dynamically loadable or otherwise available to SST users. A ComponentExtension has access to the SST simulation via the Component it is loaded into. In parallel simulations, a ComponentExtension is always co-located with its Component.

## Example
```cpp
/* Source: memHierarchy/mshr.h */

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
    virtual ~MSHR() {}

    int getMaxSize();
    int getSize();

    /* Rest of class here */

};

/* Source: memHierarchy/mshr.cc */
#include <sst_config.h>
#include "mshr.h"

MSHR::MSHR(ComponentId_t id, Output* debug, int maxSize, string cacheName, std::set<Addr> debugAddr) :
    ComponentExtension(id)
{
    /* Constructor here */
}

/* Rest of functions defined here */

```

## Header
```cpp
#include <sst/core/componentExtension.h>
```