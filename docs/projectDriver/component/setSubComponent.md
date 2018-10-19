---
id: setSubComponent
title: setSubComponent()
---

### Remarks

Add a SubComponent to a Component's SubComponent slot.

## Requirements

```python
import sst
```

## Syntax

```python
subComponent = setSubComponent("subComponentSlotName", "elementLibrary.SubComponentClass", index)
```

## Parameters

**subComponentSlotName** - The name of the slot to add a SubComponent.

**elementLibrary** - The element library that contains the SubComponent to create.

**SubComponentClass** - The SubComponent class within the library to create.

**index** - Start at 0 and increment by 1 for each SubComponent added to subComponentSlotName. The index within the subComponentSlotName slot to add the SubComponent. 

## Return Value

**subComponent** - Use this to add params.

## Examples

### Example 1
```python
# Subcomponent slot "bay" using component bay from element carWash (carWash.bay), number 0
baySubcomponent0 = carWashComponent.setSubComponent("bay", "exC_carWash.bay", 0)
baySubcomponent0.addParams({
	"size" : "1", # small car bay
	"smallCarWashTime" : "3"
	})

# Subcomponent slot "bay" using component bay from element carWash (carWash.bay), number 1
baySubcomponent1 = carWashComponent.setSubComponent("bay", "exC_carWash.bay", 1)
baySubcomponent1.addParams({
	"size" : "2", # large car bay
	"smallCarWashTime" : "3",
	"largeCarWashTime" : "5"
	})

# Subcomponent slot "bay" using component bay from element carWash (carWash.bay), number 2
baySubcomponent2 = carWashComponent.setSubComponent("bay", "exC_carWash.bay", 2)
baySubcomponent2.addParams({
	"size" : "2", # large car bay
	"smallCarWashTime" : "3",
	"largeCarWashTime" : "5"
	})
```

## See Also

- [addParams](projectDriver/component/addParams.md)