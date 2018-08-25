---
id: sst_eli_document_ports
title: SST_ELI_DOCUMENT_PORTS
---
## Fully Qualified Name
```cpp
#define SST_ELI_DOCUMENT_PORTS( ... )
```

### Remarks

Document and register ports on a component.

## Requirements

```cpp
#include <sst/core/elementinfo.h>
```

## Syntax

```cpp
// Port name, description, event type
SST_ELI_DOCUMENT_PORTS(
		{ "port1_NAME", "port1_DESCRIPTION", {"port1_EVENT_TYPE"}},
        { "port2_NAME", "port2_DESCRIPTION", {"port2_EVENT_TYPE"}},
        { "port3_NAME", "port3_DESCRIPTION", {"port3_EVENT_TYPE"}},
        ...
        { "portN_NAME", "portN_DESCRIPTION", {"portN_EVENT_TYPE"}}
	)
```

## Parameters

**port1_NAME** - A unique name for the port

**port1_DESCRIPTION** - A description on what is communication along the port. This value is shown when you run sst-info in the command line.

**port1_EVENT_TYPE** - The fully qualified class name of events that are sent from/to the port

## Examples

### Example 1
```cpp
SST_ELI_DOCUMENT_PORTS(
{ "port", "Port on which cars are sent", {"sst.Interfaces.StringEvent"}}
)
```

## See Also

- [Link_Name](TBA)
- [Link_Name](TBA)