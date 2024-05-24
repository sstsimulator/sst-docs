---
title: getRoundedValue
---

Get the value of the UnitAlgebra as an integer.

## Syntax
```python
value = ua.getRoundedValue()
```

## Parameters
* **returns** the value portion of the UnitAlgebra as an integer

## Example

```python
from sst import UnitAlgebra

ua0 = UnitAlgebra("55 s")
ua1 = UnitAlgebra("55.2 s")
print("%d"%(ua0.getRoundedValue()))
print("%d"%(ua1.getRoundedValue()))
```
```sh title="Output"
55
55
```

## Import
```python
from sst import UnitAlgebra
```