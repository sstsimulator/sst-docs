---
title: precision
---

Returns a string of the UnitAlgebra with the option of specifying how many digits to round to.

## Syntax
```python
str_value = ua.precision()
str_value = ua.precision(digits)
```
## Parameters
* **digits** (type: int) optional, number of digits to round to. Default is 6. If `digits <= 0`, no rounding is performed.
* **returns** a string representation of the UnitAlgebra

## Example

```python
from sst import UnitAlgebra

ua = UnitAlgebra("1MiB")
print("Full precision ", ua)
print("Precision(4) ", ua.precision(4))
```
```sh title="Output"
Full precision  104857600 B
Precision(4)  1.049e+08 B
```

## Import
```python
from sst import UnitAlgebra
```