---
title: operator=
---
```cpp
Params& operator=(const Params& old);
```

Assignment operator. Copies a Params object, including any references to global parameter sets.

## Parameters
* **old** (Params) Parameters to copy
* **returns** (Params) Copied parameters


## Examples

### Example 1
```cpp
example::example(ComponentId_t id, Params& params) : Component(id)
{
    local_copy_of_params = params;
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