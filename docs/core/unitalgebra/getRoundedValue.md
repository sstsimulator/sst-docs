---
title: getRoundedValue
---

```cpp
int64_t getRoundedValue() const;
```

Return the value portion of the UnitAlgebra as a signed 64-bit integer. This discards the units and returns the value in its base units (without SI prefixes). For example, calling `getRoundedValue()` on a unit algebra of `4KB` will return `4000`. 

## Parameters
* **returns** (int64_t) The value portion of the UnitAlgebra as an int64_t.

## Examples

### Example 1
```cpp
SST::UnitAlgebra* num = new UnitAlgebra("2GHz");
int64_t hz = num->getRoundedValue();
// hz = 2000000000
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
