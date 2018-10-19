---
id: setStatisticLoadLevel
title: sst.setStatisticLoadLevel()
---

### Remarks

Set what statistics will be outputted. 

An integer value used to enable/disable stat collection. If the load level is 5, then all stats with an enable level 4 or less will be enabled.

The statistic's enable level is set using [SST_ELI_DOCUMENT_STATISTICS](cpp/eli/sst_eli_document_statistics.md)

## Requirements

```python
import sst
```

## Syntax

```python
sst.setStatisticLoadLevel(loadLevel)
```

## Parameters

**loadLevel** - An integer value used to enable/disable stat collection. If the load level is 5, then all stats with an enable level 5 or less will be enabled.

## Return Value

**None**

## Examples

### Example 1
```python
sst.setStatisticLoadLevel(1)
```

## See Also

- [sst.enableAllStatisticsForAllComponents()](projectDriver/sst/enableAllStatisticsForAllComponents.md)
- [enableAllStatistics()](projectDriver/component/enableAllStatistics.md)