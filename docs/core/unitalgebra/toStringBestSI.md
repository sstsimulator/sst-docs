---
title: toStringBestSI
---

```cpp
std::string toStringBestSI(int32_t precision = 6) const;
```

Return a string representation of the UnitAlgebra and scale the value to a logical one using SI units. For example, if the UnitAlgebra is "1000 Hz", the function returns "1 KHz". This function uses decimal SI prefixes so "4096 B" will be printed as "4.096 KB".


## Parameters
* **precision** (int32_t) Number of digits to round output to. If `precision <= 0`, does not round.
* **returns** (std::string) A string of the UnitAlgebra.

## Example

```cpp
UnitAlgebra ua("1000B");

std::string ua_string = ua.toStringBestSI();
// ua_string = "1 KB"
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```