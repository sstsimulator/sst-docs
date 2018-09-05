---
id: addParams
title: addParams()
---

### Remarks

Sets all parameters for a Component or SubComponent.

## Requirements

```python
 import sst
```

## Syntax

```python
addParams({
    "param1": "value1",
    "param2": "value2",
    "param3": "value3",
    ...
    "paramN": "valueN"
})
```

## Parameters

**param** - the name of the param to set

**value** - the string value to set.

## Return Value

**None**

## Examples

### Example 1
```python
carWashComponent = sst.Component("Main Car Wash", "exC_carWash.carWash")
carWashComponent.addParams({
	"simulationTime" : "24", # simulate 24 hours
	"tickFreq" : "60s", # process cars every 60 seconds (1 tick = 1 minute)
	})
```

### Example 2
```python
baySubcomponent2 = carWashComponent.setSubComponent("bay", "exC_carWash.bay", 2)
baySubcomponent2.addParams({
	"size" : "2", # large car bay
	"smallCarWashTime" : "3",
	"largeCarWashTime" : "5"
	})
```

### Example 3
```python
corecount = 8

ariel = sst.Component("ariel0", "ariel.ariel")
ariel.addParams( {
	"verbose" : "0",
	"maxcorequeue" : "256",
 	"maxissuepercycle" : "2",
 	"pipetimeout" : "0",
	"corecount" : str(corecount),
 	"executable" : "<BINARY PATH GOES HERE>",
	"appargcount" : "1",
	"apparg0" : str(corecount),
 	"arielmode" : "1",
 	"arieltool" : "<PUT YOUR SST ROOT OR ARIEL PATH HERE>sst/elements/ariel/tool/arieltool.so",
 	"memorylevels" : "2",
	"arielinterceptcalls" : "0", 
	"defaultlevel" : "0"
	} )
```

## See Also

- [sst.Component](projectDriver/sst/component.md)