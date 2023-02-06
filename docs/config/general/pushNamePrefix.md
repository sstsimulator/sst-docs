---
id: pushNamePrefix
title: pushNamePrefix
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->


Pushes a name prefix onto the name stack. This prefix will be added on the names of all Components and Links. The names in the stack are separated by a period. Example, if `pushNamePrefix(“base”)` and `pushNamePrefix(“next”)` were called in that order, the prefixed name would be `“base.next”`. Prefixes can be popped from the stack using `popNamePrefix()`. 

## Syntax
```python
sst.pushNamePrefix(prefix)
```

## Parameters
* **prefix** : (type: string) prefix to add to the name stack 
* **returns** none

## Examples

### Example 1
```python
import sst

comp0 = sst.Component("c0", "simpleElementExample.example0") # Name is 'c0'

sst.pushNamePrefix("base")

comp1 = sst.Component("c1", "simpleElementExample.example0") # Name is 'base.c1'
```

## Import
```python
import sst
```