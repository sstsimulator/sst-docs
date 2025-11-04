---
title: enableAllStatistics
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Enables all statistics for the PortModule on which the call is made.

## Syntax
```python
portmodule.enableAllStatistics(stat_params_dict={})
```

## Parameters
* **stat_params_dict** (type: dict) Python dictionary that specifies the statistic parameters. All statistics will get the same set of parameters.
* **returns** none

## Examples

### Example 1

```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop", { "drop_prob" : 0.1} )
#highlight-next-line
portmodule.enableAllStatistics()
```

### Example 2

```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop", { "drop_prob" : 0.1} )

#highlight-start
# Generate a statistics report every 50ns in simulated time
stat_params = { "rate" : "50ns" }
portmodule.enableAllStatistics(stat_params)
#highlight-end
```

## Import
```python
import sst
```
