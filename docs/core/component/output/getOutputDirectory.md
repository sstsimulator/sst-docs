---
title: getOutputDirectory
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
std::string& getOutputDirectory() const;
```
*Availability:* Component, SubComponent, ComponentExtension

The user can ask SST to place output in a specific directory. This call returns that directory, enabling (sub)components to place their outputs in the directory as well.


## Parameters
* **returns** (string) Directory in which simulation outputs should be placed. An empty string indicates no directory was requested by the user.


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>

// Build a filename for this component's outputs
std::string filename = getName() + "_output.txt";
std::string directory = getOutputDirectory();
if (directory != "") 
    filename = directory + "/" + filename;
// Result is <OUTPUT_DIR>/<COMPONENT_NAME>_output.txt
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```