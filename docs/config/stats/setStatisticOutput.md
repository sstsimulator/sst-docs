---
id: setStatisticOutput
title: setStatisticOutput
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Sets the global StatisticOutput to be of the module type specified. Built-in modules include:
* **CSV** statOutputCSV
* **Console** statOutputConsole
* **Text** statOutputTXT
* **JSON** statOutputJSON
* **HDF5** statOutputhdf5 (if core is configured with HDF5)

## Syntax
```python
sst.setStatisticOutput(stat_output_module, options)
```

## Parameters
* **stat_output_module** (type: string) name of the stat output module to load in lib.element format. 
* **options** (type: dict) OPTIONAL. contents specify the option as dictionary keys with the options value being specified by the corresponding dictionary value. 
* **returns** none

## Examples

### Example 1
```python
import sst

sst.setStatisticOutput("sst.statOutputCSV", { "filepath" : "stats.csv", "separator" : "," } )
```

## Import
```python
import sst
```