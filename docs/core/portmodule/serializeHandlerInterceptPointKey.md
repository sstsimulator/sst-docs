---
title: serializeHandlerInterceptPointKey
---

```cpp
virtual void serializeHandlerInterceptPointKey(SST::Core::Serialization::serializer& ser, uintptr_t& key);
```

This does not need to be implemented unless overriding [`registerHandlerIntercept`](./registerHandlerIntercept.md). It is used to serialize the otherwise opaque `key` returned by that function.

## Parameters
* **ser** (serializer&) Serializer to use for serialization
* **key** (uintptr_t&) The key to serialize
* **returns** none


## Example
```cpp
void
PortModule::serializeHandlerInterceptPointKey(SST::Core::Serialization::serializer& ser, uintptr_t& key)
{
    if ( ser.mode() == SST::Core::Serialization::serializer::UNPACK ) {
        key = 0;
    }
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
