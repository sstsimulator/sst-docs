---
title: registerTimeBase
---

```cpp
TimeConverter* registerTimeBase(const std::string& base, bool regAll = true);
```
*Availability:* Component, SubComponent, ComponentExtension

Create a new time base and optionally set it as the default time base for both the (sub)component and its links.


## Parameters
* **base** (string) Time base in SI units
* **regAll** (bool) Whether this time base should also be used as the (sub)component's and the (sub)component's links' default time base
* **returns** (TimeConverter*) A time converter for the new time base

## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
registerTimeBase("200ms");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
