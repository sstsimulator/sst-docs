---
title: SST_ELI_DELETE_ATTRIBUTE
sidebar_label: Attributes
---

```cpp
/* Macro */
SST_ELI_DELETE_ATTRIBUTE("key")
```

*Availability:* Component, SubComponent

Use this macro inside an [`SST_ELI_DOCUMENT_ATTRIBUTES`](../document/sst_eli_document_attributes) macro to remove an attribute from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. 

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters

* **key** (string) A key to delete

## Examples

### Example 1
```cpp
 SST_ELI_DOCUMENT_ATTRIBUTES(
   SST_ELI_DELETE_ATTRIBUTE("for_testing"), /* Assume we inherited for_testing = false */
    { "for_testing", "true" }
 )

```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
