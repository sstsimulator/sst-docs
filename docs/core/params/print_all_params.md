---
title: print_all_params
---
```cpp
void print_all_params(std::ostream& os, const std::string& prefix = "") const;
void print_all_params(Output& out, const std::string& prefix = "") const;
```

Print all key/value pairs in the Params object to the specified `std::ostream` or `SST::Output`. Optionally, prepend each printed key with the given prefix.

## Parameters
* **os** (std::ostream&) Where to print the parameters to
* **out** (SST::Output) Where to print the parameters to
* **prefix** (std::string) A prefix to prepend to each key
* **returns** none


## Example

```cpp
example::example(ComponentId_t id, Params& params) : Component(id)
{
    SST::Output* out = new Output("", 1, 0, Output::STDOUT);
    //highlight-next-line
    params.print_all_params(out);
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