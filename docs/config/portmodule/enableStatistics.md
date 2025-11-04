---
title: enableStatistics
---

Enables a list of statistics for the PortModule on which the call is made.

## Syntax
```python
portmodule.enableStatistics(stat_list, stat_params_dict)
```

## Parameters
* **stat_list** (type: string or list of strings) List of statistics to be enabled. If only one stat is to be enabled, accepts a single string instead of a list. 
* **stat_params_dict** (type: dict) Python dictionary that specifies the statistic parameters. All statistics in the `stat_list` will get the same set of parameters.
* **returns** none

## Example
```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop" )

#highlight-next-line
portmodule.enableStatistics(["dropped", "observed"])
```

## Import
```python
import sst
```
