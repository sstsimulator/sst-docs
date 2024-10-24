---
title: initiateInteractive
---

```caution
The interactive debugging feature is experimental and evolving. This API may change.
```

```cpp
void initiateInteractive(const std::string& msg);
```

Tell the SST simulation to enter interactive mode and drop into a debug console. The simulation will enter interactive mode when control returns to SST from the current handler. The parameter `msg` will be passed to the console to aid the user in determining why the simulation entered interactive mode.


## Parameters
* **msg** (const std::string) Message stating the reason this function was called. Intended to aid the user in determining what triggered interactive mode.
* **returns** none

## Example

```cpp
initiateInteractive("Component '%s' reached trigger point.\n", getName().c_str());
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```