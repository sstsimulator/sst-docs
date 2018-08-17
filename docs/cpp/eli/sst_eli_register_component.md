---
id: sst_eli_register_component
title: SST_ELI_REGISTER_COMPONENT
---

## Requirements

```cpp
#include <sst/core/elementinfo.h>
```

## Syntax

```cpp
SST_ELI_REGISTER_COMPONENT(
    CLASS_NAME, 
    "ELEMENT_LIBRARY",
    "CLASS_NAME_STRING",
    SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), 
    "DESCRIPTION", 
    CATEGORY
)
```

## Parameters

**CLASS_NAME** - this is the class itself and not just the class name

**ELEMENT_LIBRARY** - the name of the element library the component belongs to. This should match the first parameter passed to sst-register in the makefile.

**CLASS_NAME_STRING** - a string representation of the class name

**SST_ELI_ELEMENT_VERSION( 1, 0, 0 )** - A version in the form SST_ELI_ELEMENT_VERSION( [major], [minor], [revision/build] )

**DESCRIPTION** - a description of the component.

**CATEGORY** - the category for the component. One of:

- COMPONENT_CATEGORY_UNCATEGORIZED
- COMPONENT_CATEGORY_PROCESSOR
- COMPONENT_CATEGORY_MEMORY
- COMPONENT_CATEGORY_NETWORK
- COMPONENT_CATEGORY_SYSTEM

### Remarks

  This is placed in the public section of a .h to register the component with SST.

### Examples

```cpp
public:
  // ... SNIP ...  public declarations
  // Register the component
  SST_ELI_REGISTER_COMPONENT(
  carGenerator, // class
  "exC_carWash", // element library
  "carGenerator", // component
  SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version
  "Car Generator for the carwash", //description
  COMPONENT_CATEGORY_UNCATEGORIZED //category
)
```

## See Also

- [Basics: Header (.h) Files](gettingStarted/basics_header_files.md)
- [Basics: Makefile](gettingStarted/basics_makefile.md)