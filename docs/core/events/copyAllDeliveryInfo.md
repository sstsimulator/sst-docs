---
title: copyAllDeliveryInfo
---

```cpp
void copyAllDeliveryInfo(const Activity* act);
```

Copies delivery metadata from the provided activity (typically another event). In certain instances such as a PortModule replacing an event with another, this needs to be called to transfer delivery information. Otherwise, it rarely needs to be called directly by elements.

## Parameters
* **act** (Activity*) Activity to copy delivery information from
* **returns** none


## Example

```cpp
SST::Event* old_event = new Event();
SST::Event* new_event = new Event();

//highlight-next-line
new_event->copyAllDeliveryInfo(old_event);
```

## Header
```cpp
#include <sst/core/event.h>
```
