---
title: operator<
---

```cpp
bool operator<(const UnitAlgebra& v) const;
```

Compare if this object is less than to the argument `v`.

## Parameters
* **v** (UnitAlgebra) Object to compare to  
* **returns** (bool) Whether this object is less than the argument.
* **throws** *NonMatchingUnits* If the objects' units do not match.

## Example

```cpp
SST::UnitAlgebra* num0 = new UnitAlgebra("1bps");
SST::UnitAlgebra* num1 = new UnitAlgebra("2b/s");

sst_assert(num0 < num1, CALL_INFO, -1, "Error: num0 is definitely < num1!!");
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
