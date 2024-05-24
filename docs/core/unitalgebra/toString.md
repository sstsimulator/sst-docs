---
title: toString
---

```cpp
std::string toString(int32_t precision = 6) const;
```

Return a string representation of the UnitAlgebra.

## Parameters
* **returns** (std::string) A string of the UnitAlgebra. If `precision <= 0`, does not round.
* **precision** (int32_t) Number of digits to round output to.
## Example

```cpp

UnitAlgebra ua("1KiB");

std::string ua_string = ua.toString();
// ua_string = "1024 B"
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
