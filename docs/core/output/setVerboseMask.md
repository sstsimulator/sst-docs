---
title: setVerboseMask
---

```cpp
void setVerboseMask(uint32_t verbose_mask);
```

Sets the Output's verbose_mask for [`debug()`](debug) and [`verbose()`](verbose). Output object will only output the message if the set bits of those calls' `output_bits` parameter are also set in the verbose_mask.

The logic is:
    if (`verbose_mask & output_bits == 0`) then output is enabled
        
## Parameters
* **verbose_mask** (uint32_t) The mask to set the Output's verbose_mask to
* **returns** none


## Example

```cpp
out->setVerboseMask(3); // Output will only occur on debug/verbose if the mask bits match
```

## Header
```cpp
#include <sst/core/output.h>
```
