---
title: getFloatValue
---

Get the value of the UnitAlgebra as a float.

## Syntax
```python
value = ua.getFloatValue()
```
## Parameters
* **returns** the value portion of the UnitAlgebra as a float type

## Example

```python
from sst import UnitAlgebra

ua = UnitAlgebra("1.77s")
print("%f"%(ua.getFloatValue()))
```
```sh title="Output"
1.770000
```

## Import
```python
from sst import UnitAlgebra
```