---
title: SST::Interfaces::StringEvent
sidebar_label: StringEvent
---

The StringEvent class is an Event, derived from SST::Event. It is provided for early prototyping and testing use cases. The event wraps a single string. The event is serializable.

## Member variables
* **str** (std::string) A string. Has no default value.

## Member functions

### Constructor
```cpp
StringEvent::StringEvent(); // For serialization only
StringEvent::StringEvent(const std::string& str);
```

### Destructor
```cpp
StringEvent::~StringEvent();
```

### clone
```cpp
virtual Event* clone();
```

### getString
```cpp
const std::string& getString();
```

## Header
```cpp
#include <sst/core/interfaces/stringEvent.h>
```