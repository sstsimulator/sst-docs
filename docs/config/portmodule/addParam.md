---
title: addParam
---

Adds a parameter to the Params object for the PortModule.

## Syntax
```python
portmodule.addParam(key, value)
```

## Parameters
* **key** (type: string) name of the parameter 
* **value** (type: varies) value of the parameter. This can be almost any Python object and the `__str__` method will be called to get a string representation. A list can be passed to this call when the `find_array` function is used in the class to retrieve the parameters. 
* **returns** none


## Example

```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop" )

#highlight-next-line
portmodule.addParam( "drop_prob", 0.1 )
```

## Import
```python
import sst
```
