---
title: addParams
---

Adds multiple parameters to the Params object for the PortModule.


## Syntax
```python
portmodule.addParams(params)
```

## Parameters
* **params** (type: dict) a Python dict of key, value pairs. See [`addParam()`](addParam) description for information about how key and value are used. 
* **returns** none

## Example

```python
import sst

component = sst.Component( ... )
portmodule = component.addPortModule("port0", "sst.portmodules.random_drop" )

#highlight-next-line
portmodule.addParams( {"drop_prob", 0.1 } )
```

## Import
```python
import sst
```
