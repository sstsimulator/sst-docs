---
title: printWithBestSI
---

```cpp
void printWithBestSI(std::ostream& stream);
```

Print the UnitAlgebra to the argument stream and scale the value to a logical one using SI units. For example, if the UnitAlgebra is "4096B", print as "4KiB".

## Parameters
* **stream** (std::ostream&) Where to print the UnitAlgebra
* **returns** none

## Example

```cpp
SST::UnitAlgebra num("3GiB");
num.printWithBestSI(std::stdout);
// Print as '3GiB'
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
