---
title: SST_ELI_DOCUMENT_PORTS
sidebar_label: Ports
---
```cpp
#define SST_ELI_DOCUMENT_PORTS( 
    { "port_0", "description", { "list_of_event_types_accepted"} },
    { "port_1", "description", { "list_of_event_types_accepted"} },
    ...
    { "port_X", "description", { "list_of_event_types_accepted"} }
)
```

*Availability:* Component, SubComponent

Document and register ports that can be connected on a (sub)component. SST will not allow links to be configured on undocumented ports.

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters
* **port_X** (string) Name for the port
* **description** (string) Description of the purpose or use of the port. This value is displayed when sst-info is run at the command line.
* **list_of_event_types_accepted** (list of strings) Event types that the port can handle. This value is displayed when sst-info is run at the command line.

## Example

```cpp
SST_ELI_DOCUMENT_PORTS(
{ "port", "Port on which cars are sent", {"sst.Interfaces.StringEvent"}}
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
