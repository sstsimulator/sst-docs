---
title: setNoCut
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Tell the simulator that this link should not be “cut” by a partition boundary. In effect, it will guarantee that the two Components connected by this link will be on the same rank when using an autotmatic partitioning scheme (this attribute is ignored if the self partitioner is used). This must be used with care, as you can easily get into a situation where too many components are on the same rank. 

## Syntax
```python
setNoCut()
```

## Parameters
* **returns** none

## Example

```python
import sst

link = sst.Link("component_link")
link.setNoCut()
```

## Import
```python
import sst
```