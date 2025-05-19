---
title: addPortModule
---

Places a PortModule on a port.

## Syntax
```python
component.addPortModule(port_name, port_module_type, params)
```

## Parameters
* **port_name** (type: string) name of the port to place the PortModule on.
* **port_module_type** (type: string) type of the PortModule in the `lib.element` format (for example, `"sst.portmodules.random_drop"`).
* **returns** none

## Example

```python
import sst

component = sst.Component( ... )

#highlight-next-line
component.addPortModule("port0", "sst.portmodules.random_drop", { "drop_prob" : 0.1} )
```

## Import
```python
import sst
```
