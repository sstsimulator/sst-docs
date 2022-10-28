---
id: overview
title: Statistics in the SST Python Module
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

# General Notes on Statistics
  

There are a number of ways to enable statistics on Components and SubComponents. There are a set of functions that can be called directly on Component/SubComponent handles and a set of functions that are provided by the sst python module that use name or type to find the elements on which to enable statistics. There may also be specific methods provided by element library python modules. 

## Statistic load levels

It is possible to set load levels both globally and per Component/SubComponent. Each statistic defined in Components/SubComponents has a load level assigned to it in order to help with finer grained control with using the enableAllStatistics\* functions. Load levels only apply to statistics not explicitly enabled. Also, local load levels will override global load levels. 

The precedence for enabling statistics is as follows: If a statistic is explicitly enabled (does not use one of the enableAllStatistics\* functions), it will be enabled. Else, if the set load level meets the minimum for a statistic and all statistics for the component have been enabled, the statistic will be enabled. The local load level will be used, if set, otherwise the global load level will be used. 

## Statistic parameters

Statistic parameters are used to pass the parameters to the statistics subsystem and to the the statistics themselves and are specified in a python dictionary. In addition to statistic specific parameters, the following parameters are supported: 

  * **type** type of statistic 
  * **rate** collection rate of statistic. Stats will be dumped at this interval. A rate of “0ns” will cause the stats to be dumped only at the end of simulation. 
  * **startat** Time that statistic should start recording statistics 
  * **stopat** Time that statistic should stop recording statistics 
  * **resetOnRead** If set to true, statistics will reset when written out. Default is False.

