---
title: addPortModule
---

Places a PortModule on a port. This function is only available on Components, not SubComponents.

## Syntax
```python
component.addPortModule(port_name, port_module_type, params=None)
```

## Parameters
* **port_name** (type: string) name of the port to place the PortModule on.
* **port_module_type** (type: string) type of the PortModule in the `lib.element` format (for example, `"sst.portmodules.random_drop"`).
* **params** (type: dict) OPTIONAL. Python dictionary of parameters to pass to the PortModule.
* **returns** PortModule object 


## Example 1

```python
import sst

component = sst.Component( ... )

#highlight-next-line
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop", { "drop_prob" : 0.1} )
```

## Import
```python
import sst
```
