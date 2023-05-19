---
title: clear
---
```cpp
void clear();
```

Erase all key/value pairs from a Params object.

## Parameters
* **returns** none


## Example

```cpp
Params p;
p.insert("a_parameter", "a_value")
p.clear();
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```