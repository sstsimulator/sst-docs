---
title: is_value_array
---
```cpp
bool is_value_array(const std::string& key) const;
```

Returns whether the value associated with the given key is a valid array format (i.e., can be parsed correctly by [`find_array`](find_array)).

## Parameters
* **key** (std::string) Key whose value should be checked
* **returns** (bool) Whether the corresponding value is an array format or not.


## Examples

### Example 1
```cpp
example::example(ComponentId_t id, Params& params) : Component(id)
{
    output = new SST::Output("", 1, 0, SST::Output::STDOUT);
    if (!params.is_value_array("names")) {
        out->fatal(CALL_INFO, -1, "Error: The parameter 'names' should be an array but is not formatted correctly. Is it enclosed in square brackets?");
    }
}
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```