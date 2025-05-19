---
title: installOnSend
---

```cpp
virtual bool installOnSend() { return false; }
```

This function is called when a PortModule is registered to a port and it determines if the PortModule will be installed on the send side of a port. Override this function to return something other than `false` if needed.

:::warning
Attaching a PortModule to a port on the send side (i.e., to monitor outgoing traffic) has known performance issues. We recommend attaching to the receive side (input port) when possible or using a SubComponent instead to avoid perturbing the SST::Link send path.
:::

## Parameters
* **returns** (bool) Whether the PortModule should be installed on the send side of the port.


## Example

```cpp
bool installOnSend() override { return true; }

bool installOnSend() override { return install_on_send; } // Class var to control installation
```

## Header
```cpp
#include <sst/core/portModule.h>
```
