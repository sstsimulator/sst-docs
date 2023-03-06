---
title: destructor
---

```cpp
~UnitAlgebra();
```

Delete a UnitAlgebra object.

## Parameters
* **returns** none


## Examples

### Example 1
```cpp
UnitAlgebra* num = new UnitAlgebra("2Mbps");

delete num;
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
