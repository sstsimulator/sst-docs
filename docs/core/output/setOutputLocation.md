---
title: setOutputLocation
---

```cpp
void setOutputLocation(output_location_t location);
```

Set the location the output will print to. Options are `Output::STDOUT`, `Output::STDERR`, `Output::FILE`, and `Output::NONE`.

## Parameters
* **location** (output_location_t) Location for output
* **returns** none


## Examples

### Example 1
```cpp
out->setOutputLocation(Output::FILE);
```

## Header
```cpp
#include <sst/core/output.h>
```
