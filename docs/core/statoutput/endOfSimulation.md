---
title: endOfSimulation
---

```cpp
virtual void endOfSimulation() =0;
```

This function *must* be implemented. 

The function is called at the end of simulation, allowing any pre-destructor cleanup such as closing files.

## Parameters
* **returns** none

## Examples

### Example 1
```cpp 
void endOfSimulation() override
{
    fclose(file_handle_);
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```