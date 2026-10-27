---
title: getId
---

```cpp
LinkId_t getId();
```

Returns the unique ID assigned to the Link. LinkId_t is a uint64_t.

## Parameters
* **returns** The ID assigned to the Link.


## Example
```cpp
// Configure a link connected to a port named 'port' 
SST::Link* link = configureLink("port", new Event::Handler<example,&example::handleEvent>(this));

Output* out = getSimulationOutput();
//highlight-next-line
out->output("The link connected to 'port' has id %" PRIu64 "\n", link->getId());
```

## Header
```cpp
#include <sst/core/link.h>
```
