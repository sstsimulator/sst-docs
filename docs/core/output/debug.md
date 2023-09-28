---
title: debug
---
```cpp
void debug(uint32_t line, const char* file, const char* func, uint32_t output_level, uint32_t output_bits, const char* format, ...) const;
```

This function prints a debug message. The message is only printed if the output_level and output_bits satisfy the Output object's verbose_level and verbose_mask, respectively. Further, calls to `debug()` do nothing if the SST core is not compiled with the `--enable-debug` flag.

## Parameters
* **line** (uint32_t) Line number of calling function (use CALL_INFO macro)
* **file** (const char*) File name of calling function (use CALL_INFO macro)
* **func** (const char*) Name of calling function (use CALL_INFO macro)
* **output_level** (uint32_t) For output to occur, output_level must be less than or equal to the Output's verbose_level
* **output_bits** (uint32_t) For output to occur, all bits set in this parameter must also be set in the Output's verbose_mask. It uses this logic: if (`~verbose_mask & output_bits == 0`), then output is enabled.
* **format** (const char*) Format string. All valid formats for printf are available
* **...** (variable) Arguments for format string
* **returns** none

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

## Header
```cpp
#include <sst/core/output.h>
```