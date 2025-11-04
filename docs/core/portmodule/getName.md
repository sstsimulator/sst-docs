---
title: getName
---

```cpp
const std::string& getName() const;
```
Returns a globally unique name for the PortModule in the format "component_name.port_name.module_index". "component_name" is the name of the component to which the PortModule is attached. "port_name" is the name of the port on which the PortModule is attached. When more than one PortModule is attached to a single port, they are placed in a vector with an index "module_index". When only a single PortModule is attached to a port, "port_index" will be "0". This name is used in Statistics.

## Parameters
* **returns** (string) PortModule name


## Example

<!--- SOURCE_CODE: None --->
```cpp
output.output("My name is %s\n", getName().c_str());
```

## Header
```cpp
#include <sst/core/portModule.h>
```