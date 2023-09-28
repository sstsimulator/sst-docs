---
title: SST::Params
---

The Params class contains a key-value store of parameters and their values. Many SST objects (e.g., Components, SubComponents) are constructed with a Params object that contains key/value pairs given in the SST input configuration file.

## Parameter Types
Internally, parameter keys and values are stored as strings. Accessors such as [`find`](find), [`find_array`](find_array), [`find_set`](find_set), and [`find_map`](find_map) are templated with the type a parameter value should be interpreted as. Valid types include basic numeric types, including bool, and strings. Additionally, any class that contains a constructor which takes a single string can be used.

## Global and Local Params
SST has a construct called *global params*. These are shared parameter sets that are assigned to multiple objects. Sharing identical parameters reduces memory overhead during the construction of large simulations. Each Params object accordingly has a set of *local* params as well as a set of *global* params. The *global* params are empty unless global params were explicitly added to an object in the SST input configuration file. In general, the Params class seamlessly handles both sets as if they were a single set. In cases of a given parameter key existing in both sets, the local parameter takes precedence. In a few cases however, the behavior is slightly different than one might expect. These cases are noted in the function descriptions.

## Typedefs
Params objects have two typedefs that are used through the classes. They are as follows. In this documentation we have replaced `key_type` with `std::string` for clarity, but `key_type` is used in the header file. `KeyCompare` is a string comparison function.
```cpp
typedef std::string key_type;   /* Type of a key (string) */
typedef std::set<key_type, KeyCompare> keySet_t;    /* Type of a set of keys */
```

:::danger
Params objects should only be used for simulation construction and initialization. A Params object should **not** be used as part of an event as serialization of Params objects only works correctly as part of ConfigGraph serialization.
:::

## Header
The base class for Params resides in `sst-core/src/sst/core/params.h`, however the class is available through the (Sub)Component API headers.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
