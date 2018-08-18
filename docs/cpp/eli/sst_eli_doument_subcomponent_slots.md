---
id: sst_eli_doument_subcomponent_slots
title: SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS
---

### Remarks

Specifies one or more slots for subcomponents. Each slot can have 1 or more object in it.

## Requirements

```cpp
#include <sst/core/elementinfo.h>

```

## Syntax

```cpp
	SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
		{ "slot1_NAME", "slot1_DESCRIPTION", "slot1_SLOT_TYPE" },
        { "slot2_NAME", "slot2_DESCRIPTION", "slot2_SLOT_TYPE" },
        { "slot3_NAME", "slot3_DESCRIPTION", "slot3_SLOT_TYPE" },
        ...
        { "slotN_NAME", "slotN_DESCRIPTION", "slotN_SLOT_TYPE" }
	)
```

## Parameters

**NAME** - the name of the subcomponent slot.

**DESCRIPTION** - A description of this subcomponent slot

**SLOT_TYPE** - The class/interface the slot expects the subcomponent to support. 

### Examples

```cpp
// .h
SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
    { "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }
)
```

As mentioned above, the bay can take 1 or more objects. Usually you will have code like this to initialize a list of subcomponents.
```cpp
//.cc
carWash::carWash( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) {
    ...

SST::SubComponentSlotInfo* info = getSubComponentSlotInfo("bay");
	if ( !info ) {
		output.fatal(CALL_INFO, -1, "Must specify at least one bay.\n");
	}
// std::vector<carWashBay*> subComps
    info->createAll(subComps);

    ...
}

```

## See Also

- [Link_Name](TBA)
- [Link_Name](TBA)
