---
id: verbose
title: verbose()
---
## Fully Qualified Name
```cpp
SST::Output::verbose()
```

### Remarks
Output the verbose message with formatting as specified by the format parameter.

Output will only occur if specified output_level and output_bits meet criteria defined in the call to the [init function](cpp/output/init.md). The output will also be prepended with the expanded prefix set iin the call to the [init function](cpp/output/init.md).

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
void SST::Output::verbose(uint32_t line, const char* file, const char* func, uint32_t output_level, uint32_t output_bits, const char* format, ... )
```

## Parameters

**line** - Line number of calling function (use CALL_INFO macro)

**file** - File name calling function (use CALL_INFO macro)

**func** - Function name calling function (use CALL_INFO macro)

**output_level** - For output to occur, output_level must be less than or equal to verbose_level set in the call to the [init function](cpp/output/init.md).

**output_bits** - The Output object will only output the message if the set bits of the output_bits parameter are set in the verbose_mask (see the [init function](cpp/output/init.md)). It uses this logic: if (~verbose_mask & output_bits == 0) then output is enabled.

**format** - Format string. All valid formats for printf are available

**...** - Argument for format

## Return Value

**NONE**

## Examples

### Example 1
```cpp
out->verbose(CALL_INFO, 16, 0, "Configured to print rank to block maps\n");
```

### Example 2
```cpp
output->verbose(CALL_INFO, 1, 0, "Configuring for %" PRIu32 " memory levels; default level is %" PRIu32 ".\n", memoryLevels, defaultLevel);
```

## See Also

- [init()](cpp/output/init.md)
- [output()](cpp/output/output.md)
- [debug()](cpp/output/debug.md)
- [fatal()](cpp/output/fatal.md)