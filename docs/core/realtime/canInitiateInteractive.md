---
title: canInitiateInteractive
---

```cpp
virtual bool canInitiateInteractive() { return false; }
```

Real time actions must implement this function and return `true` if they may trigger the [interactive console](../../guides/features/debug.mdx) using [`initiateInteractive()`](./initiateInteractive.md).
SST uses this function to determine if it needs to set up the interactive console infrastructure.

## Parameters
* **returns** Whether the action can initiate the interactive console


## Example

```cpp
bool canInitiateInteractive() override { return true; }
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
