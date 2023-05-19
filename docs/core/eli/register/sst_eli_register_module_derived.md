---
title: SST_ELI_REGISTER_MODULE_DERIVED
sidebar_label: Module Derived
---

:::caution Deprecated
This macro is deprecated as of SST 13. Use [SST_ELI_REGISTER_MODULE](SST_ELI_REGISTER_MODULE) instead.
:::

```cpp
SST_ELI_REGISTER_MODULE_DERIVED(class_name, "library", "name", 
    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", api_class_name)
```

This macro was used temporarily to facilitate a signature change in `SST_ELI_REGISTER_MODULE` between SST 11 and 13. As of SST 13, it is deprecated and `SST_ELI_REGISTER_MODULE` uses the new signature. Any existing use of this macro can drop the `_DERVIED` in the macro name without any other change.

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

    /* SST_ELI_REGISTER_MODULE is deprecated for the moment so that we can 
     * change its signature, use SST_ELI_REGISTER_MODULE_DERIVED instead */
     //highlight-start
    SST_ELI_REGISTER_MODULE_DERIVED(
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
