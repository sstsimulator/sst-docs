---
title: Statistics Groups
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

The StatisticGroup object is used to group Statistics objects together to be written to the same StatisticOutput object.

:::warning
The StatisticGroup object had limited use in the past and is evolving to include new functionality. This is the proposed functionality of the class and may not be the final API for the object. 
:::

A StatisticGroup is creating using the following `StatisticGroup()` function.


## Syntax
```python
sst.StatisticGroup(name)
```

## Parameters
* **name** (type: string) Name of the group specified as a string.
* **returns** Created StatisticGroup object 


## Example

```python
import sst

statGroup = sst.StatisticGroup("StatGroup")
```

## Import
```python
import sst
```
