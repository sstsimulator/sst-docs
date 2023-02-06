---
id: enableStatisticForComponentType
title: enableStatisticForComponentType
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

 Enables a the specified statistic for all previously instanced Components/SubComponents of the type specified in the call. This call works for both Components and SubComponents. 

## Syntax
```python
sst.enableStatisticForComponentType(comp_type, stat, stat_params_dict, apply_to_children=False)
```

## Parameters
* **comp_type** (type: name) type of the Component or SubComponent on which to enable the specified statistic. All previously instanced elements of this type will have their statistics enabled. 
* **stat** (type: string) statistic to be enabled 
* **stat_params_dict** (type: dict) Python dictionary that specified the statistic parameters 
* **apply_to_children** (type: bool) If set to True, will recursively enable specified statistic on all SubComponent descendants. 
* **returns** none

## Examples

### Example 1
```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")
sst.enableStatisticForComponentType("simpleElementExample.basicStatistics", "UINT32_statistic")
```

## Import
```python
import sst
```