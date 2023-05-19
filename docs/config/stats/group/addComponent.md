---
id: addComponent
title: addComponent
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Add a component to the group. Adding a component does not add that component's statistics which must be subsequently added with [addStatistic](addStatistic).


## Syntax
```python
group.addComponent(comp)
```

## Parameters
* **comp** Component/SubComponent to add to the group 
* **returns** none


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")

statGroup = sst.StatisticGroup("StatGroup")
#highlight-next-line
statGroup.addComponent(component0)
```

## Import
```python
import sst
```
