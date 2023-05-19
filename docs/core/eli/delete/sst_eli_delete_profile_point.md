---
title: SST_ELI_DELETE_PROFILE_POINT
sidebar_label: Profile points
---

```cpp
/* Macro */
SST_ELI_DELETE_PROFILE_POINT("point_name")
```

*Availability:* Component, SubComponent

Use this macro inside an [`SST_ELI_DOCUMENT_PROFILE_POINTS`](../document/sst_eli_document_profile_points) macro to remove a profile point from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. 

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters

* **point_name** (string) The name of the profiling point to remove.

## Example

```cpp
SST_ELI_DOCUMENT_PROFILE_POINTS(
   SST_ELI_DELETE_PROFILE_POINT("clock_profiler")
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
