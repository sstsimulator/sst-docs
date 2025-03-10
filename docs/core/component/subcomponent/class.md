---
title: SST::SubComponent
---

A SubComponent is a modular piece of functionality that can be dynamically loaded into a Component or another SubComponent. SubComponents can be declared in the SST configuration input file (i.e., a *user* subcomponent) or can be loaded directly by a (sub)component such that the user may not have control over which component is loaded (i.e., an *anonymous* subcomponent). A parent (sub)Component interacts directly with its loaded subcomponent via function calls. SubComponents and their parents are always co-located when SST is running in parallel. 

SubComponents must inherit from a SubComponent API which must in turn inherit from the SST::SubComponent class. This allows SST to load any SubComponent that inherits from a given API into a slot designed for that API. 

## User versus Anonymous SubComponents
|User   | Anonymous   |
| ---   | ---         |
| Defined in the simulation input file | Defined by the (sub)component that loads it |
| Parameters come from simulation input | Parameters come from parent (sub)component |
| Can have links | Can only use its parent's links |

## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.cc --->
```cpp title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h"
#include <sst/core/subcomponent.h>

// SubComponent API - define an API for a type of subcomponent
class basicSubComponentAPI : public SST::SubComponent 
{
public:
    // Tell SST that this class is a SubComponent API
    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)

    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}
    virtual ~basicSubComponentAPI() {}

    virtual int compute (int num) =0;
    virtual std::string compute (std::string comp) =0;
};

// This is a subcomponent that implements the API defined above
class basicSubComponentIncrement : public basicSubComponentAPI 
{
public:
    SST_ELI_REGISTER_SUBCOMPONENT(
        basicSubComponentIncrement,     // Class name
        "simpleElementExample",         // Library name, the 'lib' in SST's lib.name format
        "basicSubComponentIncrement",   // Name used to refer to this subcomponent, the 'name' in SST's lib.name format
        SST_ELI_ELEMENT_VERSION(1,0,0), // A version number
        "SubComponent that increments a value", // Description
        SST::simpleElementExample::basicSubComponentAPI) // Fully qualified name of the API this subcomponent implements

    // Other ELI macros as needed for parameters, ports, statistics, and subcomponent slots
    SST_ELI_DOCUMENT_PARAMS( { "amount", "Amount to increment by", "1" } )

    basicSubComponentIncrement(ComponentId_t id, Params& params);
    ~basicSubComponentIncrement();

    // Implement the API functions
    int compute( int num) override;
    std::string compute( std::string comp ) override;

private:
    int amount;
};
```
```cpp title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.cc"
#include "sst_config.h"
#include "basicSubComponent_subcomponent.h"

basicSubComponentIncrement::basicSubComponentIncrement(ComponentId_t id, Params& params) :
    basicSubComponentAPI(id, params) 
{
    amount = params.find<int>("amount",  1);
}

basicSubComponentIncrement::~basicSubComponentIncrement() { }

int basicSubComponentIncrement::compute( int num )
{
    return num + amount;
}

std::string basicSubComponentIncrement::compute ( std::string comp )
{
    return "(" + comp + ")" + " + " + std::to_string(amount);
}
```

## Header
```cpp
#include <sst/core/subcomponent.h>
```
