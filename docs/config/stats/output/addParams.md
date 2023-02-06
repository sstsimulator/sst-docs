---
id: addParams
title: addParams
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Adds multiple parameters to the Params object for the StatisticOutput.


## Syntax
```python
statOutput.addParam(params)
```

## Parameters
* **params** (type: dict) a Python dict of key, value pairs. See the [`addParam()`](addParam) description for information about how key and value are used. 
* **returns** none



## Examples

### Example 1
```python
import sst

statOutput = sst.StatisticOutput("sst.StatOutputCSV")
statOutput.addParam("filepath", "sim_output.csv")
```

## Import
```python
import sst
```
