---
title: SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS
sidebar_label: SubComponent Slots
---

```cpp
#define SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS( 
    { "slot_name_0", "description", "Fully::Qualified::SubComponent::API" },
    { "slot_name_1", "description", "Fully::Qualified::SubComponent::API" },
    ...
    { "slot_name_x", "description", "Fully::Qualified::SubComponent::API" }
 )
```

List of slots that the (sub)component exposes. A single slot can have multiple subcomponents assigned to it. SST does not allow subcomponents to be loaded into slots that are not documented with this macro.

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters
* **slot_name_x** (string) A name for the slot.
* **description** (string) A description of the purpose and/or use of the slot.
* **API** (string) The fully qualified name of the SubComponent API that this slot expects. Any subcomponent loaded into the slot must implement the named API.

## Examples

### Example 1
```cpp
/* simpleElementExample/basicSubComponent_component.h */
SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
    { "compute_unit", 
    "The compute unit that this component will use to operate on events",
    "SST::simpleElementExample::basicSubComponentAPI"}
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
