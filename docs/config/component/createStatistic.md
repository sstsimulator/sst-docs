---
title: createStatistic
---

Create a statistic object that can then be used in a specific statistic slot (e.g., using [`setStatistc`](./setStatistic.md)).
See [Statistic Objects](../stats/object/statisticObject) for additional functions that can be used on statistic objects.

A statistic object can be used to map multiple statistics in a component to a single statistic in the output. The name of the output statistic will be the statistic object name.

## Syntax
```python
component.createStatistic(stat_name, stat_params_dict={})
```

## Parameters
* **stat_name** (type: string) Name of the statistic object 
* **stat_params_dict** (type: dict) Optional Python dictionary that specifies the statistic's parameters.
* **returns** A statistic object


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")

stat = component0.createStatistic("StatObj")
component0.setStatistic("EventSizeReceived", stat) # Map "EventSizeReceived" -> "StatObj"
```

## Import
```python
import sst
```
