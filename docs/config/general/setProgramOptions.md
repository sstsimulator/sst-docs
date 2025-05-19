---
title: setProgramOptions
---

Sets multiple program options for the simulation. These mirror the options available on the sst command line. Parameters set in the python file will be overwritten by options set on the command line. Use `sst –help` to get a list of available options. 

## Syntax
```python
sst.setProgramOptions(options)
```

## Parameters
* **options** (type: dictionary) a dictionary containing the configuration options (option: value) to set 
* **returns** none

## Example

```python
import sst

sst.setProgramOptions( { "exit-after", "100ms" } )
```

## Import
```python
import sst
```