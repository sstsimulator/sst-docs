---
title: serialize_order
---
```cpp
void serialize_order(SST::Core::Serialization::serializer& ser);
```
*Availability*: Component, ComponentExtension, SubComponent

See the [serialization framework](../../serialization/overview.md) for more detail.

This function serializes the base element classes for checkpoint/restart. When implementing support for checkpointing, elements should call this function from their own `serialize_order` function.

## Parameters
* **ser** (Serializer) The serializer to add data to.
* **returns** None

## Example

<!--- No source (yet) --->
```cpp
void checkpointExampleComponent::serialize_order(SST::Core::Serialization::serializer& ser)
{
	// Serialize base class (SST::Component in this case) FIRST
	SST::Component::serialize_order(ser);

	// Serialize class members (data0 to data3 for example)  SECOND
	SST_SER(data0)
	SST_SER(data1)
	SST_SER(data2)
	SST_SER(data3)
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
