---
title: checkOutputParameters
---

```cpp
virtual bool checkOutputParameters() =0;
```

This function *must* be implemented. 

The function is called after an output object has been constructed and lets the simulation know if the parameters given to the output object are valid or if an error should occur. If this function returns false then SST will also call `printUsage` on the output object.

:::info
SST provides a global output directory per simulation which can be specified by the user via the `--output-directory=` command line option. StatisticOutput objects should use the [`getAbsolutePathForOutputFile`](./getAbsolutePathForOutputFile) function to place files in this directory. SST will have already checked the directory for write permissions.
:::

## Parameters
* **returns** (bool) Whether the output object's parameters are OK.

## Example

```cpp title="Validating parameters"
bool checkOutputParameters() override
{
    bool foundKey;

    // Look for Help Param
    getOutputParameters().find<std::string>("help", "1", foundKey);
    if ( true == foundKey ) {
        return false; // User requested help message
    }

    // Get the parameters
    m_separator       = getOutputParameters().find<std::string>("separator", ", ");
    m_filePath        = getOutputParameters().find<std::string>("filepath", "StatisticOutput.csv");
    m_outputTopHeader = getOutputParameters().find<bool>("outputtopheader", true);
    m_outputSimTime   = getOutputParameters().find<bool>("outputsimtime", true);
    m_outputRank      = getOutputParameters().find<bool>("outputrank", true);

    // Perform some checking on the parameters
    if ( 0 == m_Separator.length() ) {
        return false; // bad parameter - no separator given
    }
    if ( 0 == m_FilePath.length() ) {
        return false; // bad parameter - no file given
    }

    return true;
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```