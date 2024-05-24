---
title: invert
---

Inverts a UnitAlgebra.

## Syntax
```python
inv = ua.invert()
```

## Parameters
* **returns** inverted UnitAlgebra

## Example

```python
from sst import UnitAlgebra

ua = UnitAlgebra("1GHz")
print("A clock frequency of %s has a cycle time of %s"%(ua.bestSI(), ua.invert().bestSI()) )
```
```sh title = "Output"
A clock frequency of 1 GHz has a cycle time of 1 ns
```

## Import
```python
from sst import UnitAlgebra
```