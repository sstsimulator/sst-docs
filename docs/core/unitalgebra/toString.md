---
title: toString
---

```cpp
std::string toString() const;
```

Return a string representation of the UnitAlgebra.

## Parameters
* **returns** (std::string) A string of the UnitAlgebra.

## Examples

### Example 1
```cpp

UnitAlgebra ua("1KiB");

std::string ua_string = ua.toString();
// ua_string = "1024B"
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
