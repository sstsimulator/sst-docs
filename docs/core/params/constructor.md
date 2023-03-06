---
title: constructor
---

```cpp
// Create a new empty Params object
Params();
// Create a copy of an existing Params object
Params(const Params& old);
```

Create a new Params object, either empty or copying from an existing set.

## Parameters
* **old** (Params) An existing set of parameters to duplicate.

## Examples

### Example 1
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSubComponent_component.cc --->
```cpp
SST::Params params;
params.insert("amount", "1");
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```
