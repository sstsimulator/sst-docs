---
id: pythonConfigGuide
title: "Basics: Simulation Configuration File"
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

Within this module, there are a number of available classes and global functions. The available classes are: Component, SubComponent, Link, StatisticOutput and StatisticGroup. The global functions are divided between general functions and functions operating on or returning one of the available objects. The links below document the available classes in the SST python module and the global functions. 

**SST Python Module**
* [SST Python Classes](guides/configuration/pythonClasses.md)
* [Configuration Functions](config/general)

# Usage via a simple example

**Note: This example is based on sst-elements/src/sst/elements/simpleElementExample/tests/example0.py**
Full documentation can be found at the links above, this section describes basic usage only. In the following input file, we define a graph consisting of two components, named 'c0' and 'c1', which are connected by a single link. The names are arbitrary, user-selected strings. Links are bidirectional. 

```py
1   # Import the SST module
2   import sst
3   
4   # Create two components of type "simpleElementExample.example0"
5   component0 = sst.component("c0", "simpleElementExample.example0")
6   component1 = sst.component("c1", "simpleElementExample.example0")
7   
8   # Parameters defined in a dictionary 
9   params = { "eventsToSend" : 50, "eventSize" : 32 }
10
11  # Pass parameters to component0 and component1
12  component0.addParams(params)
13  component1.addParams(params)
14
15  # Create a link between component0 and component1
16  link = sst.Link("component_link")
17  link.connect( (component0, "port", "1ns"), (component1, "port", "1ns") )
18
```

### Imports
Line 2 above imports the `sst` module. Additional Python modules may be imported if desired.

### Components
An SST Component is a class in the `sst` module.  Its constructor takes the name of the component (defined by the user), as well as its type (defined by the library developer).

```py
component0 = sst.Component("c0", "simpleElementExample.example0")
```

Here, the user has created a component with the name 'c0'. This name will be used to reference the component in SST output, including statistics and error reporting. The component's type is "simpleElementExample.example0", that is, the "example0" component available from the "simpleElementExample" library.

Component parameters are specified by passing a name and value to `addParam()`, or a dictionary of parameters to `addParams()`. In the example above, both components take identical parameters and the same dictionary is passed to both in lines 12 and 13. An equivalent way to pass parameters would be:

```py
component0.addParam("eventsToSend", "50")
component0.addParam("eventSize", "32")
```

### Links
---

Links are classes in the `sst` module as well.  They are created with just a user-defined name.

```py
link = sst.Link("component_link")
```

To connect two components via a link, one can either pass the link object to each component's `addLink()` method, or call `connect()` on the link object, passing two tuples, each containing a component, its port name, and link latency. The port name is defined by the component developer and can be found by looking at the component documentation.

The following two examples are equivalent ways to connect component0 and component1 from the example:

```py
link = sst.Link("component_link")

component0.addLink(link, "port", "10ns")
component1.addLink(link, "port", "10ns")
```

```py
link = sst.Link("component_link")

link.connect((component0, "port", "10ns"), (component1, "port", "10ns"))
```

### Statistics

Many SST components (although not simpleElementExample.example0) provide statistic output. Users can define the output frequency, format, type (e.g., histogram versus an accumulator), as well as which statistics to output in the Python input file. The following example, based on sst-elements/src/sst/elements/simpleElementExample/tests/example1.py, enables statistics on the 'example1' component in simpleElementExample.

```py
1   import sst
2   
3   component0 = sst.component("c0", "simpleElementExample.example1")
4   component1 = sst.component("c1", "simpleElementExample.example1")
5   
6   params = { "eventsToSend" : 50, "eventSize" : 32 }
7
8   component0.addParams(params)
9   component1.addParams(params)
10
11  link = sst.Link("component_link")
12  link.connect( (component0, "port", "1ns"), (component1, "port", "1ns") )
13
14  # Enable statistics generation for those with verbosity level less than or equal to 7
15  sst.setStatisticLoadLevel(7)
16
17  # Configure output format
18  sst.setStatisticOuput("sst.statOuputConsole")
19  
20  # Specify which statistics to enable
21  sst.enableAllStatisticsForComponentType("simpleElementExample.example1")
```

#### Enabling Statistic Generation 
By default, no statistics are generated. To enable statistics, you must set the statistic load level, as shown above in line 15. Statistics generally range in verbosity from 1 to 7. 0 means all statistics are disabled.

**Note: if Statistic Load Level is not set, all statistics will be disabled**

#### Statistic Format and Destination
In the example, statistic output is sent to stdout ("statOutputConsole"). In general, the output can be configured by setting the format and/or destination as follows:

```py
sst.setStatisticOutput("outputname", {"param_1" : "value_1",
                                      "param_n" : "value_n" 
                                      } )

sst.setStatisticOutputOptions({"param_1" : "value_1", 
                               "param_n" : "value_n" 
                               } )

sst.setStatisticOutputOption("param", "value")
```

