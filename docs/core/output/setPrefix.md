---
title: setPrefix
---

```cpp
void setPrefix(const std::string& prefix);
```

Sets the Output's prefix.

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
* **returns** none


## Examples

### Example 1
```cpp
out->setPrefix("All output begins with this ");
```

## Header
```cpp
#include <sst/core/output.h>
```
