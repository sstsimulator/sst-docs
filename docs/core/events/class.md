---
title: SST::Event
---

The Event class in SST is the base class for all simulation Events that get passed over Links. Libraries are expected to implement their own event types that derive from the SST::Event class. The base class provides some common functions for all events.

## Serialization
Events that are sent on regular (non-self) links must be serializable so that the Core can serialize as needed
in parallel simulations. To that end, events must either use the macro 
`ImplementSerializable(FULLY::QUALIFIED::CLASS::NAME)` and define the `serialize_order` function for the class, 
or must use the macro `NotSerializable(CLASS_NAME)`. Virtual classes may use the `ImplementVirtualSerializable(FULLY::QUALIFIED::CLASS_NAME)` macro as well.

## Event IDs
Events can optionally ask to be assigned a globally unique ID. The id is defined by `typedef std::pair<uint64_t, int> id_type`, where the second field is the rank that the creating component resides on, and the first field is an unsigned integer that is unique among all events created by all components on the same rank.

## Event Handlers
Links can optionally register a callback function which is an event handler. The handler pass in an SST Event and returns `void`. Like other handlers in SST, the handler can also be created with an optional data field.

## Example event class 
This example is derived from sst-elements/src/sst/elements/simpleElementExample/basicEvent.h

```cpp
#include <sst/core/event.h>

namespace SST {
namespace simpleElementExample {

// Example event that include a vector<char> payload 
// and a boolean value called 'last'
class basicEvent : public SST::Event
{
public:
    // Constructor
    // Serializable events need a default constructor
    basicEvent() : SST::Event(), last(false) { }
    
    // Example data members
    std::vector<char> payload;
    bool last;

    // Events must provide a serialization function that serializes
    // all data members of the event
    void serialize_order(SST::Core::Serialization::serializer &ser)  override {
        Event::serialize_order(ser);
        ser & payload;
        ser & last;
    }

    // Register this event as serializable
    ImplementSerializable(SST::simpleElementExample::basicEvent);
};

} // namespace simpleElementExample
} // namespace SST

```

## Header
```cpp
#include <sst/core/event.h> 
```