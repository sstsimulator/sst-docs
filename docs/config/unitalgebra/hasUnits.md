---
title: hasUnits
---

Returns whether the UnitAlgebra has the specified units.

## Syntax
```python
ua.hasUnits(units)
```

## Parameters
* **units** (type: str) a string containing the units to look for
* **returns** a boolean indicating whether the units given match the UnitAlgebra's units

## Example

```python
from sst import UnitAlgebra

ua1 = UnitAlgebra("200TB/s")

print("'%s'.hasUnits(\"B/s\") = %r"%(ua1.bestSI(), ua1.hasUnits("B/s")))
print("'%s'.hasUnits(\"TB/s\") = %r"%(ua1.bestSI(), ua1.hasUnits("TB/s")))
print("'%s'.hasUnits(\"B\") = %r"%(ua1.bestSI(), ua1.hasUnits("B")))
```
```sh title="Output"
'200TB/s'.hasUnits("B/s") = True
'200TB/s'.hasUnits("TB/s") = True
'200TB/s'.hasUnits("B") = False
```

## Import
```python
from sst import UnitAlgebra
```