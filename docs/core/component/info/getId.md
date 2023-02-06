---
title: getId
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
ComponentId_t getId() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the unique ID assigned to (Sub)Component by SST.


## Parameters
* **returns** (ComponentId_t) The unique ID assigned to the (Sub)Component. 


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>

// Example event handler in a component
void example::handleEvent(SST::Event* ev) {
    out->output("Component (%" PRIu64 ") received an event\n", getId());
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```