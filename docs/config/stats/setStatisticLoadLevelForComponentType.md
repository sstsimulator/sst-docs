---
id: setStatisticLoadLevelForComponentType
title: setStatisticLoadLevelForComponentType
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the statistic load level for all components of the specified type. 

## Syntax
```python
sst.setStatisticLoadLevelForComponentType(comp_type, level, apply_to_children=False)
```

## Parameters
* **comp_type** (type: string) type of the Component or SubComponent on which to set the statistic load level. All previously instanced elements of this type will have their level set. 
* **level** (type: int) statistic load level for the component 
* **apply_to_children** : (type:bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants. 
* **returns** none

## Example

```python
import sst

sst.Component("c0", "simpleElementExample.basicStatistics")

sst.setStatisticLoadLevelForComponentType("simpleElementExample.basicStatistics", 3)
```

## Import
```python
import sst
```