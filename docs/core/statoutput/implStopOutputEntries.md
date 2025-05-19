---
title: implStopOutputEntries
---

```cpp
virtual void implStopOutputEntries() =0;
```

This function *must* be implemented. 

The function is called once a Statistic has finished generating its output and indicates that the output object can finish generating the output for that statistic. For example, if the output objects `outputFields` functions were buffering data from the statistic, this function would be used to drain that data in the desired format to file, stdout, etc.

## Parameters
* **returns** none

## Examples

### Example 1
```cpp title="Finishing text output to stdout"
void implStopOutputEntries() override
{
    // implStartOutputEntries() and outputFields() append data to a string 'output_string_'. Print it.
    printf("%s\n", output_string_.c_str());
    output_string_ = ""; // Clear string for next output
}
```

### Example 2
```cpp title="Finishing CSV output to file"
void implStopOutputEntries() override
{
    // implStartOutputEntries() saved some metadata about the statistic
    // outputFields() filled the relevant fields in `m_OutputBufferArray` with data from the statistic
    // Combine these in CSV format and print using a local function 'print'

    // Output metadata identifying the stat and current simulation time
    print("%s,", m_currentComponentName.c_str());
    print("%s,", m_currentStatisticName.c_str());
    print("%s,", m_currentStatisticSubId.c_str());
    print("%s,", m_currentStatisticType.c_str());
    print("%" PRIu64",", getCurrentSimCycle());

    // Output the data filled out by the statistic
    uint32_t x = 0;
    while ( x < m_OutputBufferArray.size() ) {
        print("%s", m_OutputBufferArray[x].c_str());
        x++;
        if ( x != m_OutputBufferArray.size() ) {
            print(",");
        }
    }
    print("\n");
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```