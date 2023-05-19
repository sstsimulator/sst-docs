---
title: SST_ELI_REGISTER_COMPONENT_BASE
sidebar_label: Component Base
---

```cpp
SST_ELI_REGISTER_COMPONENT_BASE(class_name)
```

This macro enables a class that inherits directly from SST::Component but is not itself a Component (e.g., the class is intended to be a base class for other component classes) to register ELI information and have that information inherited by its child component classes.

If a class inherits from a class using this macro and that class is an SST Component, it should use the regular [`SST_ELI_REGISTER_COMPONENT`](sst_eli_register_component) call. If the inheriting class is also not intended to be an SST Component but rather is an intermediate class, it should use the [`SST_ELI_REGISTER_COMPONENT_DERIVED_BASE`](sst_eli_register_component_derived_base) macro.

:::info Important
This macro must reside in a `public` section of the class's header file.
:::


## Parameters

* **class_name** (class) The fully qualified name of the class calling the macro. This is not a string.

## Example

In this example, ComponentBaseClass is not itself an SST Component but it has a parameter to take a clock frequency. Its child class, MyComponent, which is an SST Component, will also have the parameter "clockFrequency" because the ELI information will be inherited.

```cpp
namespace SST {
class ComponentBaseClass : public SST::Component
{
public:
    SST_ELI_REGISTER_COMPONENT_BASE(SST::ComponentBaseClass)

    SST_ELI_DOCUMENT_PARAMS(
        { "clockFrequency", "The clock frequency for the component", NULL }
    )

    /* Rest of class here */
};

class MyComponent : public SST::ComponentBaseClass
{
public:

    SST_ELI_REGISTER_COMPONENT(
        MyComponent,                        // Component class
        "exampleLibrary",                   // Component library (for Python/library lookup)
        "mycomponent",                      // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)
        "Example of ELI inheritance",       // Description
        COMPONENT_CATEGORY_UNCATEGORIZED    // Category
    )

/* Rest of class */
};
} /* End namespace SST */
```

## Header
```cpp
#include <src/sst/component.h>
```