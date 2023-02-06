---
id: popNamePrefix
title: popNamePrefix
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Pops a prefix from the name stack. See [pushNamePrefix](pushNamePrefix) for how name stacks are used. 

## Syntax
```python
sst.popNamePrefix()
```

## Parameters
* **returns** none

## Examples

### Example 1
```python
import sst

comp0 = sst.Component("c0", "simpleElementExample.example0") # Name is 'c0'

sst.pushNamePrefix("base")

comp1 = sst.Component("c1", "simpleElementExample.example0") # Name is 'base.c1'

sst.popNamePrefix()

comp2 = sst.Component("c2", "simpleElementExample.example0") # Name is 'c2'
```

## Import
```python
import sst
```