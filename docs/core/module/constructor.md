---
title: constructor
---

```cpp
// Module constructor
ModuleClassName(SST::Params& params, ARGS ...);
// Base SST::Module class constructor
SST::Module();
```
This constructor is called when a Sub(Component) loads a new Module.

## Parameters
* **params** (Params&) The parameter set passed into the module by the loading sub(component).
* **...** (variable) Variable arguments depending on the specific Module API definition
* **returns** (Module) The newly constructed Module

## Example

```cpp title="Example Hash Module API and Modules"
#include <sst/core/module.h>
#include <stdint.h>

// Module API - define an API for a type of module
class HashFunction: public SST::Module
{
public:
    // Tell SST that this class is a Module API
    SST_ELI_REGISTER_MODULE_API(SST::HashFunction)

    //highlight-next-line
    HashFunction(Params& params) : Module() {}
    virtual ~Module() {}

    virtual uint64_t hash(uint64_t value) =0;
};

// This is a module that implements the API defined above
class NoHash : public HashFunction 
{
public:
    SST_ELI_REGISTER_MODULE(
        NoHash,                            // Class name
        "example",                         // Library name, the 'lib' in SST's lib.name format
        "noHash",                          // Name used to refer to this module, the 'name' in SST's lib.name format
        SST_ELI_ELEMENT_VERSION(1,0,0),    // A version number
        "Hash function that does nothing", // Description
        SST::HashFunction)                 // Fully qualified name of the API this module implements

    //highlight-next-line
    NoHash(Params& params) : HashFunction(params) {}
    ~NoHash() {}

    // Implement the API function
    uint64_t hash(uint64_t value) override
    {
        return value;
    }
};
```

## Header
```cpp
#include <sst/core/module.h>
```
