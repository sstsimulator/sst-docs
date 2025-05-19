---
title: Module
---

Modules are lightweight, dynamically-loadable pieces of functionality. They can be [loaded into Components](../component/load/loadModule.md). A Module is always co-located with the Component it is loaded into when running SST in parallel.Modules do not have any defined API and have no access to SST APIs. Modules requiring any API access, for example, Clocks, Statistics, etc., need to be defined as [SubComponents](../component/subcomponent/class.md) instead.

Modules must inherit from a Module API which must in turn inherit from the SST::Module class. This allows SST to load any Module that inherits from a given API into a slot designed for that API. 

## Example
The following example shows a module to allow swapping different hash functions. The API contains a function that hashes a `value` into a `hash_value` and each module implements a different hash function. A Component could load "example.noHash" to skip hashing and "example.linearHash" to apply a linear hash.

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
    ~NoHash() {}

    // Implement the API function
    uint64_t hash(uint64_t value) override
    {
        return value;
    }
};

// Another module that implements the API defined above
class Linear : public HashFunction
{
    SST_ELI_REGISTER_MODULE(
        Linear,                            // Class name
        "example",                         // Library name, the 'lib' in SST's lib.name format
        "linearHash",                      // Name used to refer to this module, the 'name' in SST's lib.name format
        SST_ELI_ELEMENT_VERSION(1,0,0),    // A version number
        "Linear hash function",            // Description
        SST::HashFunction)                 // Fully qualified name of the API this module implements

    Linear(Params& params) : HashFunction(params) {}
    ~Linear() {}

    // Implement the API function
    uint64_t hash(uint64_t value) override
    {
        return 1103515245*value + 12345;
    }
};
```

## Header
```cpp
#include <sst/core/module.h>
```