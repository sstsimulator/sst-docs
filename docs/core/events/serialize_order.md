---
title: serialize_order
---

```cpp
virtual void serialize_order(SST::Core::Serialization::serializer& ser) override;
```

This function is used by SST when events need to be serialized for transmission over non-local Links. 
Events that are serializable *must* implement this function. The function should first call 
`Event::serialize_order(ser)` and then append any class members that need to be serialized (generally, all of them) 
to the serializer using the overloaded `&` operation. SST's serializer can serialize POD types, pointers (but not the data pointed to), and many standard containers (e.g., std::vector). Other types may need to be manually serialized. 

## Parameters
* **ser** (SST::Core::Serialization::serializer) serializer to add the event class members to
* **returns** none


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicEvent.h --->
```cpp
/* simpleElementExample/basicEvent.h */
class basicEvent : public SST::Event
{
public:
    // Constructor
    basicEvent() : SST::Event(), last(false) { }
    
    // Example data members
    std::vector<char> payload;
    bool last;

    // Events must provide a serialization function that serializes
    // all data members of the event
    //highlight-start
    void serialize_order(SST::Core::Serialization::serializer &ser)  override {
        Event::serialize_order(ser);
        ser & payload;
        ser & last;
    }
    //highlight-end

    // Register this event as serializable
    ImplementSerializable(SST::simpleElementExample::basicEvent);
};
```

## Header
```cpp
#include <sst/core/component.h>
```
