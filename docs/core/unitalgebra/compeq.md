---
title: operator==
---

```cpp
bool operator==(const UnitAlgebra& v) const;
```

Compare if this object is equal to the argument `v`.

## Parameters
* **v** (UnitAlgebra) Object to compare to  
* **returns** (bool) Whether this object is equal to the argument.

## Example

```cpp
SST::UnitAlgebra* num0 = new UnitAlgebra("3bps");
SST::UnitAlgebra* num1 = new UnitAlgebra("3b/s");

sst_assert(num0 == num1, CALL_INFO, -1, "Error: These really should be the same!!");
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
