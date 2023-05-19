---
title: operator!=
---

```cpp
bool operator!=(const UnitAlgebra& v) const;
```

Compare if this object is not equal to the argument `v`.

## Parameters
* **v** (UnitAlgebra) Object to compare to  
* **returns** (bool) Whether this object is not equal to the argument.

## Example

```cpp
SST::UnitAlgebra* num0 = new UnitAlgebra("2bps");
SST::UnitAlgebra* num1 = new UnitAlgebra("2b");

sst_assert(num0 != num1, CALL_INFO, -1, "Error: These are not the same value, their units are different!!");
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
