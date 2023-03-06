---
title: insert
---
```cpp
void insert(const std::string& key ,const std::string& value, bool overwrite = true);
void insert(const Params& params);
```

Insert a key/value pair or a set of parameters into this Params object. In the case of inserting a Params object, global parameters will be copied into the global params section of this Params object. All other inserted params will be inserted into the local params. The key/value variant of this function optionally takes a parameter to indicate whether the new key/value should overwrite an existing one if it already exists in the Params object. If `overwrite=False` and the parameter exists in the Params object already, this function will have no effect.

## Parameters
* **key** (std::string) New key to add to the Params
* **value** (std::string) New value set the new key to in the Params
* **overwrite** (bool) Whether this insert should overwrite an existing key in the Params. By default, the parameter is True. 
* **params** (Params) A set of params to add to the insert function. Inserted params that match an existing key will overwrite the existing one.
* **returns** none


## Examples

### Example 1
```cpp
Params p;
p.insert("frequency", "2MHz"); 
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```