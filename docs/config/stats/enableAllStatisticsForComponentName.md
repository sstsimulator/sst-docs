---
id: enableAllStatisticsForComponentName
title: enableAllStatisticsForComponentName
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables all statistics for the Component named in the call. This call works for both Components and SubComponents. 

## Syntax
```python
sst.enableAllStatisticsForComponentName(name, stat_params_dict, apply_to_children=False)
```

## Parameters
* **name** (type: string) name of the Component or SubComponent on which to enable all statistics. The name for SubComponents is described above. Slot indexes are optional in cases where only one SubComponent has been added to a slot, but you can also use [0] in all cases, even when the actual name will not display this way. If component with the provided name not found, the function will call fatal(). 
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specified the statistic parameters. All statistics will get the same set of parameters 
* **apply_to_children** (type: bool) OPTIONAL. If set to True, will recursively enable all statistics on all SubComponent descendants of named element. 
* **returns** none

## Examples

### Example 1
```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")
sst.Component("c1", "simpleElementExample.basicStatistics")
sst.Component("c2", "simpleElementExample.basicStatistics")

params = { "rate" : "500ns" } # Report statistics every 500ns
sst.enableAllStatisticsForComponentName("c0")
sst.enableAllStatisticsForComponentName("c1", params)
sst.enableAllStatisticsForComponentName("c2", params, True)
```

## Import
```python
import sst
```