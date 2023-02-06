---
title: setFileName
---

```cpp
void setFileName(const std::string& filename);
```

Set the file the output will print to if the [output location](setOutputLocation) is set to Output::FILE. If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name.

## Parameters
* **filename** (std::string) File for output
* **returns** none


## Examples

### Example 1
```cpp
out->setOutputLocation(Output::FILE);
out->setFileName("simulation_output.txt")
```

## Header
```cpp
#include <sst/core/output.h>
```
