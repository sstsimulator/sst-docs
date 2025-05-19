---
title: installOnReceive
---

```cpp
virtual bool installOnReceive() { return false; }
```

This function is called when a PortModule is registered to a port and it determines if the PortModule will be installed on the receive side of a port. Override this function to return something other than `false` if needed.

## Parameters
* **returns** (bool) Whether the PortModule should be installed on the receive side of the port.


## Example

```cpp
bool installOnReceive() override { return true; }

bool installOnReceive() override { return install_on_receive; } // Class var to control installation
```

## Header
```cpp
#include <sst/core/portModule.h>
```
