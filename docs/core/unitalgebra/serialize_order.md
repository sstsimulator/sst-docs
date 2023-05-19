---
title: serialize_order
---

```cpp
void serialize_order(SST::Core::Serialization::serializer& ser) override;
```

This function serializes a UnitAlgebra object. It is not called directly by SST Elements, but enables Elements to easily serialize a UnitAlgebra, as shown in the example below.

## Parameters
* **val** (serializer) Serializer to add object to. 
* **returns** none

## Example

```cpp
class exampleEvent : public SST::Event
{
    public:
        // Constructor
        exampleEvent() : SST::Event(), bytes("0B") { }

        // Example data member
        UnitAlgebra bytes;
 
        // Events must provide a serialization function that serializes
        // all data members of the event.
        void serialize_order(SST::Core::Serialization::serializer &ser)  override {
            Event::serialize_order(ser);
            ser & bytes; // Serialize a UnitAlgebra
        }
 
        // Register this event as serializable
       ImplementSerializable(SST::simpleElementExample::exampleEvent);
å};
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
