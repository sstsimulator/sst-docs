---
title: SST::Output
---

SST Output objects can be used for both output and debug. Some functions are only available if the Core is configured with the `--enable-debug` flag. SST objects may create their own Output objects directly or may use the SSTCore output by calling the API function [`getSimulationOutput()`](../component/output/getSimulationOutput).

SST Output objects have four major attributes:
* **Location** A location that the output prints to (e.g., stdout or to a file)
* **Prefix** A prefix string that is prepended to output before it is printed
* **Verbose Level** A level that filters out calls to output where the message level is greater than the verbose level
* **Verbose Mask** A bit mask that filters out calls to output where the bits set in the message's mask are not all set in the verbose mask

The verbose level and mask are provided to enable finer-grain control of output. The advantage of using SST output is both the control it grants over what gets printed and also that it prevents interleaving of strings when multiple threads write to output simulatenously.

## Output Location
SST Output location is controlled by a variable of type `output_location_t` which can be set to the following values:
* `Output::STDOUT` print to stdout
* `Output::STDERR` print to stderr
* `Output::FILE` print to a file
* `Output::NONE` do not print

## Convienence Macros
Several output functions take arguments identifying the calling location. To simplify passing these, the Output class provides the following macros:
* **CALL_INFO**
* **CALL_INFO_LONG**
The definition of these macros is:
```cpp
#define CALL_INFO __LINE__, __FILE__, __FUNCTION__

#if defined(__GNUC__) || defined(__clang__)
#define CALL_INFO_LONG __LINE__, __FILE__, __PRETTY_FUNCTION__
#else
#define CALL_INFO_LONG __LINE__, __FILE__, __FUNCTION__
#endif
```

:::tip Speed Check
Frequent use of output (whether SST::Output, printf, or cout) can slow down simulation. Using if statements to limit calls to output during performance-critical sections of simulation or even using `#ifdef` constructs to compile out debug output can have a noticeable impact on simulation performance for long-running simulations.
:::


## Header
```cpp
#include <sst/core/output.h>
```