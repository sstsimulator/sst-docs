---
id: setWeight
title: setWeight
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the weight of the Component. The weight is used by some partitioners to help balance Components across ranks. This function is only available to Components. 

## Syntax
```python
component.setWeight(weight)
```

## Parameters
* **weight** (type: float) Weight of the Component specified as a float. Weights can have any value, but should be meaningful in the context of the overall simulation. 
* **returns** none

## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
component0.setWeight(20.0)
```

## Import
```python
import sst
```
