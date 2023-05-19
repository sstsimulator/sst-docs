---
title: SST_ELI_REGISTER_MODULE_API
sidebar_label: Module API
---

```cpp
SST_ELI_REGISTER_MODULE_API(class_name)
```

A module API defines the API for a particular variety of SST Modules. This macro is used to register a class that defines a module API with the SST Core. This class should also inherit from `SST::Module`. If instead this class inherits from another Module API, the [`SST_ELI_REGISTER_MODULE_DERIVED_API`](sst_eli_register_module_derived_api). A class may be both a module API and a module itself and include both registration macros. Modules that inherit from the registered API will also inherit any ELI documented by the API class.

:::info Important
This macro must reside in a `public` section of the module API's header file.
:::


## Parameters

* **class_name** (class) The name of the Module API class. This is not a string.

## Example

```cpp
class example1 : public SST::Module
{
public:

    SST_ELI_REGISTER_MODULE_API(SST::example1)

    /* Rest of class */
};
```

## Header
```cpp
#include <sst/core/module.h>
```