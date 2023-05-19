---
title: empty
---
```cpp
bool empty() const;
```

Return True if the Params object is empty (has no local or global parameters).

## Parameters
* **returns** none


## Example

```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"
// Example Component constructor
example0::example0(ComponentId_t id, Params& params) : Component(id) {
    out = new Output("", 1, 0, Output::STDOUT);

    //highlight-next-line
    if (params.empty()) {
        out->fatal(CALL_INFO, -1, "Error: No parameters were provided to the component named %s\n", 
                getName().c_str());
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