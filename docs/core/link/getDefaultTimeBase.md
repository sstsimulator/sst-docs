---
title: getDefaultTimeBase
---

```cpp
TimeConverter* getDefaultTimeBase();
const TimeConverter* getDefaultTimeBase() const;
```

## Parameters
* **returns** A TimeConverter* representing the default time base


## Examples

### Example 1
```cpp
// Configure a link connected to a port named 'port' 
SST::Link* link = configureLink("port", new Event::Handler<example>(this, &example::handleEvent));

TimeConverter* tc = link->getDefaultTimeBase();
Output* out = getSimulationOutput();
out->output("The link connected to 'port' has a default time base of %s\n", tc->getPeriod().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/link.h>
```
