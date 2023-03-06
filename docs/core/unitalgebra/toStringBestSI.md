---
title: toStringBestSI
---

```cpp
std::string toStringBestSI() const;
```

Return a string representation of the UnitAlgebra and scale the value to a logical one using SI units. For example, if the UnitAlgebra is "4096B", print as "4KiB".


## Parameters
* **returns** (std::string) A string of the UnitAlgebra.

## Examples

### Example 1
```cpp

UnitAlgebra ua("1024B");

std::string ua_string = ua.toStringBestSI();
// ua_string = "1KiB"
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```