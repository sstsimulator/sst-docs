---
title: enableStatistics
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables a list of statistics for the component on which the call is made. This function applies to both Components and SubComponents.

## Syntax
```python
component.enableStatistics(stat_list, stat_params_dict, apply_to_children=False)
```

## Parameters
* **stat_list** (type: string or list of strings) List of statistics to be enabled. If only one stat is to be enabled, accepts a single string instead of a list. 
* **stat_params_dict** (type: dict) Python dictionary that specifies the statistic parameters. All statistics in the stat_list will get the same set of parameters.
* **include_children** (type: bool) If set to True, will recursively enable specified statistics on all currently instanced SubComponent descendants. SubComponents created after this call will not have their statistics enabled. 
* **returns** none

## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
component0.enableStatistics("EventSizeReceived")
```

### Example 2
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.basicStatistics")
component.enableStatistics(["UINT32_statistic", "UINT64_statistic"])
```

## Import
```python
import sst
```
