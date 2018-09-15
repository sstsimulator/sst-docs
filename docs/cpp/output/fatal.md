---
id: fatal
title: fatal()
---
## Fully Qualified Name
```cpp
SST::Output::fatal()
```

### Remarks
Output the fatal message with formatting as specified by the format parameter.

Message will be sent to the output location and to stderr. The output will be prepended with the expanded prefix set in the object. NOTE: fatal() will call MPI_Abort(exit_code) to terminate simulation.

## Requirements

Main definition
```cpp
 #include <sst/core/output.h>
```

Also included in the following
```cpp
 #include <sst/core/simulation.h>
 #include <sst/core/component.h>
```

## Syntax

```cpp
void SST::Output::fatal(uint32_t line, const char* file, const char* func, uint32_t exit_code, const char* format, ... )
```

## Parameters

**line** - Line number of calling function (use CALL_INFO macro)

**file** - File name calling function (use CALL_INFO macro)

**func** - Function name calling function (use CALL_INFO macro)

**exit_code** - The exit code used for termination of simulation. will be passed to MPI_Abort()

**format** - Format string. All valid formats for printf are available

**...** - Argument strings for format

## Return Value

**NONE**

## Examples

### Example 1
```cpp
this->out.fatal(CALL_INFO,-1, "Unknown phase!\n");
```

### Example 2
```cpp
output->fatal(CALL_INFO, -1, "Opal: address :%lld requested with fileId:%d has no space left\n", vAddress, fileID);
```

## See Also

- [init()](cpp/output/init.md)
- [output()](cpp/output/output.md)
- [debug()](cpp/output/debug.md)
- [verbose()](cpp/output/verbose.md)