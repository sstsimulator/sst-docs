---
title: getOutputLocation
---

```cpp
output_location_t getOutputLocation() const;
```

Return the Output's [output location](class). `output_location_t` is an `enum` type with this definition:
```cpp
    enum output_location_t {
        NONE,   /*!< No output */
        STDOUT, /*!< Print to stdout */
        STDERR, /*!< Print to stderr */
        FILE    /*!< Print to a file */
    };
```

## Parameters
* **returns** (output_location_t) The output location


## Examples

### Example 1
```cpp
output_location_t location = out->getOutputLocation();
```

## Header
```cpp
#include <sst/core/output.h>
```
