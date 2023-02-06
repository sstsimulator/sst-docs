---
title: getCoreTimeBase
---

```cpp
UnitAlgebra getCoreTimeBase() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the timebase used by the core. Unless modified in the SST input configuration, this is 1ps.

## Parameters
* **returns** (UnitAlgebra) The timebase used by the core (e.g., '1ps')


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
output.output("The core is counting time in units of %s\n", getCoreTimeBase().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
