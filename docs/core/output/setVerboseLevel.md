---
title: setVerboseLevel
---

```cpp
void setVerboseLevel(uint32_t verbose_level);
```

Sets the Output's verbose_level for [`debug()`](debug) and [`verbose()`](verbose). Output object will only output the message if those calls' `output_level` parameter are less than or equal to the Output's verbose_level.

## Parameters
* **verbose_level** (uint32_t) The level to set the Output's verbose_level to
* **returns** none


## Example

```cpp
out->setVerboseLevel(8); // Calls to out->debug() or out->verbose() with level > 8 will not be printed
```

## Header
```cpp
#include <sst/core/output.h>
```
