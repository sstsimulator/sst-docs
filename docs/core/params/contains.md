---
title: contains
---
```cpp
bool contains(const std::string& key) const;
```

Return whether a Params object contains the provided key.

## Parameters
* **key** (std::string) A key to search for
* **returns** (bool) True if the key is in the Params object, false otherwise


## Examples

### Example 1
```cpp
Params p;
p.insert("frequency", "3GHz");
bool x = p.contains("frequency");  // x = true
bool y = p.contains("clock_rate"); // y = false

```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```