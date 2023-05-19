---
title: destructor
---

```cpp
~Output();
```

Delete an output object.

## Parameters
* **returns** none


## Example

```cpp
Output* out = new Output("", 1, 0, Output::STDOUT);

delete out;
```

## Header
```cpp
#include <sst/core/output.h>
```
