---
title: constructor
---

```cpp
Output(const std::string& prefix, uint32_t verbose_level, uint32_t verbose_mask, 
        output_location_t location, const std::string& localoutputfilename = "");

// Default constructor
Output();
```

Create a new Output object. If the default constructor is used, [Output::init()](init) must be called to initialize the object.

## Parameters
* **prefix** (std::string) Prefix to be prepended to all strings emitted by calls to [`debug()`](debug), [`verbose()`](verbose), [`fatal()`](fatal) and [`output()`](../output) (depends on which variant of `output()` is used). No space will be inserted between the prepended prefix string and the normal output string. The following escape codes may be used in prefixes:
    - `\@f` Name of the file in which output call was made.
    - `\@l` Line number in the file in which output call was made.
    - `\@p` Name of the function from which output call was made.
    - `\@r` MPI rank of the calling process.  Will be empty if MPI_COMM_WORLD size is 1.
    - `\@R` MPI rank of the calling process.  Will be 0 if MPI_COMM_WORLD size is 1.
    - `\@i` Thread Id of the calling process.  Will be empty if number of threads is 1.
    - `\@I` Thread Id of the calling process.  Will be 0 if number of threads is 1.
    - `\@x` Rank information of the calling process.  Will be empty if number of MPI ranks and number of threads are both 1. Same as [`\@r:\@i`]
    - `\@X` Rank information of the calling process.  Will be [0.0] if number of MPI ranks and number of threads are both 1. Same as [`\@R:\@I`]
    - `\@t` Simulation time.  Will be the raw simulation cycle time.
* **verbose_level** (uint32_t) Debugging output level. Calls to debug() and verbose() are only output if their output_level parameter is less than or equal to the verbose_level currently set for the object.
* **verbose_mask** (uint32_t) Bitmask of allowed message types for debug() and verbose(). The Output object will only output the message if the set bits of the output_bits parameter are set in the verbose_mask of the object. It uses this logic: if (`~verbose_mask & output_bits == 0`) then output is enabled.
* **location**  (output_location_t) Output location. Output can be directed to STDOUT, STDERR, FILE, or NONE.  If FILE output is selected, the output will be directed to the file defined by the --debug-file runtime parameter, or to the file 'sst_output' if the --debug-file parameter is not defined.  If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name.
* **localoutputfilename** (std::string) If not an empty string and the location parameter is set to FILE, send the output of this object to this file instead of SST's default file. If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name.
* **returns** An SST::Output object


## Examples

### Example 1
```cpp

// Allocate a new output object and send to stdout
// Prefix is empty, verbose set to 1, no mask used
SST::Output* out = new Output("", 1, 0, Output::STDOUT);

// Use default constructor
// Initialize with a prefix of "CPU "
SST::Output* out1 = new Output();
out1->init("CPU ", 4, 0, Output::STDERR);
```

## Header
```cpp
#include <sst/core/output.h>
```
