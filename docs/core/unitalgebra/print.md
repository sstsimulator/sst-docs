---
title: print
---

```cpp
void print(std::ostream& stream, int32_t precision = 6);
```

Print the UnitAlgebra to the argument stream.

## Parameters
* **stream** (std::ostream&) Where to print the UnitAlgebra
* **precision** (int32_t) Number of digits to round output to. If `precision <= 0`, does not round.
* **returns** none

## Example

```cpp
SST::UnitAlgebra num("4KiB");
num.print(std::stdout);
```
```sh title="Output"
4096 B
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
