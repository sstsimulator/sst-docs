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
component.enableStatistics(stat_list, stat_params_dict={}, apply_to_children=False)
```

## Parameters
* **stat_list** (type: string or list of strings) List of statistics to be enabled. If only one stat is to be enabled, accepts a single string instead of a list. 
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specifies the statistic parameters. All statistics in the stat_list will get the same set of parameters.
* **apply_to_children** (type: bool) OPTIONAL. If set to True, will recursively enable specified statistics on all currently instanced SubComponent descendants. SubComponents created after this call will not have their statistics enabled. 
* **returns** List of Statistic objects, one per enabled statistic. See [Statistic Objects](../stats/object/statisticObject).

:::note
This function only accepts positional arguments. Calling it with keyword arguments (e.g., `apply_to_children=True`) raises a `TypeError`.
:::

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
component0.enableStatistics(["UINT32_statistic", "UINT64_statistic"])
```

## Import
```python
import sst
```
