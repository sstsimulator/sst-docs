---
title: SST_ELI_REGISTER_MODULE
sidebar_label: Module
---

```cpp
SST_ELI_REGISTER_MODULE(class_name, "library", "name", 
    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", "api_class_name")
```

:::caution
This macro is deprecated to enable a signature change. Use [`SST_ELI_REGISTER_MODULE_DERIVED`](sst_eli_register_module_derived) instead. `SST_ELI_REGISTER_MODULE_DERIVED` uses the new signature for the macro and `SST_ELI_REGISTER_MODULE` will be reintroduced in a future SST release with the new signature. 
:::

Modules previously used this macro to register themselves with the SST Core. This macro does not support ELI inheritance.

:::info Important
This macro must reside in a `public` section of the Module's header file.
:::


## Parameters
* **class_name** (class) The name of the Module class. This is not a string.
* **library** (string) The name of the library that this Module belongs to. If the library name does not exist, it will be created.
* **name** (string) The name that will be used to instantiate this Module in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the Module will be `library.name`.
* **SST_ELI_ELEMENT_VERSION(major, minorX, minorY)** This is a macro that specifies the version of a Module. `major`, `minorX`, and `minorY` are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.
* **description** (string) A description of the module
* **api_class_name** (string) The fully qualified name of the module's API class as a string.

## Header
```cpp
#include <src/sst/module.h>
```