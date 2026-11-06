---
title: getFunctor
---

```cpp
Event::HandlerBase* getFunctor();
```

Returns the event handler that is called when an event arrives on the link. Polling links (links configured without a handler) return `nullptr`.

## Parameters
* **returns** (Event::HandlerBase*) Handler used for event delivery, or `nullptr` for a polling link


## Example
```cpp
// Configure a link connected to a port named 'port'
SST::Link* link = configureLink("port", new Event::Handler<example,&example::handleEvent>(this));

//highlight-next-line
Event::HandlerBase* handler = link->getFunctor();
```

## Header
```cpp
#include <sst/core/link.h>
```
