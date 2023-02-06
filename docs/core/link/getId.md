---
title: getId
---

```cpp
LinkId_t getId();
```

Returns the unique ID assigned to the Link. LinkId_t is a uint32_t.

## Parameters
* **returns** The ID assigned to the Link.


## Examples

### Example 1
```cpp
// Configure a link connected to a port named 'port' 
SST::Link* link = configureLink("port", new Event::Handler<example>(this, &example::handleEvent));

Output* out = getSimulationOutput();
out->output("The link connected to 'port' has id %u\n", link->getId());
```

## Header
```cpp
#include <sst/core/link.h>
```
