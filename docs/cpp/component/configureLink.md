---
id: configureLink
title: configureLink()
---
## Fully Qualified Name
```cpp
SST::BaseComponent::configureLink()
```

### Remarks

Configure a link that is attached to a port. You must configure the link on both ends. If you want to setup a link from a component to itself use [configureSelfLink](cpp/component/configureSelfLink.md).

## Requirements

```cpp
#include <sst/core/component.h>
```

## Syntax

```cpp
// #1 using a TimeConverter class for time_base
Link* configureLink(std::string  name, TimeConverter *  time_base, Event::HandlerBase *  handler = NULL)

// #2 using a string for time_base
Link* configureLink(std::string  name, std::string  time_base, Event::HandlerBase *  handler = NULL)

// #3 Use default time_base, usually set by a call to registerClock()
Link* SST::BaseComponent::configureLink(std::string  name, Event::HandlerBase *  handler = NULL) 
```

## Parameters

**name** - Port Name on which the link to configure is attached

**time_base** - Used to add an additional delay when sending events.

**handler** - (optional) a Handler to be call when an Event is received.

## Return Value

**Link\*** - A pointer to the configured link, or NULL if an error occurred.

## Examples

### Examples 1

```cpp
// #1 using a TimeConverter class for time_base
TimeConverter *tc = registerClock(params.find<std::string>("clockRate", "1 GHz"),
             new Clock::Handler<DMAEngine>(this, &DMAEngine::clock));
     commandLink = configureLink("cmdLink", tc, NULL);
```
### Example 2
```cpp
// #2 using a string for time_base
m_link = configureLink( "memoryHeap", "0ps",
             new Event::Handler<MemoryHeapLink>(
                     this,&MemoryHeapLink::eventHandler ) );  
```

### Example 3
```cpp
// #3 Use default time_base, usually set by a call to registerClock()
link = configureLink("recvPort",
             new Event::Handler<SubCompReceiver>(this, &SubCompReceiver::handleEvent));
```

### Examples 4

```cpp
// #3 Use default time_base, usually set by a call to registerClock()
northBus = configureLink("northBus");
```

## See Also
- [SST::Component::configureSelfLink()](cpp/component/configureSelfLink.md)
- [SST::Link::send()](cpp/link/send.md)