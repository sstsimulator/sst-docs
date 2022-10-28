---
id: getType
title: getType
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Returns the type of the component in `lib.element` format. This is simply the type supplied to either the Component constructor or setSubComponent() call. This function applies to both Components and SubComponents.

## Syntax
```python
getType()
```

## Parameters
* **returns** type of Component/SubComponent 


## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
type_string = component0.getType() # type_string = "simplElementExample.example0"
```

## Import
```python
import sst
```
