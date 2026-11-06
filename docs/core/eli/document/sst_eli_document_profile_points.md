---
title: SST_ELI_DOCUMENT_PROFILE_POINTS
sidebar_label: Profile points
---

```cpp
/* Macro */
SST_ELI_DOCUMENT_PROFILE_POINTS (
    { "point_name0", "description", "Fully::Qualified::ProfilePoint::API" },
    { "point_name1", "description", "Fully::Qualified::ProfilePoint::API" },
    { "point_name2", "description", "Fully::Qualified::ProfilePoint::API" },
    ...
    { "point_nameX", "description", "Fully::Qualified::ProfilePoint::API" }
 )
```

*Availability:* Component, SubComponent

Use this macro to document that a (Sub)Component supports attaching a particular kind of profiler. The macro accepts a list of triples where each triple contains a name for the point to which a profiler can be attached, a description of the profiling point, and the API required for profilers attached to the documented point.

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters

* **point_nameX** (string) The name of the profiling point.
* **description** (string) Description of the profiling point. This value is displayed when `sst-info` is run at the command line.
* **API** (string) The fully qualified name of the profiler API that can be attached to this point. Any profiler loaded into the slot must implement the named API.

:::info
`point_nameX` must follow SST's [element naming conventions](../../../guides/dev/naming.md).
:::

For code-segment profiling points registered with [`registerProfilePoint()`](../../component/load/registerProfilePoint.md), the API is `SST::Profile::ComponentCodeSegmentProfileTool`. SST uses the documented names to check the profiling points that users give with the `--enable-profiling` command-line option. See [Component-defined profiling points](../../../guides/features/profile.mdx#component-defined-profiling-points).

## Example

<!--- SOURCE_CODE: None --->
```cpp
SST_ELI_DOCUMENT_PROFILE_POINTS(
    { "compute", "Time spent computing results", "SST::Profile::ComponentCodeSegmentProfileTool" }
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
