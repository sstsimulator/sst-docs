---
id: debug
title: debug()
---
## Fully Qualified Name
```cpp
SST::Output::debug()
```

### Remarks
Output the debug message with formatting as specified by the format parameter.

Output will only occur if specified output_level and output_bits meet criteria defined by object. The output will be prepended with the expanded prefix set in the object. NOTE: Debug outputs will only occur if the SST_DEBUG_OUTPUT is defined. this define can be set in source code or by setting the –enable-debug option during SST configuration.

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
//#1
void SST::Output::debug(uint32_t line, const char* file, const char* func, uint32_t output_level, uint32_t output_bits, const char* format, ... )
```

## Parameters

**line** - Line number of calling function (use CALL_INFO macro)

**file** - File name calling function (use CALL_INFO macro)

**func** - Function name calling function (use CALL_INFO macro)

**output_level** - For output to occur, output_level must be less than or equal to verbose_level set in object

**output_bits** -The Output object will only output the message if the set bits of the output_bits parameter are set in the verbose_mask of the object. It uses this logic: if (~verbose_mask & output_bits == 0) then output is enabled.

**format** - Format string. All valid formats for printf are available

**...** - Argument strings for format

## Return Value

**NONE**

## Examples

### Example 1
```cpp
schedout.debug(CALL_INFO, 1, 0, "Initializing MBSAllocator:");
```

### Example 2
```cpp
m_dbg.debug(CALL_INFO,1,2,"netId=%d netMapId=%d netMapSize=%d\n",
             netId, netMapId, m_netMapSize );
```

### Example 3
```cpp
schedout.debug(CALL_INFO, 7, 0, "Allocating %s \n", job -> toString().c_str());
```

## See Also

- [output()](cpp/output/output.md)
- [debug()](cpp/output/debug.md)
- [verbose()](cpp/output/verbose.md)
- [fatal()](cpp/output/fatal.md)