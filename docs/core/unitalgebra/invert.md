---
title: invert
---

```cpp
UnitAlgebra& invert();
```

Take the reciprocal of the UnitAlgebra. For example "5MHz" will become "200ns".

## Parameters
* **returns** The UnitAlgebra (`this*`) after taking the reciprocal.

## Example

```cpp
SST::UnitAlgebra* num = new UnitAlgebra("5MHz");
UnitAlgebra clockPeriod = num->invert();
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
