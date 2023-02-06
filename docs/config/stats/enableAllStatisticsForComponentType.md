---
id: enableAllStatisticsForComponentType
title: enableAllStatisticsForComponentType
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables all statistics for all previously instanced Components/SubComponents of the type specified in the call. This call works for both Components and SubComponents. 

## Syntax
```python
sst.enableAllStatisticsForComponentType(comp_type, stat_params_dict, apply_to_children=False)
```

## Parameters
* **comp_type** (type: string) type of the Component or SubComponent on which to enable all statistics. All previously instanced elements of this type will have their statistics enabled. 
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specified the statistic parameters. All statistics will get the same set of parameters. 
* **apply_to_children** (type: bool) OPTIONAL. If set to True, will recursively enable all statistics on all SubComponent descendants. 
* **returns** none


## Examples

### Example 1
```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")
sst.enableAllStatisticsForComponentType("simpleElementExample.basicStatistics")
```

## Import
```python
import sst
```