---
id: enableAllStatisticsForAllComponents
title: sst.enableAllStatisticsForAllComponents()
---

### Remarks

Enable all statistics for all components. You can use [sst.setStatisticLoadLevel()](projectDriver/sst/setStatisticLoadLevel.md) to change what stats are outputted. 

## Requirements

```python
import sst
```

## Syntax

```python
sst.setStatisticLoadLevel(1)
sst.enableAllStatisticsForAllComponents()
```

## Parameters

**None**

## Return Value

**None**

## Examples

### Example 1
```python
sst.setStatisticLoadLevel(1)
sst.enableAllStatisticsForAllComponents()
```

## See Also

- [sst.setStatisticLoadLevel()](projectDriver/sst/setStatisticLoadLevel.md)
- [enableAllStatistics()](projectDriver/component/enableAllStatistics.md)