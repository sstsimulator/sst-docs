---
id: send
title: send()
---
## Fully Qualified Name
```cpp
SST::Link::send(SimTime_t delay, TimeConverter* tc, Event* event)
```

### Remarks
Send an event over the link with an optional additional delay.

## Requirements

```cpp
#include <sst/core/link.h>
```

## Syntax

```cpp
// #1 - with the Link's default delay + an additional delay using the specified TimeConverter
void SST::Link::send(SimTime_t delay, TimeConverter* tc, Event* event)

// #2 - with the Link's default delay + an additional delay using the default TimeConverter for the Link
void SST::Link::send(SimTime_t delay, Event* event)

// #3 - with the Link's default delay
void SST::Link::send(Event* event)
```

## Parameters

**delay** - additional delay

**tc** - time converter to specify units for the additional delay

**event** - the Event to send

## Return Value

**None**

## Examples

### Example 1
```cpp
// #1 - with the Link's default delay + an additional delay using the specified TimeConverter
SST::TimeConverter* nanoTimeConverter = Simulation::getSimulation()->getTimeLord()->getTimeConverter("1ns");
EmberEvent* nextEv = evQueue.front();
evQueue.pop();

// issue the next event to the engine for deliver later
selfEventLink->send(nanoDelay, nanoTimeConverter, nextEv);
```

### Example 2
```cpp
// #2 - with the Link's default delay + an additional delay using the default TimeConverter for the Link
port_link->send(1,ev);
```

### Example 3
```cpp
// #2 - with the Link's default delay + an additional delay using the default TimeConverter for the Link
void free( SimVAddr addr, std::function<void(uint64_t)> fini ) {
        Entry* entry = new Entry( fini );

        MemoryHeapEvent* event = new MemoryHeapEvent;
        event->key = (MemoryHeapEvent::Key) entry;
        event->type = MemoryHeapEvent::Free;
        event->addr = addr;

        m_link->send(0, event );        
}

```

### Example 4
```cpp
// #3 - with the Link's default delay
int rndNumber;
rndNumber = (int)(rng->generateNextInt32());
rndNumber = (rndNumber & 0x0000FFFF) ^ ((rndNumber & 0xFFFF0000) >> 16);
rndNumber = abs((int)(rndNumber % 3));

port->send(new StringEvent(std::to_string(rndNumber)));
```

### Example 5
```cpp
// #3 - with the Link's default delay
EVENT* ev=makeEvent<EVENT>(this->out,_trans,this,!this->no_payload);
this->sst_link->send(ev);
```

## See Also

- [configureLink()](cpp/component/configureLink.md)
- [configureSelfLink()](cpp/component/configureSelfLink.md)