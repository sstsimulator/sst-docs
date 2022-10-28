---
id: enableAllStatisticsForAllComponents
title: enableAllStatisticsForAllComponents
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables all statistics for all Components in the simulation that have already been instanced. 

## Syntax
```python
sst.enableAllStatisticsForAllComponents(stat_params_dict)
```

## Parameters
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specified the statistic parameters. All statistics will get the same set of parameters.
* **returns** none

## Examples

### Example 1
```python
import sst

sst.enableAllStatisticsForAllComponents()
```

### Example 2
```python
import sst

params = { "rate" : "500ns" } # Report statistics every 500ns
sst.enableAllStatisticsForAllComponents(params)
```

## Import
```python
import sst
```