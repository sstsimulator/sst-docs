---
title: isConfigured
---

```cpp
bool isConfigured();
```

Returns whether the link has been configured, either as a handler link or a polling link.

## Parameters
* **returns** (bool) True if the link has been configured, false otherwise


## Example
```cpp
SST::Link* link = configureLink("port", new Event::Handler<example,&example::handleEvent>(this));

//highlight-next-line
if ( link != nullptr && link->isConfigured() ) {
    /* Link is ready to use */
}
```

## Header
```cpp
#include <sst/core/link.h>
```
