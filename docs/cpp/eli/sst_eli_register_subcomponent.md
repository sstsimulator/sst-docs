---
id: sst_eli_register_subcomponent
title: SST_ELI_REGISTER_SUBCOMPONENT
---
## Fully Qualified Name
```cpp
#define SST_ELI_REGISTER_SUBCOMPONENT(cls,lib,name,version,desc,interface)
```

### Remarks

 This is placed in the public section of a .h to register the subcomponent with SST.
 
## Requirements

```cpp
#include <sst/core/elementinfo.h>
```

## Syntax

```cpp
SST_ELI_REGISTER_SUBCOMPONENT(
    CLASS_NAME,
    "ELEMENT_LIBRARY",
    "CLASS_NAME_STRING", 
    SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),
    "DESCRIPTION",
    "SUB_COMPONENT_SLOT" 
)
```

## Parameters

**CLASS_NAME** - The name of the class without quotes.

**ELEMENT_LIBRARY** - The name of the library name

**CLASS_NAME_STRING** - the class name as a string

**SST_ELI_ELEMENT_VERSION( 1, 0, 0 )** - A version in the form SST_ELI_ELEMENT_VERSION( [major], [minor], [revision/build] )

**DESCRIPTION** - A description of this subcomponent

**SUB_COMPONENT_SLOT** - The class/interface the a subcomponent slot must have to use this subcomponent

## Examples

### Example 1
```cpp
SST_ELI_REGISTER_SUBCOMPONENT(
    bay, // class
    "exC_carWash", // element library
    "bay", // subcomponent
    SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),
    "Bay subcomponent for the carwash",
    "SST::exC_carWash::carWashBay" // subcomponent slot
)
```

## See Also

- [Link_Name](TBA)
- [Link_Name](TBA)