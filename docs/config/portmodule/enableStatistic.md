---
title: enableStatistic
---

Enables a single statistic for the PortModule on which the call is made. To enable multiple statistics at once, use [`enableStatistics()`](./enableStatistics.md).

## Syntax
```python
portmodule.enableStatistic(stat, stat_params_dict=None)
```

## Parameters
* **stat** (type: string) Name of statistic to enable.
* **stat_params_dict** (type: dict) OPTIONAL. Python dictionary that specifies the statistic parameters.
* **returns** none

## Example

```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop" )

#highlight-next-line
portmodule.enableStatistic("dropped")
```

## Import
```python
import sst
```
