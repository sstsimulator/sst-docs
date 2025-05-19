---
title: startOfSimulation
---

```cpp
virtual void startOfSimulation() =0;
```

This function *must* be implemented.

The function is called when SST has constructed the simulation objects and is ready to begin running the simulation. Any setup that needs to be done (e.g., creating files, initializing buffers, etc.) can be done in this function.

:::info
SST provides a global output directory per simulation which can be specified by the user via the `--output-directory=` command line option. StatisticOutput objects should use the [`getAbsolutePathForOutputFile`](./getAbsolutePathForOutputFile) function to place files in this directory. SST will have already checked the directory for write permissions.
:::

## Parameters
* **returns** none

## Example
This is example shows a simplified version of SST's CSV StatisticOutput `startOfSimulation`.

```cpp title="Simulation start for SST's CSV output (simplified)"
void startOfSimulation() override
{
    // Create a unique filename based on a user-provided base name
    // Place it in SST's output directory
    std::string filename = m_FilePath;
    if ( 1 < getNumRanks().rank > ) { // multi-rank, append rank number to filename
        std::string rankstr = "_" + std::to_string(getRank().rank);

        // Insert rank just before extension or at end of filename if no extension
        size_t index = m_FilePath.find_last_of(".");
        if ( std::string::npos != index ) {
            filename.insert(index, rankstr);
        } else {
            filename += rankstr;
        }
    }
    filename = getAbsolutePathForOutputFile(filename);

    // Open the CSV file for writing
    m_hFile = fopen(filename.c_str(), "w");
    if ( nullptr == m_hFile ) {
        getSimulationOutput().fatal(CALL_INFO, 1, " : StatisticOutputCSV: Problem opening file %s - %s\n", m_FilePath.c_str(), strerror(errno));
    }

    // Initialize the OutputBufferArray with std::string objects
    for ( FieldInfoArray_t::iterator it_v = getFieldInfoArray().begin(); it_v != getFieldInfoArray().end(); it_v++ ) {
        m_OutputBufferArray.push_back(std::string(""));
    }

    // Print out a CSV header if requested
    if ( true == m_outputTopHeader ) {
        fprintf(m_hFile, "ComponentName%s", m_Separator.c_str());
        fprintf(m_hFile, "StatisticName%s", m_Separator.c_str());
        fprintf(m_hFile, "StatisticSubId%s", m_Separator.c_str());
        fprintf(m_hFile, "StatisticType%s", m_Separator.c_str());

        if ( true == m_outputSimTime ) fprintf(m_hFile, "SimTime%s", m_Separator.c_str());
        if ( true == m_outputRank ) fprintf(m_hFile, "Rank%s", m_Separator.c_str());

        // Output field headers from the registered statistics
        FieldInfoArray_t::iterator it_v = getFieldInfoArray().begin();
        StatisticFieldInfo* statField = *it_v;

        while ( it_v != getFieldInfoArray().end() ) {
            statField    = *it_v;
            fprintf(m_hFile, "%s.%s", statField->getFieldName().c_str(), statField->getFieldType().c_str());

            it_v++;
            // If not the last field, tack on a separator
            if ( it_v != getFieldInfoArray().end() ) {
                fprintf(m_hFile, "%s", m_Separator.c_str());
            }
        }
        fprint(m_hFile, "\n");
    }
    // Done - file opened and header printed
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```