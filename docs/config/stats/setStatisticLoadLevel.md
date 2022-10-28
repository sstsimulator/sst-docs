---
id: setStatisticLoadLevel
title: setStatisticLoadLevel
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Set the global statistic load level. This level is used if individual load levels are not set. Also, the load level is only used for statistics not specifically enabled (i.e., not enabled using one of the enableAllStatistics variants). 

## Syntax
```python
sst.setStatisticLoadLevel(level)
```

## Parameters
* **level** (type: int) value to set global statistic load level to 
* **returns** none

## Examples

### Example 1
```python
import sst

sst.setStatisticLoadLevel(6)
```

## Import
```python
import sst
```