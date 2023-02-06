---
id: requireLibrary
title: requireLibrary
---

```cpp
void requireLibrary(const std::string& name);
```
*Availability:* Component, SubComponent, ComponentExtension

This function indicates to SST that a specific library is required for this simulation. Calling this function causes the SST Factory to verify that the required library is loaded.

This function should ** *rarely* ** be required, as most dependencies are automatically detected by SST. Instances in which this function may be required to ensure that a dependence is identified include:
* A component/subcomponent/extension uses an event from another library and that event is not wholly defined in a header file
* A component/subcomponent/extension uses a class from another library and that class does not have ELI information (e.g., is not a component or subcomponent)

## Parameters
* **name** (string) Name of library that is required
* **returns** None


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>

// Ensure that the merlin library is loaded
requireLibrary("merlin");
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
