---
title: destructor
---

```cpp
~Module();
```
SST calls each module's destructor prior to exiting. Components should *not* call a module's destructor manually. Modules are responsible for cleaning up all their state. 

## Parameters
* **returns** none

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

    HashFunction(Params& params) : Module() {}
    //highlight-next-line
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

    NoHash(Params& params) : HashFunction(params) {}
    //highlight-next-line
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
