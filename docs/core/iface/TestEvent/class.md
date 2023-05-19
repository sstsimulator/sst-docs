---
title: SST::Interfaces::TestEvent
sidebar_label: TestEvent
---

The TestEvent class is an Event, derived from SST::Event. It is targeted for early prototyping and testing use cases. The event contains two fields, a *count* and a boolean value indicating whether the event should print a message when it is deleted. The event is serializable.

## Member variables
* **count** (int) A count. Has no default value.
* **print_on_delete** (bool) Whether the event should print a message from its destructor. Default value is `false`.

## Member functions

### Constructor
```cpp
TestEvent::TestEvent();
```

### Destructor
```cpp
TestEvent::~TestEvent();
```

## Header
```cpp
#include <sst/core/interfaces/TestEvent.h>
```