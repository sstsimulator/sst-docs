---
title: operator+=
---

```cpp
UnitAlgebra& operator+=(const UnitAlgebra& v);
template <typename T> UnitAlgebra& operator+= (const T& v);
```

Add something to this UnitAlgebra. If the argument is a UnitAlgebra and the units do not match, an error will occur. Otherwise, if the value is unitless (e.g., an `int`), it will be added to the value of this UnitAlgebra.

## Parameters
* **v** (UnitAlgebra) value to add.
* **v** (typename T) value to add
* **returns** (UnitAlgebra&) This UnitAlgebra after the addition operation.

## Examples

### Example 1
```cpp
SST::UnitAlgebra num0("3s");
SST::UnitAlgebra num1("4s");
num0 += num1;
// num0 = 7s
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