**Note: If Statistic Output is not set, the default will be "sst.statOutputConsole"**

For example, to generate CSV statistics you might use this:

```py
sst.setStatisticLoadLevel(7)
sst.setStatisticOutput("sst.statOutputCSV", {"filepath" : "./TestOutput.csv",
                                             "separator" : ", " } )
sst.setStatisticOutputOption("outputsimtime", "1")
sst.setStatisticOutputOption("outputrank", "1")
```

#### Enabling Statistics
In addition to setting the global statistic load level, you must specify which statistics to enable in order to generate them. Line 21 in the example enables all statistics for any component of type 'simpleElementExample.example1'. As all components in the example are of the same type, this enables all possible statistics. Other ways to enable statistics include:

   * Specifying a specific statistic on a specific component
   * All statistics on a component (by Component Name or by Component Type)
   * Individual statistics on component  (by Component Name or by Component Type)
   * All statistics on all components

Functions to enable statistics take an optional parameters list which allows users to configure the output frequency and/or collection type of the statistic (e.g., accumulator, histogram), as well as any statistic type-specific parameters. By default, all statistics are output once at the end of simulation and are of the accumulator type. See [General Notes on Statistics]({{site.baseurl}}/SSTPages/SSTUserPythonGlobalFunctions#sec:gen-notes-stats) for details.

**NOTE: Enabling statistics must occur after the related components are created in the python file.**


An example of a more complex statistic enables might look like this:

```py
# These components don't actually exist in SST: example only!
compA = sst.Component("statTestA", "ElementExample.StatisticsComponent1")
compB = sst.Component("statTestB", "ElementExample.StatisticsComponent2")
compC = sst.Component("statTestC", "ElementExample.StatisticsComponent3")
compD = sst.Component("statTestD", "ElementExample.StatisticsComponent3")
compE = sst.Component("statTestE", "ElementExample.StatisticsComponent3")
compF = sst.Component("statTestF", "ElementExample.StatisticsComponent4")

# Enable all statistics with load level <= 6. 
# Statistics with load level > 6 can still be enabled but ONLY if
# they are enabled specifically by name
sst.statisticLoadLevel(6)

# Enable two statistics named 'statname1' and 'statname4' on component 'compA'.
# Since these are enabled by name, they will be enabled even if their load level > 6
# These should be output every 100ns in simulated time from 0ns to 800ns.
compA.enableStatistics(["statname1", "statname4"], 
                       {"type" : "sst.AccumulatorStatistic", 
                        "rate" : "100 ns", 
                        "stopat" : "800 ns" })

# Enable all statistics on 'compB' and output them every 500ms in simulated time.
compB.enableAllStatistics({"type" : "sst.AccumulatorStatistic", 
                           "rate" : "500ms" })

# Enable all statistics for components of type 'StatisticComponent3' (i.e., compC-E)
# All of these statistics will be collected as histograms iwth 41 bins of size 10. 
# The min bin is '10-19' and any value above the largest bin will be captured in that bin.
sst.enableAllStatisticsForComponentType("ElementExample.StatisticsComponent3", 
                                       {"type":"sst.HistogramStatistic",
                                        "minvalue" : "10",
                                        "binwidth" : "10", 
                                        "numbins"  : "41", 
                                        "IncludeOutOfBounds" : "1"})

# Enable all statistics on the component named 'StatTestF' (i.e., compF)
sst.enableAllStatisticsForComponentName("StatTestF")
```


### SST Command-line Arguments 
---

The string passed on the SST command-line argument "--model-options" is parsed and becomes available to the model configuration file via the standard Python command-line argument mechanism of `sys.argv`.

For example, if `foo.py` contains:

```py
import sst
import sys
print sys.argv
sst.ext()
```

This could be the result:

```sh
$ sst --model-options="-h -x foo" foo.py
['sstsim.x', '-h', '-x', 'foo']
```

An alternative way to pass command-line arguments is by appending a `--` followed by the arguments to the sst command line, such as:
```sh
$ sst foo.py -- -h -x foo
```

### Discovering available libraries and documentation
SST Element libraries register information about their components, subcomponents, ports, subcomponent slots, parameters, and statistics with the SST Core. This information can be queried using the command-line utility, `sst-info`. The output can be filtered by passing the name of a library, or specific component/subcomponent in "lib.element" format to the utility.

```sh
$ sst-info                                  # Output: All documentation about all libraries registered with the core
$ sst-info -q                               # Output: (quiet) A list of component and subcomponent names for all libraries registered with the Core
$ sst-info simpleElementExample             # Output: All documentation about the library 'simpleElementExample'
$ sst-info simpleElementExample.example0    # Output: All documentation about the component 'simpleElementExample.example0'
```

## Element Library Extensions 

Element library writes may choose to add functionality to the Python environment for configuration.  For example, the Merlin element library does this to simplify creation of large, simple networks.  This additional functionality would show up under a sub-module to SST.  For example: `import sst.merlin`.


