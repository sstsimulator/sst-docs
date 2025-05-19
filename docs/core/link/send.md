---
title: send
---
```cpp
void send(SimTime_t delay, TimeConverter* tc, Event* event); // Deprecated in SST 15.0
void send(SimTime_t delay, TimeConverter tc, Event* event);
void send(SimTime_t delay, Event* event);
void send(Event* event);
```

Send an event over the link, optionally, with additional latency added to the minimum latency the link was configured with as well as any other latency added to the link.


## Parameters
* **delay** (SimTime_t) Additional latency to add, specified as a cycle count
* **tc** (TimeConverter) Units of delay. If not specified, the units will be the link's default time base.
* **event** (Event*) The event to send.
* **returns** none

## Examples
<!--- SOURCE_CODE: sst-elements/src/sst/elements/ember/emberengine.cc --->
### Example 1: Using a TimeConverter to add additional latency when sending an event
```cpp
/* From constructor: nanoTimeConverter = getTimeConverter("1ns"); */

EmberEvent* nextEv = evQueue.front();
evQueue.pop();

// issue the next event to the engine for deliver later, add nanoDelay * nanoTimeConverter latency
// Latency: link latency (from input) + (nanoDelay * nanoTimeConverter)
selfEventLink->send(nanoDelay, nanoTimeConverter, nextEv);
```

### Example 2: Using a Link's default TimeConverter to add additional latency when sending an event
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/portControl.cc --->
```cpp
// Latency: default link latency from input file + (1 * link's default TimeConverter)
port_link->send(1,ev);
```

### Example 3: Send an event without additional delay
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/memLink.cc --->
```cpp
// Latency: default link latency from input file
void MemLink::send(MemEventBase *ev) 
{
    link->send(ev);
}
```

## Header
```cpp
#include <sst/core/link.h>
```
