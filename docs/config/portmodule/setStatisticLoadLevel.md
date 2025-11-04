---
title: setStatisticLoadLevel
---

Sets the load level for this PortModule. The load level will override the default or global load level. Load levels are not used for statistics that are explicitly enabled (i.e., does not use one of the "All" variants for enabling statistics).

## Syntax
```python
portmodule.setStatisticLoadLevel(level)
```

## Parameters
* **level** (type: int) statistic load level for the PortModule 
* **returns** none

## Example

```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop" )

#highlight-next-line
portmodule.setStatisticLoadLevel(4)
```

## Import
```python
import sst
```
