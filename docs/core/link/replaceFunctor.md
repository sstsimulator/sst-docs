---
title: replaceFunctor
---

```cpp
void replaceFunctor(Event::HandlerBase* functor);
```

Set the callback handler for events arriving on a link. Also deletes the previous handler registered to the link.

:::note
This function cannot be used on a Link that was configured as a polling link (i.e., configured without a handler).
:::

## Parameters
* **functor** (Event::HandlerBase*) Event handler to invoke for event arrivals
* **returns** none


## Example
```cpp
// Configure a link connected to a port named 'port' 
SST::Link* link = configureLink("port", new Event::Handler2<example,&example::handleEvent>(this));

// Change the link to call otherHandleEvent() instead of handleEvent() when an event arrives
// The original handler will be deleted
link->replaceFunctor(new Event::Handler2<example,&example::otherHandleEvent>(this));
```

## Header
```cpp
#include <sst/core/link.h>
```
