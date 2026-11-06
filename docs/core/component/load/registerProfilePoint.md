---
title: registerProfilePoint
---

```cpp
template <typename T>
typename T::ProfilePoint* registerProfilePoint(const std::string & pointName);
```
*Availability:* Component, SubComponent, ComponentExtension

Register a profiling point. A profiling point marks a section of code that users can profile at runtime by attaching a profiling tool with the `--enable-profiling` command-line option. See [Component-defined profiling points](../../../guides/features/profile.mdx#component-defined-profiling-points) for an overview.

`T` is the profiling tool API for the point. For code-segment profiling, use `SST::Profile::ComponentCodeSegmentProfileTool`; its `ProfilePoint` provides `codeSegmentStart()` and `codeSegmentEnd()` to mark the start and end of the code to measure. The point must also be documented in the element's ELI with [`SST_ELI_DOCUMENT_PROFILE_POINTS`](../../eli/document/sst_eli_document_profile_points.md).

When a user enables tools on the point, they refer to it as `lib.type.pointName`, where `lib.type` is the element's type. If no tool is attached to the point, this function returns `nullptr`, so check the handle before using it.

## Parameters
* **T** (template parameter) Profiling tool API for the point, such as `SST::Profile::ComponentCodeSegmentProfileTool`
* **pointName** (string) Name of the profiling point to register
* **returns** (T::ProfilePoint*) Handle to the profiling point, or `nullptr` if no tool is attached to the point

## Example
<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/component.h>
#include <sst/core/profile/componentProfileTool.h>

example::example(ComponentId_t id, Params& params) : Component(id)
{
    //highlight-next-line
    compute_point = registerProfilePoint<SST::Profile::ComponentCodeSegmentProfileTool>("compute");
}

bool example::clockTic(Cycle_t cycle)
{
    if ( compute_point ) compute_point->codeSegmentStart();
    computeResults();
    if ( compute_point ) compute_point->codeSegmentEnd();
    return false;
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```