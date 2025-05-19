---
title: setStatistic
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->


Sets the statistic object to use in the specified statistic slot. This function applies to both Components and SubComponents. Use [`createStatistic`](./createStatistic.md) to create a statistic object before using this function. See [Statistic Objects](../stats/object/statisticObject) for additional functions that can be used on statistic objects.

## Syntax
```python
component.setStatistic(stat_name, stat_obj)
```

## Parameters
* **stat_name** Name of the statistic that will be set 
* **stat_obj** Statistic object that will be used for the named statistic slot. 
* **returns** Statistic object loaded into the specified statistic slot. 


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
statobj = component0.createStatistic("StatObj")
stat = component0.setStatistic("EventSizeReceived", statobj) # Map "EventSizeReceived" -> "StatObj"
```

## Import
```python
import sst
```
