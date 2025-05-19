---
title: addSendLatency
---

```cpp
void addSendLatency(int cycles, const std::string& timebase);
void addSendLatency(SimTime_t cycles, TimeConverter* timebase); // Deprecated in SST 15.0
void addSendLatency(SimTime_t cycles, TimeConverter timebase);
```

Set additional latency to be added to all events that are sent out on this link. 

## Parameters
* **cycles** (int or SimTime_t) number of cycles of latency to add
* **timebase** (std::string or TimeConverter) Base units for cycles
* **returns** none


## Example

```cpp
// Configure a link connected to a port named 'port' 
SST::Link* link = configureLink("port", new Event::Handler2<example,&example::handleEvent>(this));

// Add 20ns of latency
link->addSendLatency(1, "20ns");

// Add 4*1ns = 4ns of latency
link->addSendLatency(4, "1GHz");

// Total latency will be 20ns + 4ns + <amount configured on link in input file> 
```

## Header
```cpp
#include <sst/core/link.h>
```
