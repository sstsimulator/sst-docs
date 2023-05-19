---
title: SST_ELI_CATEGORY_INFO
sidebar_label: Component Categories
---

```cpp
#define COMPONENT_CATEGORY_UNCATEGORIZED    0x00
#define COMPONENT_CATEGORY_PROCESSOR        0x01
#define COMPONENT_CATEGORY_MEMORY           0x02
#define COMPONENT_CATEGORY_NETWORK          0x04
#define COMPONENT_CATEGORY_SYSTEM           0x08
```

Component categories are a set of common categories that architectural components fall in. Each component must have a category assigned in [`SST_ELI_REGISTER_COMPONENT`](../register/sst_eli_register_component). These categories are used to help document components and are displayed when running `sst-info`. The available categories are shown above.


## Example

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
        COMPONENT_CATEGORY_UNCATEGORIZED    // Category - uncategorized because this is an example, not an architectural component
    )

/* Rest of class */
};

```

## Header
```cpp
#include <src/sst/component.h>
```
