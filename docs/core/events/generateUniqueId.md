---
title: generateUniqueId
---

```cpp
id_type generateUniqueId();
```

Returns a unique ID of the form `std::pair<uint64_t, int>` where the second member is the rank the id is created on and the first is a unique number across all calls to this function on the same rank.

## Parameters
* **returns** id_type with a unique identifier for the event


## Example

```cpp
SST::Event* event = new Event();
id_type id = event->generateUniqueId();
```

## Header
```cpp
#include <sst/core/event.h>
```
