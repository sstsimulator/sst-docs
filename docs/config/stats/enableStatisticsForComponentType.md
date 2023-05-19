---
id: enableStatisticsForComponentType
title: enableStatisticsForComponentType
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables a list of statistics for all previously instanced Components/SubComponents of the type specified in the call. This call works for both Components and SubComponents. 

## Syntax
```python
sst.enableStatisticsForComponentType(comp_type, stat_list, stat_params_dict, apply_to_children=False)
```

## Parameters
* **comp_type** (type: string) type of the Component or SubComponent on which to enable the specified statistics. All previously instanced elements of this type will have their statistics enabled. 
* **stat_list** (type: list of strings) list of statistics to be enabled. If only one stat is to be enabled, you may pass a single string instead of a list. 
* **stat_params_dict** (type: dict) Python dictionary that specified the statistic parameters 
* **apply_to_children** (type: bool) If set to True, will recursively enable specified statistic on all SubComponent descendants. 
* **returns** none

## Example

```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")

stats = ["UINT32_statistic", "INT32_statistic"]
sst.enableStatisticsForComponentType("simpleElementExample.basicStatistics", stats)
```

## Import
```python
import sst
```