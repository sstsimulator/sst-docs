---
id: setStatisticLoadLevel
title: setStatisticLoadLevel
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the load level for this component. This overrides the default or global load level. Load levels are not used for statistics that are explicitly enabled (i.e., does not use one of the "All" variants for enabling statistics). This function applies to both Components and SubComponents.

## Syntax
```python
component.setStatisticLoadLevel(level, apply_to_children=False)
```

## Parameters
* **level** (type: int) statistic load level for the component 
* **apply_to_children** (type: bool) OPTIONAL. If set to True, will recursively set the specified load level on all currently instanced SubComponent descendants. SubComponents created after this call will not have their load level set. 
* **returns** none

:::note
This function only accepts positional arguments. Calling it with keyword arguments (e.g., `apply_to_children=True`) raises a `TypeError`.
:::

## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example1")
component0.setStatisticLoadLevel(4, True)

```

## Import
```python
import sst
```
