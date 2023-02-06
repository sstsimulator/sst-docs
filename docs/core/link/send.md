---
title: send
---
```cpp
void send(SimTime_t delay, TimeConverter* tc, Event* event);
void send(SimTime_t delay, Event* event);
void send(Event* event);
```

Send an event over the link, optionally, with additional latency added to the mimimum latency the link was configured with as well as any other latency added to the link.


## Parameters
* **delay** (SimTime_t) Additional latency to add, specified as a cycle count
* **tc** (TimeConverter*) Units of delay. If not specified, the units will be the link's default time base.
* **event** (Event*) The event to send.
* **returns** none

## Examples

### Example 1
```cpp
// #1 - with the Link's default delay + an additional delay using the specified TimeConverter
SST::TimeConverter* nanoTimeConverter = Simulation::getSimulation()->getTimeLord()->getTimeConverter("1ns");
EmberEvent* nextEv = evQueue.front();
evQueue.pop();

// issue the next event to the engine for deliver later, add nanoDelay * nanoTimeConverter latency
selfEventLink->send(nanoDelay, nanoTimeConverter, nextEv);
```

### Example 2
```cpp
// #2 - with the Link's default delay + an additional delay using the default TimeConverter for the Link
port_link->send(1,ev);
```

### Example 3
```cpp
// #3 - send with the Link's default delay
void free( SimVAddr addr, std::function<void(uint64_t)> fini ) {
        Entry* entry = new Entry( fini );

        MemoryHeapEvent* event = new MemoryHeapEvent;
        event->key = (MemoryHeapEvent::Key) entry;
        event->type = MemoryHeapEvent::Free;
        event->addr = addr;

        m_link->send(event);        
}

```

## Header
```cpp
#include <sst/core/link.h>
```