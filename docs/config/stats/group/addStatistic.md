---
id: addStatistic
title: addStatistic
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Adds a statistic to the group. The specified statistic names must exist in all components that are part of the group.


## Syntax
```python
group.addStatistic(stat, stat_params_dict)
```

## Parameters
* **stat** (type: string) Name of statistic to add to the group 
* **stat_params_dict** (type: dict) Python dictionary that specifies the statistic parameters 
* **returns** none



## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")

statGroup = sst.StatisticGroup("StatGroup")
statGroup.addComponent(component0)
statGroup.addStatistic("EventSizeReceived")
```

## Import
```python
import sst
```
