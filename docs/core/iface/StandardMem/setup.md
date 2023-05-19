---
title: setup
---

```cpp
virtual void setup();
```

See [`setup()`](../../component/lifecycle/setup) for a description of SST's setup phase and the use of this function. The (Sub)Component that loaded a StandardMem interface should call this function during its own `setup()` function. A StandardMem interface may implement this function if needed, but it is not required.

## Requirements
**Memory interface** &nbsp;  
This function may be optionally implemented.

**Endpoint** &nbsp;  
Call `setup()` on the interface during the `setup()` phase as SST does not automatically call this function on SubComponents. 

## Parameters
* **returns** none


## Examples

### Example 1: Implementing setup() in StandardMem
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
void StandardInterface::setup() { 
    /* Report some debug information about the interface setup */
    debug.debug(_L9_, "%s, INFO: Line size: %" PRIu64 ", Mask: 0x%" PRIx64 "\n", getName().c_str(), lineSize_, baseAddrMask_);
    if (noncacheableRegions.empty()) {
        debug.debug(_L9_, "%s, INFO: No noncacheable regions discovered\n", getName().c_str());
    } else {
        std::ostringstream regstr;
        regstr << getName() << ", INFO: Discovered noncacheable regions:";
        for (std::multimap<Addr, MemRegion>::iterator it = noncacheableRegions.begin(); it != noncacheableRegions.end(); it++) {
            regstr << " [" << it->second.toString() << "]";
        }
        debug.debug(_L9_, "%s\n", regstr.str().c_str());
    }
    /* Call setup() on SubComponents */
    link_->setup();
}
```

### Example 2: Supporting setup() at an endpoint
```cpp
void Endpoint::setup() 
{
    mem_iface->setup();
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```