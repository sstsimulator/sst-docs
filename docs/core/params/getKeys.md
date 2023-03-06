---
title: getKeys
---
```cpp
std::set<std::string getKeys>() const;
```

Return the set of all keys (local and global) contained in the Params object.

## Parameters
* **returns** (std::set<std::string>) A set of keys that belong to this object


## Examples

### Example 1
```cpp
example::example(ComponentId_t id, Params& params) : Component(id)
{
    // See what parameters this object got
    std::set<std::string> keys = params.getKeys();
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