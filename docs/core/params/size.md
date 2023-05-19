---
title: size
---

```cpp
size_t size() const;
```

Returns the size (count) of parameters in the Params object. This includes both local and global param sets.

## Parameters
* **returns** (size_t) The number of key/value parameter pairs that belong to the Params object


## Example

```cpp
example::example(ComponentId_t id, Params& params) : Component(id)
{
    size_t numParameters = params.size();
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