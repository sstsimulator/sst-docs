---
title: addParams
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Adds a map of parameters to a statistic object's parameter set.

## Syntax
```python
statisticObject.addParams(params)
```

## Parameters
* **params** (type: dict) a Python dict of key, value pairs. See the [`addParam()`](addParam) description for information about how key and value are used. 
* **returns** none

## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
stat = component0.setStatistic("EventSizeReceived")

params = { "rate" : "50ns" }

stat.addParams( params )
```

## Import
```python
import sst
```
