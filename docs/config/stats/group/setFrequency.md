---
id: setFrequency
title: setFrequency
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Set the frequency or rate (e.g.: "10ms", "25kHz") to write out the statistics. Time refers to simulated time.


## Syntax
```python
group.setFrequency(interval)
```

## Parameters
* **interval** (type: string) Interval at which to write out statistics. A rate of “0ns” will cause the output to be written only at the completion of simulation.
* **returns** none


## Example

```python
import sst

statGroup = sst.StatisticGroup("StatGroup")
statGroup.setFrequency("100us")
```

## Import
```python
import sst
```
