---
title: getDefaultObject
---

```cpp
static Output& getDefaultObject();
```

Returns the simulation's default output object.

## Parameters
* **returns** (Output) The SST Core's default output object


## Example

```cpp
Output sst_output = component_output->getDefaultObject();
```

## Header
```cpp
#include <sst/core/output.h>
```
