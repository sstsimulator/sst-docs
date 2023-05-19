---
id: setOutput
title: setOutput
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->


Configure how the Statistics in the group should be written.


## Syntax
```python
group.setOutput(output)
```

## Parameters
* **output** (type: sst.StatisticOuptut) StatisticOutput object that will record the data 
* **returns** none


## Example

```python
import sst

statGroup = sst.StatisticGroup("StatGroup")
statisticOutput = sst.StatisticOutput("sst.statOutputConsole")
#highlight-next-line
statGroup.setOutput(statisticOutput)
```

## Import
```python
import sst
```
