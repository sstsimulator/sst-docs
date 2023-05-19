---
title: addParam
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Adds a parameter to a statistic object's parameter set.

## Syntax
```python
statisticObject.addParam(key, value)
```

## Parameters
* **key** (type: string) name of the parameter 
* **value** (type: varies) value of the parameter. This can be almost any Python object and the `__str__` method will be called to get a string representation. A list can be passed to this call when the `find_array` function is used in the class to retrieve the parameters. 
* **returns** none

## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
stat = component0.setStatistic("EventSizeReceived")

stat.addParam("rate", "50ns")
```

## Import
```python
import sst
```
