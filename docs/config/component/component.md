---
title: Component
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Creates a new Component instance.

## Syntax
```python
Component(name, element_type)
```

## Parameters
* **name** (type: string) name of the Component specified as string. The name can be used to get a handle to the Component later in the Python code. The name is also available to the C\+\+ implementation of the Component. 
* **element_type** (type: string) type of the Component in the `lib.element` format (for example, `"merlin.hr_router"`) specified as a string
* **returns** Component object

## Examples

### Example 1
```python
carWashComponent = sst.Component("MainCarWash", "exC_carWash.carWash")
```

### Example 2
```python
ariel = sst.Component("ariel0", "ariel.ariel")
```

## Import
```python
import sst
```
