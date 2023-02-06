---
title: fatal
---
```cpp
void fatal(uint32_t line, const char* file, const char* func, int exit_code, const char* format, ...) const;
```

Output the fatal message with formatting as specified by the format parameter and **end the simulation**. This will call MPI_Abort with the exit_code specified in the call. The message will be sent to both the output location and to stderr. The output will be prepended with the Output's prefix.

:::note
Calling this function invokes SST's emergency shutdown procedure which calls [emergencyShutdown()](../component/lifecycle/emergencyShutdown), cleans up state, and calls MPI_Abort to terminate the simulation.
:::

## Parameters
* **line** (uint32_t) Line number of calling function (use CALL_INFO macro)
* **file** (const char*) File name of calling function (use CALL_INFO macro)
* **func** (const char*) Name of calling function (use CALL_INFO macro)
* **exit_code** (int) Exit code to exit the application with
* **format** (const char*) Format string. All valid formats for printf are available
* **...** (variable) Arguments for format string
* **returns** none

## Examples

### Example 1
```cpp
out.fatal(CALL_INFO,-1, "Unknown phase!\n");
```

### Example 2
```cpp
output->fatal(CALL_INFO, -1, "Opal: address :%lld requested with fileId:%d has no space left\n", vAddress, fileID);
```

## Header
```cpp
#include <sst/core/output.h>
```