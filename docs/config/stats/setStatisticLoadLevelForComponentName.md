---
id: setStatisticLoadLevelForComponentName
title: setStatisticLoadLevelForComponentName
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the statistic load level for the named component. 

## Syntax
```python
sst.setStatisticLoadLevelForComponentName(name, level, apply_to_children=False)
```

## Parameters
* **name** (type: string) name of the Component or SubComponent on which to set the statistic load level. The name for SubComponents is described above. Slot indexes are optional in cases where only on SubComponent has been added to a slot, but you can also use [0] in all cases, even when the actual name will not display this way. If component with the provided name not found, the function will call fatal(). 
* **level** (type: int) statistic load level for the component 
* **apply_to_children** : (type:bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants. 
* **returns** none

## Example

```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")

sst.setStatisticLoadLevelForComponentName("c0", 3)
```

## Import
```python
import sst
```