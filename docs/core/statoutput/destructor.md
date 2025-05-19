---
title: destructor
---

```cpp
~StatisticOutputClassName();
```

SST calls each StatisticOutput's destructor prior to exiting.

## Parameters
* **returns** none

## Example
```cpp
~ExampleStatisticOutput() { }
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```
