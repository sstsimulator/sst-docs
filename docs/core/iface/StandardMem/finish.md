---
title: finish
---

```cpp
virtual void finish();
```

See [`finish()`](../../component/lifecycle/finish) for a description of SST's finish phase and the use of this function. The (Sub)Component that loaded a StandardMem interface should call this function during its own `finish()` function. A StandardMem interface may implement this function if needed, but it is not required.

## Requirements
**Memory interface** &nbsp;  
This function is optional.

**Endpoint** &nbsp;  
Call `finish()` on the interface during the `finish()` phase as SST does not automatically call this function on SubComponents. 


## Parameters
* **returns** none


## Examples

### Example 1: Implementing finish() in StandardMem
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
void StandardInterface::finish() { /* Empty */ }
```

### Example 2: Supporting StandardMem's finish() at an endpoint
An endpoint should call `finish()` on a StandardMem interface in its own `finish()` function.
```cpp
void Endpoint::finish() 
{
    mem_iface->finish();
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```