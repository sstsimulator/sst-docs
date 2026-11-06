---
title: isValidSigalrmAction
---

```cpp
virtual bool isValidSigalrmAction() { return true; }
```

Real time actions can override this function to return `false` if they may not be used with the `--sigalrm` command-line option. SST exits with an error if such an action is passed to `--sigalrm`. For example, the core's `sst.rt.interactive` action returns `false`.

## Parameters
* **returns** Whether the action can be used with `--sigalrm`


## Example

```cpp
bool isValidSigalrmAction() override { return false; }
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
