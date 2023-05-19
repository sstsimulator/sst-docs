---
title: SST_ELI_REGISTER_MODULE_DERIVED_API
sidebar_label: Module Derived API
---

```cpp
SST_ELI_REGISTER_MODULE_DERIVED_API(class_name, parent_class_name)
```

If a module API inherits from another module API, the "derived" or child API should use this macro to register itself. Modules that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.

:::info Important
This macro must reside in a `public` section of the module API's header file.
:::

## Parameters
* **class_name** (class) The fully qualified name of the calling class. This is not a string.
* **parent_class_name** (class) The fully qualified name of the parent class. This API should also be registered with the SST Core.

## Example

In this example, AModuleAPI is a Module API class. AMoreSpecificModuleAPI is another Module API class that inherits from AModuleAPI. AnActualModule is an SST Module that inherits from AMoreSpecificModuleAPI. The module inherits the parameters from both its parent classes.

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

class AMoreSpecificModuleAPI : public SST::AModuleAPI
{
public:
//highlight-next-line
    SST_ELI_REGISTER_MODULE_DERIVED_API(SST::AMoreSpecificModuleAPI, SST::AModuleAPI)

    SST_ELI_DOCUMENT_PARAMS(
      { "name", "A name for this module" }
    )

    /* Rest of class */
};

class AnActualModule : public SST::AMoreSpecificModuleAPI
{
public:

    SST_ELI_REGISTER_MODULE(
        AnActualModule,                     // Module class
        "exampleLibrary",                   // Element library (for Python/library lookup)
        "mymodule",                         // Module name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)
        "Example of ELI inheritance",       // Description
        SST::AMoreSpecificModuleAPI         // Module API
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