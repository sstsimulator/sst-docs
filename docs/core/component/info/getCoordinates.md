---
title: getCoordinates
---

```cpp
const std::vector<double>& getCoordinates() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the X, Y, Z coordinates of the component. For a SubComponent or ComponentExtension, these are the coordinates of the parent Component. These are typically used for visualization.


## Parameters
* **returns** (std::vector<double\>) A vector containing the X, Y, and Z coordinates of the component.


## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/component.h>

// Example event handler in a component
void example::handleEvent(SST::Event* ev) {
    //highlight-next-line
    std::vector<double> location = getCoordinates();
    out->output("This component is located at X=%d, Y=%d, Z=%d\n", location[0], location[1], location[2]);
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
