---
title: operator*=
---

```cpp
UnitAlgebra& operator*=(const UnitAlgebra& v);
template <typename T> UnitAlgebra& operator*= (const T& v);
```

Multiply this UnitAlgebra by the argument. The units will also be multiplied if the argument is a UnitAlgebra, otherwise only the value is multiplied.

## Parameters
* **v** (UnitAlgebra) value to multiply by.
* **v** (typename T) value to multiply by
* **returns** (UnitAlgebra&) This UnitAlgebra after the multiplication operation.

## Examples

### Example 1
```cpp
// Convert from bytes (B) to bits (b)
SST::UnitAlgebra num0("100B");
num0 *= UnitAlgebra("8b/B");
// num0 = 800b
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
