---
title: enableAllStatistics
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables all statistics for the Component or SubComponent on which the call is made.

## Syntax
```python
component.enableAllStatistics(stat_params_dict={}, apply_to_children=False)
```

## Parameters
* **stat_params_dict** (type: dict) Python dictionary that specifies the statistic parameters. All statistics will get the same set of parameters.
* **include_children** (type: bool) If set to True, will recursively enable all statistics on all currently instanced SubComponent descendants. SubComponents created after this call will not have their statistics enabled. 
* **returns** none

## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
component0.enableAllStatistics()
```

### Example 2
```python
import sst
component0 = sst.Component("c0", "simpleElementExample.example1")

# Generate a statistics report every 50ns in simulated time
statParams = { "rate" : "50ns" }

component0.enableAllStatistics(statParams)
```

## Import
```python
import sst
```
