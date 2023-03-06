---
title: SST_ELI_ELEMENT_VERSION
sidebar_label: Versioning
---

```cpp
SST_ELI_ELEMENT_VERSION(majorX, minorY, minorZ)
```

This macro is used inside some of the SST registration macros to assign a version to SST objects. The version is *not* checked by SST and does not need to match the SST version. The macro is provided to assist element library developers with versioning and managing compatibility between libraries. The macro takes a triple of numbers which are converted to an X.Y.Z version number.

## Parameters
* **majorX** (int) The major version number
* **minorY** (int) The minor version number
* **minorZ** (int) An additional minor version number

## Examples

### Example 1
```cpp
class example1 : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        example1,                           
        "simpleElementExample",             
        "example1",                         
        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component will be "1.0.0"
        "Example #2, statistics & RNG",     
        COMPONENT_CATEGORY_UNCATEGORIZED    
    )

/* Rest of class */
};

```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/module.h> // or
#include <sst/core/profiletool.h> // or
#include <sst/core/module/element_python.h>
```

