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

## Examples

### Example 1
```cpp
 37 class exampleEvent : public SST::Event
 38 {
 39 public:
 40     // Constructor
 41     exampleEvent() : SST::Event(), bytes("0B") { }
 42 
 43     // Example data member
 44     UnitAlgebra bytes;
 46 
 47     // Events must provide a serialization function that serializes
 48     // all data members of the event.
 49     void serialize_order(SST::Core::Serialization::serializer &ser)  override {
 50         Event::serialize_order(ser);
 51         ser & bytes; // Serialize a UnitAlgebra
 53     }
 54 
 55     // Register this event as serializable
 56     ImplementSerializable(SST::simpleElementExample::exampleEvent);
 57 };
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
