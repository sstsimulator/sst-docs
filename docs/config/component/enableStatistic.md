---
title: enableStatistic
---

Enables a single statistic for the component on which the call is made and returns a handle to it. This function applies to both Components and SubComponents. The statistic is enabled only on the object the call is made on, not on its SubComponent descendants. To enable several statistics at once, or to enable statistics on descendants with the `apply_to_children` argument, use [`enableStatistics()`](./enableStatistics.md).

## Syntax
```python
component.enableStatistic(stat_name, stat_params_dict={})
```

## Parameters
* **stat_name** (type: string) Name of the statistic to enable.
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specifies the statistic parameters.
* **returns** Statistic object for the enabled statistic. See [Statistic Objects](../stats/object/statisticObject.md).

:::note
This function only accepts positional arguments.
:::

## Example
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.basicStatistics")
#highlight-next-line
stat = component0.enableStatistic("UINT32_statistic", {"type" : "sst.AccumulatorStatistic"})
```

## Import
```python
import sst
```
