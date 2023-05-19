---
title: operator=
---

```cpp
UnitAlgebra& operator=(const std::string& v);
```

Assignment operator that takes a string instead of a UnitAlgebra.

## Parameters
* **v** (std::string) New value and units as a string
* **returns** (UnitAlgebra&) The updated UnitAlgebra

## Example

```cpp
SST::UnitAlgebra num0("3s");
num0 = "3ms";
// num0 = 73ms
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
