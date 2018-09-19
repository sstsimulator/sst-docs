---
id: configureSelfLink
title: configureSelfLink()
---
## Fully Qualified Name
```cpp
SST::BaseComponent::configureSelfLink()
```

### Remarks

Used in a Component to attach a link to itself. If you want to setup a link between two components use [configureLink](cpp/component/configureLink.md).

## Requirements

```cpp
#include <sst/core/component.h>
```

## Syntax

```cpp
// #1 using a TimeConverter class for time_base
Link * SST::BaseComponent::configureSelfLink (std::string  name, TimeConverter *  time_base, Event::HandlerBase *  handler = NULL)

// #2 using a string for time_base
Link * SST::BaseComponent::configureSelfLink ( std::string  name, std::string  time_base, Event::HandlerBase *  handler = NULL)

// #3 Use default time_base, usually set by a call to registerClock()
Link * SST::BaseComponent::configureSelfLink (std::string  name, Event::HandlerBase *  handler = NULL)
```

## Parameters

**name** - Port Name on which the link to configure is attached

**time_base** - Used to add aditional delay when sending events.

**handler** - (optional) a Handler to be call when an Event is received.

## Return Value

**Link\*** - A pointer to the configured link, or NULL if an error occured.

## Examples

### Examples 1
```cpp
// #1 using a TimeConverter class for time_base
TimeConverter* base_tc = registerTimeBase("1ps",false);
timing_link = configureSelfLink("timing_link", base_tc, new Event::Handler<OfferedLoad>(this, &OfferedLoad::output_timing));
```

### Examples 2
```cpp
// #2 using a string for time_base
self_link = configureSelfLink("complete_link", "2GHz", new Event::Handler<bisection_test>(this,&bisection_test::handle_complete));

```

#### Examples 3
```cpp
// #3 Use default time_base, usually set by a call to registerClock()
selfLink = configureSelfLink( "linkToSelf", new Event::Handler<faultInjectionComponent>( this, &faultInjectionComponent::handleSelfLink ) );
```

## See Also
- [SST::Component::configureLink()](cpp/component/configureLink.md)
- [SST::Link::send()](cpp/link/send.md)