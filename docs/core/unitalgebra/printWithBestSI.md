---
title: printWithBestSI
---

```cpp
void printWithBestSI(std::ostream& stream, int32_t precision = 6);
```

Print the UnitAlgebra to the argument stream and scale the value to a logical one using SI units. For example, if the UnitAlgebra is "4000 Hz", print as "4 KHz". This function uses decimal SI prefixes so "4096 B" will be printed as "4.096 KB".

## Parameters
* **stream** (std::ostream&) Where to print the UnitAlgebra
* **precision** (int32_t) Number of digits to round output to. If `precision <= 0`, does not round.
* **returns** none

## Example

```cpp
SST::UnitAlgebra num("3GB");
num.printWithBestSI(std::stdout);
```
```sh title="Output"
3 GB
```
## Header
```cpp
#include <sst/core/unitalgebra.h>
```
