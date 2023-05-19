---
title: SST_ELI_DELETE_PORT
sidebar_label: Ports
---
```cpp
SST_ELI_DELETE_PORT("port")
```

*Availability:* Component, SubComponent

Use this macro inside an [`SST_ELI_DOCUMENT_PORTS`](../document/sst_eli_document_ports) macro to remove a port from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. 

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters
* **port** (string) Name of the port to remove

## Example

```cpp
/* Remove my parent's port named 'parentPort' and add a new port named 'port' */
SST_ELI_DOCUMENT_PORTS(
    SST_ELI_DELETE_PORT("parentPort"),
    { "port", "Port on which cars are sent", {"sst.Interfaces.StringEvent"}}
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
