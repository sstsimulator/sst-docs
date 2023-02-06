---
title: debugPrefix
---
```cpp
void debugPrefix(const char* tempPrefix, uint32_t line, const char* file, const char* func, uint32_t output_level, uint32_t output_bits, const char* format, ...) const;
```

This function is the same as [`debug()`](debug) except that instead of prepending the Output's prefix, it prepends the provided prefix.

## Parameters
* **tempPrefix** (const char*) Prefix to prepend message with instead of the Output's configured one
* **line** (uint32_t) Line number of calling function (use CALL_INFO macro)
* **file** (const char*) File name of calling function (use CALL_INFO macro)
* **func** (const char*) Name of calling function (use CALL_INFO macro)
* **output_level** (uint32_t) For output to occur, output_level must be less than or equal to the Output's verbose_level
* **output_bits** (uint32_t) For output to occur, all bits set in this parameter must also be set in the Output's verbose_mask. It uses this logic: if (`~verbose_maks & output_bits == 0`), then output is enabled.
* **format** (const char*) Format string. All valid formats for printf are available
* **...** (variable) Arguments for format string
* **returns** none

## Examples

### Example 1
```cpp
schedout.debugPrefix("DEBUG_1", CALL_INFO, 1, 0, "Initializing MBSAllocator:");
```

## Header
```cpp
#include <sst/core/output.h>
```