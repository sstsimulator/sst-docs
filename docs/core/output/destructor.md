---
title: destructor
---

```cpp
~Output();
```

Delete an output object.

## Parameters
* **returns** none


## Examples

### Example 1
```cpp
Output* out = new Output("", 1, 0, Output::STDOUT);

delete out;
```

## Header
```cpp
#include <sst/core/output.h>
```
