---
title: isUserSubComponentLoadableUsingAPI
---

```cpp
template <class T>
bool isUserSubComponentLoadableUsingAPI(const std::string& slot_name);
```
*Availability:* Component, SubComponent, ComponentExtension

Check to see if the user-loaded SubComponent (i.e., loaded in the simulation configuration file) that was loaded into the named SubComponent slot is loadable using the API specified by the template parameter. Note this only checks slot index 0. If any other index needs to be checked, use the SubComponentSlotInfo and [isSubComponentLoadableUsingAPI](isSubComponentLoadableUsingAPI).

## Parameters
* **slot_name** (string) Name of the SubComponent slot
* **returns** (bool) Whether the SubComponent is loadable using the template API

<!--- TODO Add example --->

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```