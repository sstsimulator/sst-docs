---
id: projectDriver
title: Basics: Project Driver
---

The project driver is a python file. It defines what components, subcomponents, links, and sets params.

You are only required to create one component, though most simulations will contain many elements.

To start import the SST functions.
```python
import sst
```

Use the [SST functions](projectDriver/sst/component.md) to build your simulation.


## Examples

### Example 1 - Minimal Project Driver

```python
import sst

# component hello from element exA_helloSST (exA_helloSST.hello) named "Hello World"
helloComponent = sst.Component("hello", "exA_helloSST.hello")
helloComponent.addParams({
	"repeats" : "5"
	})
```

### Example 2 - Project Driver

```python
import sst

# Component carWash from element carWash (carWash.carWash), named "Main Car Wash"
carWashComponent = sst.Component("Main Car Wash", "exC_carWash.carWash")
carWashComponent.addParams({
	"simulationTime" : "24", # simulate 24 hours
	"tickFreq" : "60s", # process cars every 60 seconds (1 tick = 1 minute)
	})

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


# Component carGenerator from element carWash (carWash.carGenerator), named "Car Generator"
carGeneratorComponent = sst.Component("Car Generator", "exC_carWash.carGenerator")
carGeneratorComponent.addParams({
	"delay" : "60s", # send a car every 60 seconds (1 tick = 1 minute)
	"randomseed" : "151515"
	})


# Enable all statistics up to level 1 for the Car Wash and bays
# In this example that means noCarEvents is NOT enabled
sst.setStatisticLoadLevel(1)
sst.enableAllStatisticsForAllComponents()
#carWashComponent.enableAllStatistics()
#baySubcomponent0.enableAllStatistics()
#baySubcomponent1.enableAllStatistics()
#baySubcomponent2.enableAllStatistics()

# Connect the carWash and carGenerator components
sst.Link("MyLink").connect( (carWashComponent, "port", "1ps"), (carGeneratorComponent, "port", "1ps") )
```

## See Also

- [http://sst-simulator.org/SSTPages/SSTUserPythonFileFormat/](http://sst-simulator.org/SSTPages/SSTUserPythonFileFormat/) - View more info on the sst-simulator.org site.