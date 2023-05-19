---
title: operator-=
---

```cpp
UnitAlgebra& operator-=(const UnitAlgebra& v);
template <typename T> UnitAlgebra& operator-= (const T& v);
```

Subtract something from this UnitAlgebra. If the argument is a UnitAlgebra and the units do not match, an error will occur. Otherwise, if the value is unitless (e.g., an `int`), it will be subtracted from the value of this UnitAlgebra.

## Parameters
* **v** (UnitAlgebra) value to subtract
* **v** (typename T) value to subtract
* **returns** (UnitAlgebra&) This UnitAlgebra after the subtraction operation.

## Example

```cpp
SST::UnitAlgebra num0("8s");
SST::UnitAlgebra num1("5s");
num0 -= num1;
// num0 = 3s
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
