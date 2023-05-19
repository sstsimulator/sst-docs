---
title: isAnonymous
---

```cpp
bool isAnonymous();
```
*Availability:* Component, SubComponent, ComponentExtension

Returns whether the calling SubComponent was loaded anonymously. When called by a Component, the function returns false.

## Parameters
* **returns** (bool) Whether the calling (Sub)Component was loaded anonymously


## Example

<!--- SOURCE_CODE: None --->
```cpp
if (isAnonymous()) {
    // Handle something one way if we were loaded anonymously
} else {
    // Handle a different way if we were loaded as a user subcomponent
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```