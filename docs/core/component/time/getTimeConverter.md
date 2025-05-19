---
title: getTimeConverter
---

```cpp
// Deprecated, will be replaced in SST 16.0
TimeConverter* getTimeConverter(const std::string& base);
TimeConverter* getTimeConverter(const UnitAlgebra& base);
// Will replace deprecated functions in SST 16.0
TimeConverter getTimeConverter(const std::string& base);
TimeConverter getTimeConverter(const UnitAlgebra& base);
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

Get a time converter object for the specified time base.

## Parameters
* **base** (string, UnitAlgebra) Time base, with SI units, to generate a time converter for
* **returns** (TimeConverter*) Handle to the created time converter

## Example

<!--- SOURCE_CODE: None --->
```cpp
TimeConverter tc0 = getTimeConverter("200ms");
UnitAlgebra ua0 = UnitAlgebra("22GHz");
TimeConverter tc1 = getTimeConverter(ua0);
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
