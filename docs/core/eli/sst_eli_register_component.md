---
title: SST_ELI_REGISTER_COMPONENT
sidebar_label: Register Component
---

```cpp
SST_ELI_REGISTER_COMPONENT(class_name, "library", "name", 
    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", CATEGORY)
```

All components must register themselves with SST using this macro. The library and name strings provided in this macro 
will be used by SST to identify the component as "library.name". The version, description, and category are displayed 
by `sst-info` to document the purpose and version of the Component.

:::info Important
This macro must reside in a `public` section of the Component's header file.
:::


## Parameters

* **class_name** (class) The name of the Component class. This is not a string.
* **library** (string) The name of the library that this Component belongs to. If the library name does not exist, it will be created.
* **name** (string) The name that will be used to instantiate this Component in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the Component will be `library.name`.
* **SST_ELI_ELEMENT_VERSION(major, minorX, minorY)** This is a macro that specifies the version of a Component. `major`, `minorX`, and `minorY` are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.
* **description** (string) A description of the component
* **CATEGORY** (CATEGORY) One of a few built-in component categories. This is provided to help users search for components of interest. Options are:
  * COMPONENT_CATEGORY_UNCATEGORIZED
  * COMPONENT_CATEGORY_PROCESSOR
  * COMPONENT_CATEGORY_MEMORY
  * COMPONENT_CATEGORY_NETWORK
  * COMPONENT_CATEGORY_SYSTEM

## Examples

### Example 1
```cpp
class example1 : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        example1,                           // Component class
        "simpleElementExample",             // Component library (for Python/library lookup)
        "example1",                         // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)
        "Example #2, statistics & RNG",     // Description
        COMPONENT_CATEGORY_UNCATEGORIZED    // Category
    )

/* Rest of class */
};

```
