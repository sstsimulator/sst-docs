---
title: printUsage
---

```cpp
virtual void printUsage() =0;
```

This function *must* be implemented.

The function is called if the user passes the `help` parameter to the StatisticOutput or if calling [`checkOutputParameters`](./checkOutputParameters.md) on this object returns `false`. This function should print a help message explaining the parameters and any other usage information for this StatisticFieldsOutput object.

## Parameters
* **returns** none

## Example

```cpp title="CSV printUsage example"
void printUsage() override
{
    Output out("", 0, 0, Output::STDOUT);
    out.output(" : Usage - Sends all statistic output to a CSV File.\n");
    out.output(" : Parameters:\n");
    out.output(" : help = Force Statistic Output to display usage\n");
    out.output(" : filepath = <Path to .csv file> - Default is ./StatisticOutput.csv\n");
    out.output(" : separator = <separator between fields> - Default is \", \"\n");
    out.output(" : outputtopheader = 0 | 1 - Output Header at top - Default is 1\n");
    out.output(" : outputsimtime = 0 | 1 - Output Simulation Time - Default is 1\n");
    out.output(" : outputrank = 0 | 1 - Output Rank - Default is 1\n");
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```