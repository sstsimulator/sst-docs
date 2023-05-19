---
title: operator/=
---

```cpp
UnitAlgebra& operator/=(const UnitAlgebra& v);
template <typename T> UnitAlgebra& operator/= (const T& v);
```

Divide this UnitAlgebra by the argument. The units will also be divided if the argument is a UnitAlgebra, otherwise only the value is divided.

## Parameters
* **v** (UnitAlgebra) value to divide by
* **v** (typename T) value to divide by
* **returns** (UnitAlgebra&) This UnitAlgebra after the division operation.

## Example

```cpp
SST::UnitAlgebra num0("100B");
SST::UnitAlgebra num1("50s");
num0 /= num1;
// num0 = 2B/s
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
