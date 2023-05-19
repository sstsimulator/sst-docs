---
id: setStatisticOutputOption
title: setStatisticOutputOption
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Set the specified option for the StatisticOutput object.

## Syntax
```python
sst.setStatisticOutputOption(option, value)
```

## Parameters
* **option** (type: string) option to set 
* **value** (type: string) value to set option to 
* **returns** none


## Example

```python
import sst

sst.setStatisticOutputOption("filepath", "stats.csv")
```

## Import
```python
import sst
```