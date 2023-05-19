---
title: SST_ELI_REGISTER_COMPONENT_DERIVED_BASE
sidebar_label: Component Derived Base
---

```cpp
SST_ELI_REGISTER_COMPONENT_DERIVED_BASE(class_name, parent_class_name)
```

This macro registers the inheritance chain for a class that does not directly inherit from SST::Component and is not itself intended to be an SST Component, but will be the base class for an SST Component. Registering these classes allows SST to identify which ELI information should be inherited by a child Component. The names provided to the macro must be the fully qualified class names. ELI documentation macros declared by this class will be inherited by child classes.

If a class inherits from a class using this macro and that class is an SST Component, it should use the regular [`SST_ELI_REGISTER_COMPONENT`](sst_eli_register_component) call. 

:::info Important
This macro must reside in a `public` section of the class's header file.
:::

## Parameters
* **class_name** (class) The fully qualified name of the calling class. This is not a string.
* **parent_class_name** (class) The fully qualified name of the parent class. This API should also be registered with teh SST Core. 

## Example

In this example, ComponentBaseClass is not itself an SST Component but it has a parameter to take a clock frequency. ComponentIntermediateClass is also not itself an SST Component but it inherits from ComponentBaseClass. ComponentIntermediateClass also adds a port to the ELI information. MyComponent is an SST Component that inherits from ComponentIntermediateClass and inherits both ComponentBaseClass's parameter and ComponentIntermediateClass's port.

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

class ComponentIntermediateClass : public SST::ComponentBaseClass
{
public:
    SST_ELI_REGISTER_COMPONENT_DERIVED_BASE(SST::ComponentIntermediateClass, SST::ComponentBaseClass)

    SST_ELI_DOCUMENT_PORTS(
      { "left_link", "Port that connects the left link", {"exampleLibrary.event" } }
    )

    /* Rest of class */
};

class MyComponent : public SST::ComponentIntermediateClass
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