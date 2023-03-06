---
title: hasUnits
---

```cpp
bool hasUnits(const std::string& units) const;
```

Return whether the UnitAlgebra has the units specified in the parameter. 

## Parameters
* **units** (std::string) Units to compare against
* **returns** Whether the UnitAlgebra has the specified units.

## Examples

### Example 1
```cpp
SST::UnitAlgebra* num = new UnitAlgebra("4MB/s");

bool isBandwidth = num->hasUnits("B/s");
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
