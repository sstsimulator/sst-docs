---
title: SST_ELI_REGISTER_PROFILETOOL
sidebar_label: Profile Tool
---

```cpp
SST_ELI_REGISTER_PROFILETOOL(class_name, profile_api, "library", "name",
    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description")
```

This macro is used to register a profiling tool with SST. The library and name strings provided in this macro will be used by SST to identify the tool as "library.name". The version and description are displayed 
by `sst-info` to document the purpose and version of the profile tool. The profile_api parameter identifies which API this tool implements which controls which profiling points it can be loaded in to.

:::info Important
This macro must reside in a `public` section of the tool's header file.
:::


## Parameters

* **class_name** (class) The name of the profling tool class. This is not a string.
* **profile_api** (class) The name of the profiling API that this tool implements. This is not a string.
* **library** (string) The name of the library that this tool belongs to. If the library name does not exist, it will be created.
* **name** (string) The name that will be used to instantiate this tool in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the tool will be `library.name`.
* **SST_ELI_ELEMENT_VERSION(major, minorX, minorY)** This is a macro that specifies the version of a tool. `major`, `minorX`, and `minorY` are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.
* **description** (string) A description of the tool

## Examples

### Example 1
```cpp
class CodeSegmentCounter: public SST::ComponentCodeSegmentProfileTool
{
public:

    SST_ELI_REGISTER_PROFILETOOL(
        CodeSegmentCounter,                     // Profiler class
        SST::ComponentCodeSegmentProfileTool,   // Profiler API
        "simpleElementExample",                 // Profiler library (for Python/library lookup)
        "example1",                             // Profiler name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),         // Version of the profiler (not related to SST version)
        "Example #2, statistics & RNG",         // Description
    )

/* Rest of class */
};
```

## Header
Varies by profiling API
```cpp
#include <sst/core/profile/clockHandlerProfileTool.h>
#include <sst/core/profile/componentProfileTool.h>
#include <sst/core/profile/eventHandlerProfileTool.h>
#include <sst/core/profile/syncProfileTool.h>
#include <sst/core/profile/profiletool.h>
```