---
title: getPrefix
---

```cpp
std::string getPrefix() const;
```

Gets the object's prefix

## Parameters
* **returns** (std::string) The Output's prefix


## Example

```cpp
Output* out = new Output("MyPrefix: ", 1, 0, Output::FILE);

std::string prefix = out->getPrefix(); // Returns 'MyPrefix: '
```

## Header
```cpp
#include <sst/core/output.h>
```
