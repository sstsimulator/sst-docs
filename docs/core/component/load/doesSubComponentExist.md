---
title: doesSubComponentExist
---

```cpp
bool doesSubComponentExist(const std::string& type);
```
*Availability:* Component, SubComponent, ComponentExtension

Determine whether a SubComponent of the specified type is known to SST.

## Parameters
* **type** (string) Type of SST SubComponent in `lib.type` format
* **returns** (bool) True if SubComponent exists, otherwise false

## Example

```cpp 
if (doesSubComponentExist("simpleElementExample.basicSubComponentIncrement")) {
    // load this one
} else {
    // maybe error, or load a default that we know exists instead
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```