---
title: SST_ELI_REGISTER_SUBCOMPONENT
sidebar_label: Register SubComponent
---

```cpp
SST_ELI_REGISTER_SUBCOMPONENT(class_name, "library", "name" , SST_ELI_ELEMENT_VERSION(X, Y, Z), "description", interface)
// Alternative name for the same macro. The macro above is preferred.
SST_ELI_REGISTER_SUBCOMPONENT_DERIVED(class_name, "library", "name", SST_ELI_ELEMENT_VERSION(X, Y, Z), "description", interface)
```

All SubComponents must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the subcomponent as "library.name". The version, description, and category are displayed by sst-info to document the purpose and version of the SubComponent. The interface declares which SubComponent API this subcomponent implements which is used to check compatibility with SubComponent slots. The interface must also be registered with SST using the `SST_ELI_REGISTER_SUBCOMPONENT_API` macro.

:::info Important
This macro must reside in a `public` section of the SubComponent's header file.
:::


## Parameters

* **class_name** (class) The name of the SubComponent class. This is not a string.
* **library** (string) The name of the library that this SubComponent belongs to. If the library name does not exist, it will be created.
* **name** (string) The name that will be used to instantiate this SubComponent in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the SubComponent will be `library.name`.
* **SST_ELI_ELEMENT_VERSION(X, Y, Z)** This is a macro that specifies the version of a SubComponent. `X`, `Y`, and `Z` are integers that form a version number X.Y.Z. For example: `SST_ELI_ELEMENT_VERSION(3, 0, 9)` yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.
* **description** (string) A description of the SubComponent.
* **interface** (fully qualified class name) This is the API that the SubComponent impelements.

## Examples

### Example 1
```cpp
// Register this subcomponent with SST and tell SST that it implements the 'basicSubComponentAPI' API
SST_ELI_REGISTER_SUBCOMPONENT(
    basicSubComponentIncrement,     // Class name
    "simpleElementExample",         // Library name, the 'lib' in SST's lib.name format
    "basicSubComponentIncrement",   // Name used to refer to this subcomponent, the 'name' in SST's lib.name format
    SST_ELI_ELEMENT_VERSION(1,0,0), // A version number
    "SubComponent that increments a value", // Description
    SST::simpleElementExample::basicSubComponentAPI // Fully qualified name of the API this subcomponent implements
                                                    // A subcomponent can implment an API from any library
)
```
