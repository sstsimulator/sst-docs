---
title: Python Configuration File
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

SST provides a python module to allow interaction with the simulation build system. This python module is used in the input python script for the purpose of building the graph that represents the simulation to be performed. This is done by providing classes and functions to define the elements of the simulation, their parameters, and how they are interconnected. The user can also optionally enable statistics and create a user specified partitioning for the described model. Behind the scenes, these classes will build the C\+\+ data structure that is used by SST to construct the simulation model. 

The SST core python module is defined in cpython and is only available in the python interpreter launched within a running SST executable. The module is accessed by importing the sst module. This can be done in a number of ways. The two most common being: 


```py
# Import SST python module using sst. prefix
import sst
# Import SST python module members into current namespace
from sst import *
```

In addition to general functions, there are seven classes available in SST: 
* [Component and SubComponent](./component/classes.md) (*Create and parameterize Components and SubComponents*)
* [Link](./link/link.md) (*Create and connect Links*)
* [Statistic](./stats/overview.md) (*Enable statistics, set options on statistic output, etc.*)
* [StatisticObject](./stats/object/statisticObject.md) (*Parameterize a specific statistic*)
* [StatisticOutput](./stats/output/statisticOutput.md) (*Parameterize the output format for statistics*)
* [StatisticGroup](./stats/group/statisticGroup.md) (*Create and parameterize groups of statistics*)
* [UnitAlgebra](./unitalgebra/unitalgebra.md) (*Perform math on values with units*)

The Component and SubComponent classes share many of the same functions and are both covered under Component.

## See Also
- [Tutorial: Configuring your first simulation](../guides/configuration/configTutorial.mdx)
- [Python Configuration Guide](../guides/configuration/pythonConfigGuide.md)
