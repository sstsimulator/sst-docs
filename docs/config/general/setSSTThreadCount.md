---
id: setSSTThreadCount
title: setSSTThreadCount(threads)
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the number of threads per rank for the simulation. These values can be overwritten by using \-n on the command line. 

## Syntax
```python
sst.setSSTThreadCount(threads)
```

## Parameters
* **threads** (type: int) number of threads per MPI rank to use in the simulation 
* **returns** none

## Examples

### Example 1
```python
import sst

threads = sst.setSSTThreadCount(4)
```

## Import
```python
import sst
```