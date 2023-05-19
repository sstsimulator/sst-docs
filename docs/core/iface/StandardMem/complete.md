---
title: complete
---

```cpp
virtual void complete(unsigned int phase);
```

This function is called during SST's `complete()` phase. The (Sub)Component loading the interface should call this function on the interface during its own `complete()` function as SST does not automatically call it on SubComponents. See [`complete()`](../../component/lifecycle/complete) for more information.

## Requirements
**Memory interface** &nbsp;  
Not required, may be implemented if desired.

**Endpoint** &nbsp;  
Call `complete()` on the interface during each round of the `complete()` phase as SST does not automatically call this function on SubComponents. 


## Parameters
* **phase** (unsigned) The phase or round number (i.e., number of times `complete()` has been called on all components).
* **returns** none


## Examples

### Example 1: Implementing complete() in StandardMem
<!--- SOURCE_CODE: NONE --->
```cpp
void ExampleStandardMemInterface::complete(unsigned int phase) { }
```

### Example 2: Supporting complete() at an endpoint
```cpp
void Endpoint::complete(unsigned int phase)
{
    mem_iface->complete(phase); // Must call complete() on the StandardMem interface
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```