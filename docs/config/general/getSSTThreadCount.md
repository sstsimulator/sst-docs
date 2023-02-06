---
id: getSSTThreadCount
title: getSSTThreadCount
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Returns the threads per rank specified for the simulation.

## Syntax
```python
sst.getSSTThreadCount()
```

## Parameters
* **returns** number of threads per MPI rank in the simulation 

## Examples

### Example 1
```python
import sst

threads = sst.getSSTThreadCount()
```

## Import
```python
import sst
```