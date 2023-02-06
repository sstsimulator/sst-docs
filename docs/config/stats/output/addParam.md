---
id: addParam
title: addParam
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Adds a parameter to the Params object for the StatisticOutput.

## Syntax
```python
statOutput.addParam(key, value)
```

## Parameters
* **key** (type: string) Name of the parameter 
* **value** (type: varies) Value of the parameter. This can be almost any Python object and the `__str__` method will be called to get a string representation. A list can be passed to this call when the `find_array` function is used in the class to retrieve the parameters. 
* **returns** none


## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")

statOutput = sst.StatisticOutput("sst.StatOutputCSV")
statOutput.addParam("filepath", "sim_output.csv")
```

## Import
```python
import sst
```
