---
title: setStatistic
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->


Sets the statistic object to use in the specified statistic slot. This function appiles to both Components and SubComponents. See [Statistic Objects](../stats/object/statisticObject) for additional functions that can be used on statistic objects.

## Syntax
```python
component.setStatistic(stat_name, stat_obj=None)
```

## Parameters
* **stat_name** Name of the statistic that will be set 
* **stat_obj** Statistic object that will be used for the named statistic slot. If no stat object is specified, a new one will be created and returned. 
* **returns** Statistic object loaded into the specified statistic slot. 


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
stat = component0.setStatistic("EventSizeReceived")
```

## Import
```python
import sst
```
