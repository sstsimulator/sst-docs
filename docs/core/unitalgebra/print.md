---
title: print
---

```cpp
void print(std::ostream& stream);
```

Print the UnitAlgebra to the argument stream.

## Parameters
* **stream** (std::ostream&) Where to print the UnitAlgebra
* **returns** none

## Example

```cpp
SST::UnitAlgebra num("4KiB");
num.print(std::stdout);
// Print as '4096 B'
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
