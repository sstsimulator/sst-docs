---
title: setMemoryMappedAddressRegion
---

```cpp
virtual void setMemoryMappedAddressRegion(Addr start, Addr size);
```

Set which addresses in the global address space will map to this endpoint. Only contiguous address ranges are supported. By default, the endpoint is not addressable. The mapped region will be `[start, start+size)`.

## Requirements
**Memory interface** &nbsp;  
Support setting memory mapped addresses if supported by the memory system. The function must be implemented, but a particular impelementation can raise an error if this is not supported.

**Endpoint** &nbsp;  
Call this function to set the addressable region if the endpoint needs to be mapped into the memory space.

## Parameters
* **start** (Addr) starting address mapped to this endpoint
* **size** (Addr) number of bytes mapped to this endpoint
* **returns** none


## Examples

### Example 1: Implementing setMemoryMappedAddressRegion in a StandardMem interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
void StandardInterface::setMemoryMappedAddressRegion(Addr start, Addr size) {
    region.start = start;
    region.end = start + size - 1;
    region.interleaveStep = 0;
    region.interleaveSize = 0;
    epType = Endpoint::MMIO;
    link_->setRegion(region);
}
```

### Example 2: Using setMemoryMappedAddressRegion from an endpoint
```cpp
mem_iface->setMemoryMappedAddressRegion(256, 64);
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```