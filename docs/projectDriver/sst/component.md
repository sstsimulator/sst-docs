---
id: component
title: sst.Component()
---

### Remarks

Create a component.

## Requirements

```python
 import sst
```

## Syntax

```python
component = sst.Component("componentName", "elementLibrary.componentClass")
```

## Parameters

**componentName** - A string to label this component specifically.

**elementLibrary** - The element library that contains the Component to create.

**componentClass** - The Component class within the library to create.

## Return Value

**component** - Use this to add params, set sub component, and enable statistics.

## Examples

### Example 1
```python
carWashComponent = sst.Component("Main Car Wash", "exC_carWash.carWash")
```

### Example 1
```python
ariel = sst.Component("ariel0", "ariel.ariel")
```

## See Also

- [addParams](projectDriver/component/addParams.md)
- [enableAllStatistics](projectDriver/component/enableAllStatistics.md)
- [setSubComponent](projectDriver/component/setSubComponent.md)