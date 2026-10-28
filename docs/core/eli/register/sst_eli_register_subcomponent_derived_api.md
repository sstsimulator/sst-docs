---
title: SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API
sidebar_label: SubComponent Derived API
---


```cpp
SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API(class_name, parent_class_name)
SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API(class_name, parent_class_name, ...)
```

If a subcomponent API inherits from another subcomponent API, the "derived" or child API should use this macro to register itself. SubComponents that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.

:::info Important
This macro must reside in a `public` section of the SubComponent API's header file.
:::

## Parameters
* **class_name** (class) The fully qualified name of the calling class. This is not a string.
* **parent_class_name** (class) The fully qualified name of the parent class. This API should also be registered with the SST Core.
* **...** (types, optional) Additional constructor argument types, after the required `SST::ComponentId_t` and `SST::Params&`, that every SubComponent implementing this API must accept. Loaders pass the values as the trailing `args` of [`loadUserSubComponent`](../../component/load/loadUserSubComponent) or [`loadAnonymousSubComponent`](../../component/load/loadAnonymousSubComponent). For example, `SST_ELI_REGISTER_SUBCOMPONENT_API(SST::Merlin::Topology, int, int, int)` requires constructors of the form `(ComponentId_t id, Params& params, int, int, int)`. The derived API does not inherit the parent API's extra argument types; it declares its own list. A SubComponent is also registered under the parent API only if it is constructible with the parent's argument list as well.

## Example

In this example, ASubComponentAPI is a SubComponent API class. AMoreSpecificSubComponentAPI is another SubComponent API class that inherits from ASubComponentAPI. AnActualSubComponent is an SST SubComponent that inherits from AMoreSpecificSubComponentAPI. The subcomponent inherits the parameters from both its parent classes.

```cpp
#include <sst/core/subcomponent.h>

namespace SST {
class ASubComponentAPI : public SST::SubComponent
{
public:
    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::ASubComponentAPI)

    SST_ELI_DOCUMENT_PARAMS(
        { "count", "The count of something", 20 }
    )

    /* Rest of class here */
};

class AMoreSpecificSubComponentAPI : public SST::ASubComponentAPI
{
public:
//highlight-next-line
    SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API(SST::AMoreSpecificSubComponentAPI, SST::ASubComponentAPI)

    SST_ELI_DOCUMENT_PARAMS(
      { "name", "A name for this subcomponent" }
    )

    /* Rest of class */
};

class AnActualSubComponent : public SST::AMoreSpecificSubComponentAPI
{
public:

    SST_ELI_REGISTER_SUBCOMPONENT(
        AnActualSubComponent,               // SubComponent class
        "exampleLibrary",                   // Element library (for Python/library lookup)
        "mysub",                            // SubComponent name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)
        "Example of ELI inheritance",       // Description
        SST::AMoreSpecificSubComponentAPI   // SubComponent API
    )

    /* The subcomponent 'exampleLibrary.mysub' will have two parameters: 'count' and 'name' */

/* Rest of class */
};
} /* End namespace SST */
```


## Header
```cpp
#include <sst/core/subcomponent.h>
```