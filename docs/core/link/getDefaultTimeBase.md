---
title: getDefaultTimeBase
---

```cpp
// Deprecated in SST 15.0, will be removed in SST 16.0
TimeConverter* getDefaultTimeBase();
const TimeConverter* getDefaultTimeBase() const;
// Will replace deprecated function in SST 16.0
TimeConverter getDefaultTimeBase();
const TimeConverter getDefaultTimeBase() const;
```

:::warning Deprecation
Shared TimeConverters returned by SST-Core APIs will be removed in SST 16.0. All functions accepting TimeConverter* now accept TimeConverter instead. Elements using a TimeConverter* returned by SST-Core should create a local non-shared instance as shown:
```cpp
// Old code
TimeConverter* tc = function_that_returns_tc();
// New code
TimeConverter tc = function_that_returns_tc();
```
:::

## Parameters
* **returns** A TimeConverter* representing the default time base


## Example
```cpp
// Configure a link connected to a port named 'port' 
SST::Link* link = configureLink("port", new Event::Handler2<example,&example::handleEvent>(this));

//highlight-next-line
TimeConverter tc = link->getDefaultTimeBase();
Output* out = getSimulationOutput();
out->output("The link connected to 'port' has a default time base of %s\n", tc.getPeriod().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/link.h>
```
