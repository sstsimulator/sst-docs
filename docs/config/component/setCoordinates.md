---
title: setCoordinates
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the x, y, z coordinates for this element. This is for use with visualization. This funciton applies to both Components and SubComponents.

## Syntax
```python
component.setCoordinates(x, y=0.0, z=0.0)
```

## Parameters
* **x** (type: float) sets the x position of the element 
* **y** (type: float) sets the y position of the element 
* **z** (type: float) sets the z position of the element 
* **returns** none

## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
component0.setCoordinates(1.0)
```

## Import
```python
import sst
```
