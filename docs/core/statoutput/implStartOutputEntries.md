---
title: implStartOutputEntries
---

```cpp
virtual void implStartOutputEntries(StatisticBase* statistic) =0;
```

This function *must* be implemented. 

The function is called just before a Statistic starts calling `outputFields` to generate output of its data fields and lets the output know which statistic is begin output. Typically, output objects use this to record statistic metadata (simulation time, statistic name, component, etc.) for later output and prepare any data structures needed for a statistic to generate output for each of its fields through subsequent `outputFields` calls.

## Parameters
* **statistic** (StatisticBase*) The statistic that is about to start outputting its fields through this StatisticFieldsOutput object
* **returns** none

## Examples

### Example 1
```cpp title="Preparing for text output"
void implStartOutputEntries(StatisticBase* statistic) override
{
    // Prepare to output a single statistic as one line using a class member 'output_string_'
    // Output looks like "StatName : StatType : SimulationTime; <fields which will be filled in by `outputFields` functions>"
    output_string_ += statistic->getFullStatName();
    output_string_ += " : ";
    output_string_ += statistic->getStatTypeName();
    output_string_ += " : ";
    output_string_ += format_string("%s" PRIu64, getCurrentSimCycle());
    output_string_ += "; ";
    // output_string_ is now ready for the statistic to append its data to it
}
```

### Example 2
```cpp title="Preparing for CSV output"
void implStartOutputEntries(StatisticBase* statistic) override
{
    // Save some metadata for filling in CSV fields during output
    m_currentComponentName  = statistic->getCompName();
    m_currentStatisticName  = statistic->getStatName();
    m_currentStatisticSubId = statistic->getStatSubId();
    m_currentStatisticType  = statistic->getStatTypeName();

    // In CSV, all statistics share a single CSV header which means that statistics with different fields such as
    // accumulator and histogram, may not necessarily use all the fields for output. Create a buffer so that this 
    // statistic can update just the relevant fields and the rest will remain '0'.
    for ( uint32_t x = 0; x < getFieldInfoArray().size(); x++ ) {
        // Initialize the Output Buffer Array strings
        m_OutputBufferArray[x] = "0";
    }
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```