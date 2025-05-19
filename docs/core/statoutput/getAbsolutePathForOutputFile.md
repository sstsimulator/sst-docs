---
title: getAbsolutePathForOutputFile
---

```cpp
std::string getAbsolutePathForOutputFile(const std::string& filename);
```

Use this function to place an output file called `filename` in SST's global output directory. This function should always be used when creating files so that all simulation files are placed in the same output directory. Note that if `filename` already contains an absolute path, it will not be placed in the SST output directory. If `filename` contains a relative path, it will be placed relative to the SST output directory.

:::info

The SST convention is that any absolute filepaths will be respected and all relative filepaths will be placed relative to the SST output directory.

:::

## Parameters
* **filename** (std::string&) The filename to get an absolute path for
* **returns** (std::string) The absolute filepath for the filename

## Example

```cpp
std::string filename = "statoutput_" + std::to_string(getRank().rank) + ".txt";
//highlight-next-line
filename = getAbsolutePathForOutputFile(filename);

FILE* fp = fopen(filename.c_str(), "w");
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```