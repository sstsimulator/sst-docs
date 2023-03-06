---
title: destructor
---
```cpp
virtual ~Params();
```

Delete a Params object.

## Parameters
* **returns** none


## Examples

### Example 1
```cpp
Params p = new Params();

delete p;
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```