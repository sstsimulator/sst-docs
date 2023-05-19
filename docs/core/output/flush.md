---
title: flush
---

```cpp
void flush() const;
```

Calls `std::fflush` on the output object's location.

## Parameters
* **returns** none


## Example

```cpp
out->flush();
```

## Header
```cpp
#include <sst/core/output.h>
```
