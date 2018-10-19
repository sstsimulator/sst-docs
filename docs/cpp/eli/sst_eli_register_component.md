---
id: sst_eli_register_component
title: SST_ELI_REGISTER_COMPONENT
---
## Fully Qualified Name
```cpp
#define SST_ELI_REGISTER_COMPONENT(cls,lib,name,version,desc,cat)
```

### Remarks

  This is placed in the public section of a .h to register the component with SST.

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

**CLASS_NAME** - This is the class itself and not just the class name.

**ELEMENT_LIBRARY** - The name of the element library the component belongs to. This should match the first parameter passed to sst-register in the [makefile](guides/files/basics_makefile.md).

**CLASS_NAME_STRING** - A string representation of the class name.

**SST_ELI_ELEMENT_VERSION( 1, 0, 0 )** - A version in the form SST_ELI_ELEMENT_VERSION( [major], [minor], [revision/build] ).

**DESCRIPTION** - A description of the component.

**CATEGORY** - The category for the component. One of:

- COMPONENT_CATEGORY_UNCATEGORIZED
- COMPONENT_CATEGORY_PROCESSOR
- COMPONENT_CATEGORY_MEMORY
- COMPONENT_CATEGORY_NETWORK
- COMPONENT_CATEGORY_SYSTEM

## Examples

### Example 1
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

- [Basics: Header (.h) Files](guides/files/basics_header_files.md)
- [Basics: Makefile](guides/files/basics_makefile.md)