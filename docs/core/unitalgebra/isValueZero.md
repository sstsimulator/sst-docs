---
title: isValueZero
---

```cpp
bool isValueZero() const;
```

Return whether the value portion of the UnitAlgebra is zero.

## Parameters
* **returns** (bool) Whether the value of the UnitAlgebra is zero.

## Examples

### Example 1
```cpp
SST::UnitAlgebra* num = new UnitAlgebra("0hz");
bool hasFrequency = num->isValueZero();
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
