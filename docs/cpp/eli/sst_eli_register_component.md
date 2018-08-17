---
id: sst_eli_register_component
title: SST_ELI_REGISTER_COMPONENT
---
<!---
Expected path/category (can I just use folders or is it more involved): 
  SST Core > ELI > [this page]
--->

## Requirements

```cpp
#include <sst/core/elementinfo.h>
```

## Syntax

<!--- java used here since it looked liked the highlight was a bit better (in VS code), would need to test and see what looks best --->

```cpp
SST_ELI_REGISTER_COMPONENT(
    carGenerator, // class (not just the class name)
    "exC_carWash", // element library
    "carGenerator", // component
    SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version
    "Car Generator for the carwash", //description
    COMPONENT_CATEGORY_UNCATEGORIZED //category
)
```

## Parameters

**class** - this is the class itself and not just the class name

**element library** - the name of the element library the component belongs to. This should match the first parameter passed to sst-register in the makefile.

**component** - a string representation of the class name

**version** - the version of component in the form SST_ELI_ELEMENT_VERSION( [major], [minor], [revision/build] )

**description** - a description of the component.

**category** - the category for the component. One of:

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