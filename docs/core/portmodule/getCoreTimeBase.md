---
title: getCoreTimeBase
---

```cpp
UnitAlgebra getCoreTimeBase() const;
```
Returns the timebase used by the core. Unless modified in the SST input configuration, this is 1ps.

## Parameters
* **returns** (UnitAlgebra) The timebase used by the core (e.g., '1ps')


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("The core is counting time in units of %s\n", getCoreTimeBase().toStringBestSI().c_str());
```

## Header
```cpp
#include <sst/core/portModule.h>
```
