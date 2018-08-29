---
id: init
title: init()
---
## Fully Qualified Name
```cpp
SST::Output::init()
```

### Remarks

Sets a prefix that is prepended to most strings emitted, parameters for when to emit verbose/debug strings, and where strings should be emitted (STDOUT, STDERR, or a FILE).

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
void SST::Output::init(const std::string& prefix, uint32_t verbose_level, uint32_t verbose_mask, output_location_t location, std::string localoutputfilename = "")
```

## Parameters

**prefix** - Prefix to be prepended to all strings emitted by calls to [debug()](cpp/output/debug.md), [verbose()](cpp/output/verbose.md), [fatal()](cpp/output/fatal.md) and possibly [output()](cpp/output/output.md). NOTE: No space will be inserted between the prepended prefix string and the normal output string. Prefix can contain the following escape codes:

- @f Name of the file in which output call was made.
- @l Line number in the file in which output call was made.
- @p Name of the function from which output call was made.
- @r MPI rank of the calling process. Will be empty if MPI_COMM_WORLD size is 1.
- @R MPI rank of the calling process. Will be 0 if MPI_COMM_WORLD size is 1.
- @i Thread Id of the calling process. Will be empty if number of threads is 1.
- @I Thread Id of the calling process. Will be 0 if number of threads is 1.
- @x Rank information of the calling process. Will be empty if number of MPI ranks and number of threads are both 1 Same as [@r:@i]
- @X Rank information of the calling process. Will be [0.0] if number of MPI ranks and number of threads are both 1 Same as [@R:@I]
- @t Simulation time. Will be the raw simulation cycle time retrieved from the SST Core.

**verbose_level** - 	Debugging output level. Calls to [debug()](cpp/output/debug.md), [verbose()](cpp/output/verbose.md), and [fatal()](cpp/output/fatal.md) are only output if their output_level parameter is less than or equal to the verbose_level currently set for the object

**verbose_mask** - Bitmask of allowed message types for [debug()](cpp/output/debug.md), [verbose()](cpp/output/verbose.md), and [fatal()](cpp/output/fatal.md). The Output object will only output the message if the set bits of the output_bits parameter are set in the verbose_mask of the object. It uses this logic: if (~verbose_mask & output_bits == 0) then output is enabled.

**location** - Output location. Output will be directed to STDOUT, STDERR, FILE, or NONE. If FILE output is selected, the output will be directed to the file defined by the –debug runtime parameter, or to the file 'sst_output' if the –debug parameter is not defined. If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name.

One of:
- SST::Output::STDOUT
- SST::Output::STDERR
- SST::Output::FILE
- SST::Output::NONE

**localoutputfilename** - Send the output of this class to the file identified in localoutputfilename instead of the of the normal output file set by the run time parameter –debug-file. **location** parameter must be set to FILE. This parameter is intended for special case debug purposes only.

## Return Value

**NONE**

## Examples

### Example 1
```cpp
SST::Output output;
output.init("bay-" + getName() + "-> ", 1, 0, SST::Output::STDOUT);
```

## See Also

- [output()](cpp/output/output.md)
- [debug()](cpp/output/debug.md)
- [verbose()](cpp/output/verbose.md)
- [fatal()](cpp/output/fatal.md)