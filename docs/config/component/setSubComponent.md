---
id: setSubComponent
title: setSubComponent
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

A SubComponent is created by calling setSubComponent() on either a Component or SubComponent object. Instancing a SubComponent in this way creates a User SubComponent and allows the user to specify the parameters and statistics directly on the SubComponent. The name of the SubComponent is automatically generated using the name of the parent Component and the slot\_name(s) in which SubComponents are loaded. If more than one SubComponent is loaded into a slot, the slot\_name is also indexed using square brackets (e.g. [0]). This name can be used to get a handle to the SubComponent later in the Python code.

## Syntax
```python
setSubComponent(slot_name, element_type, slot_index = 0)
```

## Parameters
* **slot_name** (type: string) name of the slot in which the SubComponent should be loaded. 
* **element_type** type of the SubComponent in the `lib.element` format (for example, `"merlin.linkcontrol"`) 
* **slot_index** (type: string) slot index in which the SubComponent should be inserted. This defaults to 0 and is not required if only one SubComponent is being loaded into the specified slot. Each SubComponent must be loaded into a unique slot\_index and some (Sub)Components will require the indexes to be linear with no gaps. 
* **returns** SubComponent object 


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

# Import
```python
import sst
```