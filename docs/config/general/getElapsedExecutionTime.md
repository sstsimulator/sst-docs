---
title: getElapsedExecutionTime
---

Returns the real (wall) elapsed time since simulation start. The value is returned as a UnitAlgebra and is not precise enough for fine-grained timing analysis. For that, use the built-in timing module.

## Syntax
```python
sst.getElapsedExecutionTime()
```

## Parameters
* **returns** (type: UnitAlgebra) amount of time that elapsed since simulation started

## Example

```python
import sst

sim_time = sst.getElapsedExecutionTime()
```

## Import
```python
import sst
```