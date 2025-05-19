---
title: setThreadCount
---

Sets the number of threads per rank for the simulation. These values can be overwritten by using \-n on the command line. 

## Syntax
```python
sst.setThreadCount(threads)
```

## Parameters
* **threads** (type: int) number of threads per MPI rank to use in the simulation 
* **returns** (type: int) number of threads per MPI rank prior to this function call

## Example

```python
import sst

old_thread_count = sst.setThreadCount(4)
```

## Import
```python
import sst
```