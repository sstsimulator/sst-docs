---
id: statisticOutput
title: Statistics Output
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

The StatisticOutput object is used to configure the output type and options for statistics and is for use with StatisticGroup. For the global statistics output, see the global functions:
[`setStatisticOutput()`](../setStatisticOutput), 
[`setStatisticOutputOption()`](../setStatisticOutputOption) and 
[`setStatisticOutputOptions()`](../setStatisticOutputOptions). 

The StatisticOutput object is created using the following constructor.


## Syntax
```python
sst.StatisticOutput(type, params=None)
```

## Parameters
* **params** (type: dict) A Python dict of key, value pairs. 
See the [`addParam()`](addParam) description for information about how key and value are used. 
* **returns** none


## Example

```python
import sst

statOutput = sst.StatisticOutput("sst.StatOutputCSV")

params = { "filepath" : "sim_output.csv", "separator" : ", " }

statOutput.addParams(params)
```

## Import
```python
import sst
```
