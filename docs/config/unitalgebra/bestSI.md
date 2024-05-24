---
title: bestSI
---

Returns a string of the UnitAlgebra with reasonable SI units. For example, returns "1KHz" instead of "1000Hz".

## Syntax
```python
str_value = ua.bestSI()
str_value = ua.bestSI(digits)
```
## Parameters
* **digits** (type: int) optional, number of digits to round to. Default is 6. If `digits <= 0`, no rounding is performed.
* **returns** string representation of the unit algebra with SI units

## Example

```python
from sst import UnitAlgebra

ua = UnitAlgebra("100KHz")
print("String ", ua)
print("BestSI ", ua.bestSI())
```
```sh title="Output"
String  100000 Hz
BestSI  100 KHz
```

## Import
```python
from sst import UnitAlgebra
```