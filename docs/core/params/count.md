---
title: count
---
```cpp
size_t count(const std::string& key) const;
```

Finds the number of elements with a given key. Because duplicate keys are not allowed, this function returns at most one. Note this is the case even if a key exists in both the local and global params.

## Parameters
* **key** (std::string) The key to search for
* **returns** (size_t) The number of times the key exists in the Params (0 or 1)


## Example

```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"
// Example Component constructor
example0::example0(ComponentId_t id, Params& params) : Component(id) {
    int key_found = params.count("eventsToSend");
}
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```