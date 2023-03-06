---
title: getDoubleValue
---

```cpp
double getDoubleValue() const;
```

Return the value portion of the UnitAlgebra as a double. This discards the units and returns the value in its base units (without SI prefixes). For example, calling `getDoubleValue()` on a unit algebra of `4KB` will return `4000.0`. 

## Parameters
* **returns** (double) The value portion of the UnitAlgebra as a double.

## Examples

### Example 1
```cpp
SST::UnitAlgebra* num = new UnitAlgebra("5ms");
double sec = num->getDoubleValue();
// sec = 0.005
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
