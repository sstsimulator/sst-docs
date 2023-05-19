---
title: SST_ELI_DELETE_SUBCOMPONENT_SLOT
sidebar_label: SubComponent Slots
---

```cpp
SST_ELI_DELETE_SUBCOMPONENT_SLOT("slot")
```

Use this macro inside an [`SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS`](../document/sst_eli_document_subcomponent_slots) macro to remove a subcomponent slot from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. 

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters
* **slot** (string) The name of the slot to remove

## Example

```cpp
SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
    SST_ELI_DELETE_SUBCOMPONENT_SLOT("compute_unit")
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
