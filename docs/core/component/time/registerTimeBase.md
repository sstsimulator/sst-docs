---
title: registerTimeBase
---

```cpp
// Deprecated, will be replaced in SST 16.0
TimeConverter* registerTimeBase(const std::string& base, bool regAll = true);
// Will replace deprecated function in SST 16.0
TimeConverter registerTimeBase(const std::string& base, bool regAll = true);
```
*Availability:* Component, SubComponent, ComponentExtension

:::warning Deprecation
Shared TimeConverters returned by SST-Core APIs will be removed in SST 16.0. All functions accepting TimeConverter* now accept TimeConverter instead. Elements using a TimeConverter* returned by SST-Core should create a local non-shared instance as shown:
```cpp
// Old code
TimeConverter* tc = function_that_returns_tc();
// New code
TimeConverter tc = function_that_returns_tc();
```
:::

Create a new time base and optionally set it as the default time base for both the (sub)component and its links.


## Parameters
* **base** (string) Time base in SI units
* **regAll** (bool) Whether this time base should also be used as the (sub)component's and the (sub)component's links' default time base
* **returns** (TimeConverter*) A time converter for the new time base

## Example

<!--- SOURCE_CODE: None --->
```cpp
registerTimeBase("200ms");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
