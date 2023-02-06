---
title: getTimeConverter
---

```cpp
TimeConverter* getTimeConverter(const std::string& base);
TimeConverter* getTimeConverter(const UnitAlgebra& base);
```
*Availability:* Component, SubComponent, ComponentExtension

Get a time converter object for the specified time base.

## Parameters
* **base** (string, UnitAlgebra) Time base, with SI units, to generate a time converter for
* **returns** (TimeConverter*) Handle to the created time converter

## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
TimeConverter* tc0 = getTimeConverter("200ms");
UnitAlgebra ua0 = UnitAlgebra("22GHz");
TimeConverter* tc1 = getTimeConverter(ua0);
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
