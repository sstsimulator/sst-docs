---
title: setRank
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->
Sets the rank the Component should be assigned to. This information is only used if the partitioner is set to `sst.self`. This function is only available to Components. 


## Syntax
```python
component.setRank(mpi_rank, thread=0)
```

## Parameters
* **mpi_rank** (type: int) MPI rank the Component should be assigned to.
* **thread** (type: int) Thread the Component should be assigned to.
* **returns** none


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
component0.setRank(1,2) # Assign to rank 1, thread 2
```

## Import
```python
import sst
```
