---
id: enableStatisticForComponentName
title: enableStatisticForComponentName
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables a statistic for the component on which the call is made. 

## Syntax
```python
sst.enableStatisticForComponentName(name, stat, stat_params_dict, apply_to_children=False)
```

## Parameters
* **name** (type: string) name of the Component or SubComponent on which to enable the specified statistic. The name for SubComponents is described above. Slot indexes are optional in cases where only one SubComponent has been added to a slot, but you can also use [0] in all cases, even when the actual name will not display this way. Make sure the name matches an existing Component or SubComponent; SST does not currently report a clear error for an unrecognized name. 
* **stat** (type: string) statistic to be enabled 
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specifies the statistic parameters 
* **apply_to_children** (type: bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants. 
* **returns** Statistic object for the enabled statistic. See [Statistic Objects](./object/statisticObject).

## Example

```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")
sst.Component("c1", "simpleElementExample.basicStatistics")
sst.Component("c2", "simpleElementExample.basicStatistics")

params = { "rate" : "500ns" } # Report statistics every 500ns
# 'UINT32_statistic' is the name of a statistic in simpleElementExample.basicStatistics
sst.enableStatisticForComponentName("c0", "UINT32_statistic")
sst.enableStatisticForComponentName("c1", "UINT32_statistic", params)
sst.enableStatisticForComponentName("c2", "UINT32_statistic", params, True)
```

## Import
```python
import sst
```