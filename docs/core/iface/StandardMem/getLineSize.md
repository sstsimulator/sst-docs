---
title: getLineSize
---

```cpp
virtual Addr getLineSize() = 0;
```
Return a line size, in bytes from the memory system. The memory system should provide this and it should be valid after SST's `init()` phase is complete. Endpoints can safely call this function during `setup()`. A return value of 0 indicates that either the memory system doesn't support line sizes or it isn't relevant. Otherwise, it can be used by endpoints as needed to meet a particular memory system's alignment and request size requirements.

## Requirements
**Memory interface** &nbsp;  
Ensure this function returns valid information as soon as `init()` finishes. If line size is not relevant to a memory system implementation, can return 0. 

**Endpoint** &nbsp;  
Do not call this function prior to SST's `setup()` phase.

## Parameters
* **returns** (Addr) The number of bytes in a cache line or other unit of memory access used by the memory system. A return value of 0 indicates the value is not relevant or not used.

## Examples

### Example 1: Implementing getLineSize() in a StandardMem interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.h"
virtual Addr getLineSize() override
{
    return lineSize_;
}
```

### Example 2: Using getLineSize() from an endpoint
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/testcpu/standardCPU.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/testcpu/standardCPU.cc"
void standardCPU::setup()
{
    memory->setup();
    lineSize = memory->getLineSize();
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```