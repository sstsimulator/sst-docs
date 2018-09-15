---
id: enableAllStatistics
title: enableAllStatistics()
---

### Remarks

Enables all statistics in a component.

## Requirements

```python
 import sst
```

## Syntax

```python
component.enableAllStatistics()
```

## Parameters

**component** - A component created using the [sst.Component](projectDriver/sst/component.md) function.

## Return Value

**None**

## Examples

### Example 1
```python
carWashComponent = sst.Component("Main Car Wash", "exC_carWash.carWash")

# ...SNIP...

sst.setStatisticLoadLevel(1)
carWashComponent.enableAllStatistics()
```

## See Also

- [sst.enableAllStatisticsForAllComponents](projectDriver/sst/enableAllStatisticsForAllComponents.md)
- [sst.Component](projectDriver/sst/component.md)