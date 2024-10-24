---
title: canInitiateCheckpoint
---

```cpp
virtual bool canInitiateCheckpoint() { return false; }
```

Real time actions must implement this function and return `true` if they may trigger a checkpoint. 
SST uses this function to determine if it needs to initialize the checkpoint infrastructure.

## Parameters
* **returns** Whether the action can generate a checkpoint


## Example

```cpp
bool canInitiateCheckpoint() override { return true; }
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
