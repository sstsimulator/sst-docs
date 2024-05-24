---
title: isValueZero
---

Returns whether the value portion of the UnitAlgebra is 0.

## Syntax
```python
ua.isValueZero()
```
## Parameters
* **returns** a boolean indicating whether the UnitAlgebra is 0 or not

## Example

```python
from sst import UnitAlgebra

ua0 = UnitAlgebra("0us")
ua1 = ua0 + UnitAlgebra("1ns")

print("'%s'.isValueZero() = %r"%(ua0.bestSI(), ua0.isValueZero()))
print("'%s'.isValueZero() = %r"%(ua1.bestSI(), ua1.isValueZero()))
```
```sh title="Output"
'0 s'.isValueZero() = True
'1 ns'.isValueZero() = False
```

## Import
```python
from sst import UnitAlgebra
```