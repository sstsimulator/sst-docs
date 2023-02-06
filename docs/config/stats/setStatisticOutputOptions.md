---
id: setStatisticOutputOptions
title: setStatisticOutputOptions
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Set the specified options for the StatisticOutput object.

## Syntax
```python
sst.setStatisticOutputOptions(options)
```

## Parameters
* **options** (type: dict) dictionary the contents specify the option as dictionary keys with the options value being specified by the corresponding dictionary value. 
* **returns** none

## Examples

### Example 1
```python
import sst

options = {
    "filepath" : "stats.csv",
    "separator" : ", "
}
sst.setStatisticOutputOptions(options)
```

## Import
```python
import sst
```