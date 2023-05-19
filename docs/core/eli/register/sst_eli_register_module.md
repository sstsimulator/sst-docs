---
title: SST_ELI_REGISTER_MODULE
sidebar_label: Module
---

```cpp
SST_ELI_REGISTER_MODULE(class_name, "library", "name", 
    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", api_class_name)
```

:::caution
As of SST 13 the `api_class_name` field must be specified as a class name, not as a string. 
:::

All modules must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the macro as "library.name". The version and description are displayed by `sst-info` to document the purpose and version of the Module. The api_class_name field is used to enable ELI inheritance.

:::info Important
This macro must reside in a `public` section of the Module's header file.
:::


## Parameters

* **class_name** (class) The name of the Module class. This is not a string.
* **library** (string) The name of the library that this Module belongs to. If the library name does not exist, it will be created.
* **name** (string) The name that will be used to instantiate this Module in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the Module will be `library.name`.
* **SST_ELI_ELEMENT_VERSION(major, minorX, minorY)** This is a macro that specifies the version of a Module. `major`, `minorX`, and `minorY` are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.
* **description** (string) A description of the module
* **api_class_name** (class) The fully qualified name of the module's API class. This is not a string

## Example

### Registering a Module
In this example, AModuleAPI is a Module API class. AnActualModule is an SST Module that inherits from AModuleAPI and inherits its ELI parameter as well.

```cpp
#include <sst/core/module.h>

namespace SST {
class AModuleAPI : public SST::Module
{
public:
    SST_ELI_REGISTER_MODULE_API(SST::AModuleAPI)

    SST_ELI_DOCUMENT_PARAMS(
        { "count", "The count of something", 20 }
    )

    /* Rest of class here */
};

class AnActualModule : public SST::AModuleAPI
{
public:

    //highlight-start
    SST_ELI_REGISTER_MODULE(
        AnActualModule,                 // Module class
        "exampleLibrary",               // Element library (for Python/library lookup)
        "mymodule",                     // Module name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0), // Version of the component (not related to SST version)
        "Example of ELI inheritance",   // Description
        SST::AModuleAPI                 // Module API
    )
    //highlight-end
    
    SST_ELI_DOCUMENT_PARAMS(
      { "name", "A name for this module" }
    )

    /* The module 'exampleLibrary.mymodule' will have two parameters: 'count' and 'name' */

/* Rest of class */
};
} /* End namespace SST */
```


## Header
```cpp
#include <sst/core/module.h>
```