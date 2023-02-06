---
title: addParams
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Adds multiple parameters to the Params object for the Component/SubComponent. This function applies to both Components and SubComponents.


## Syntax
```python
component.addParams(params)
```

## Parameters
* **params** (type: dict) a Python dict of key, value pairs. See [`addParam()`](addParam) description for information about how key and value are used. 
* **returns** none

## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")

params = {
	"eventsToSend" : 50,
	"eventSize" : 32
}
component0.addParams(params)
```

## Import
```python
import sst
```
