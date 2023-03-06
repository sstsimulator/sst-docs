---
title: SST_ELI_DELETE_PARAM
sidebar_label: Parameters
---

```cpp
/* Macro */
SST_ELI_DELETE_PARAM("param")
```

*Availability:* Component, SubComponent, Module, ProfilePoint

Use this macro inside an [`SST_ELI_DOCUMENT_PARAMS`](../document/sst_eli_document_params) macro to remove a parameter from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. 


:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters

* **param** (string) The name of the parameter to remove.

## Examples

### Example 1
```cpp
// Assume "clock_period" is part of the object's ELI
SST_ELI_DOCUMENT_PARAMS(
    SST_ELI_DELETE_PARAM("clock_period"),
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/module.h> // or
#include <sst/core/profiletool.h>
```
