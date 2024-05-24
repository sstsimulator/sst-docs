---
title: setFunctor
---

```cpp
void setFunctor(Event::HandlerBase* functor);
```

Set the callback handler for events arriving on a link. Does not delete the previous handler that was registered to the Link.

:::note
This function cannot be used on a Link that was configured as a polling link (i.e., configured without a handler).
:::

## Parameters
* **functor** (Event::HandlerBase*) Event handler to invoke for event arrivals
* **returns** none


## Example

```cpp
// Configure a link connected to a port named 'port' 
Event::HandlerBase* handler = new Event::Handler2<example,&example::handleEvent>(this);
SST::Link* link = configureLink("port", handler);

// Change the link to call otherHandleEvent() instead of handleEvent() when an event arrives
// setFunctor won't delete the existing handler so we can reuse it later if we want to swap again
//highlight-next-line
link->setFunctor(new Event::Handler2<example,&example::otherHandleEvent>(this));
```

## Header
```cpp
#include <sst/core/link.h>
```
