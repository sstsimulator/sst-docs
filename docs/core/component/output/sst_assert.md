---
title: sst_assert
---

```cpp
void sst_assert(bool condition, uint32_t line, const char* file, const char* func, 
    int exit_code, const char* format, ...) const __attribute__((format(printf, 6, 7)));
```
*Availability:* Component, SubComponent, ComponentExtension

Convenience function for testing and reporting fatal error conditions. If the condition holds, [fatal()](fatal) will be called.

## Parameters
* **condition** (bool) Condition on which to call fatal() if false
* **line** (uint32_t) Line number of calling function (use CALL_INFO macro)
* **file** (char*) File name of calling function (use CALL_INFO macro)
* **func** (char*) Name of function that called fatal (use CALL_INFO macro)
* **exit_code** (int) Exit code to terminate with. This will be passed to MPI_Abort().
* **format** (string) Format string for error message. All valid formats for printf() are available.
* **...** (Variable) Arguments for format
* **returns** None


## Example

<!--- SOURCE_CODE: None --->
```cpp
sst_assert(fatal_error_condition, CALL_INFO, -1, "Error, something terrible happened to component %s.\n", 
    getName().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```