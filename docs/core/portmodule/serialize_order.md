---
title: serialize_order
---

```cpp
virtual void serialize_order(SST::Core::Serialization::serializer& ser);
```

See the [serialization framework](../serialization/overview.md) for more detail.

This function serializes the PortModule and is used for checkpoint and/or interactive debug. See [`serialization`](../serialization/overview.md) for details.

## Parameters
* **ser** (serializer&) Serializer to use for serialization
* **returns** none


## Example
```cpp
void
DropEvent::serialize_order(SST::Core::Serialization::serializer& ser)
{
    SST::PortModule::serialize_order(ser); // Serialize parent class first

    // Serialize class members
    SST_SER(rng)
    SST_SER(probability)
}
```

## Header
```cpp
#include <sst/core/portModule.h>
```
