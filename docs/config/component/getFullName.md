---
title: getFullName
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Returns the full name of the Component or SubComponent. For Components, the name is the one supplied by the user at the time the Component was created. For SubComponents, the name is automatically generated from the parent Component and slot name. At each level, the name is generated as the parent’s name plus the slot name, separated by a colon. The slot number is appended in square brackets: 

`Parent:slot[index]`

This holds true for SubComponents of SubComponents, the slotname and index are just appended to the parent name: 

`Parent:slot[index]:slot[index]`

This function applies to both Components and SubComponents.

## Syntax
```python
component.getFullName()
```

## Parameters
* **returns** full name of Component/SubComponent as a string


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
name = component0.getFullName()
```

## Import
```python
import sst
```
