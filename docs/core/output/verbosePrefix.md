---
title: verbosePrefix
---

```cpp
void verbosePrefix(const char* tempPrefix, uint32_t line, const char* file, const char* func, uint32_t output_level, uint32_t output_bits, const char* format, ...);
```

This function is the same as [`verbose()`](verbose) except that instead of prepending the Output's prefix, it prepends the provided prefix.

## Parameters
* **tempPrefix** (const char*) Prefix to prepend message with instead of the Output's configured one
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
// print message if out's verbose_level >= 16
out->verbosePrefix("Level16Output: ", CALL_INFO, 16, 0, "Configured to print rank to block maps\n");
```

### Example 2
```cpp
// print message if output's verbose_level >= 1
output->verbosePrefix("NOTICE: ", CALL_INFO, 1, 0, "Configuring for %" PRIu32 " memory levels; default level is %" PRIu32 ".\n", memoryLevels, defaultLevel);
```

## Header
```cpp
#include <sst/core/output.h>
```
