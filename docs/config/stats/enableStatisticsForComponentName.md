---
id: enableStatisticsForComponentName
title: enableStatisticsForComponentName
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables a list of statistics for the component on which the call is made. 

## Syntax
```python
sst.enableStatisticsForComponentName(name, stat_list, stat_params_dict, apply_to_children=False)
```

## Parameters
* **name** (type: string) name of the Component or SubComponent on which to enable specified statistics. The name for SubComponents is described above. Slot indexes are optional in cases where only on SubComponent has been added to a slot, but you can also use [0] in all cases, even when the actual name will not display this way. If component with the provided name not found, the function will call fatal(). 
* **stat_list** (type: list of strings) list of statistics to be enabled. If only one stat is to be enabled, you may pass a single string instead of a list. 
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specified the statistic parameters 
* **apply_to_children** (type: bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants. 
* **returns** none


## Example

```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")

stats = ["UINT32_statistic", "UINT64_statistic", "INT32_statistic"]
sst.enableStatisticsForComponentName("c0", stats)
```

## Import
```python
import sst
```