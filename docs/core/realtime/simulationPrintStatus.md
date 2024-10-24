---
title: simulationPrintStatus
---

```cpp
void simulationPrintStatus(bool component_status);
```

Causes the local thread/rank to print its status. If `component_status` is `true`, this will also invoke [`print_status()`](../component/lifecycle/printStatus.md) on every component belonging to the local thread/rank.

## Parameters
* **component_status** (bool) Whether to also print component status or not.
* **returns** none


## Example
```cpp
simulationPrintStatus(true); // Print status of all components
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
