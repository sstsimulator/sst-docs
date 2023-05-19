---
title: getValue
---

```cpp
sst_big_num getValue() const;
```

Return the value portion of the UnitAlgebra as an sst_big_num, which is a decimal fixed point format used internally in SST. This discards the units and returns the value in its base units (without SI prefixes). 

## Parameters
* **returns** (sst_big_num) The value portion of the UnitAlgebra as an int64_t.

## Example

```cpp
SST::UnitAlgebra* num = new UnitAlgebra("2GHz");
sst_big_num hz = num->getRoundedValue();
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```