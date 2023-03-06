---
title: SST_ELI_REGISTER_SUBCOMPONENT_API
sidebar_label: SubComponent API
---

```cpp
SST_ELI_REGISTER_SUBCOMPONENT_API(class_name)
```

SubComponents implement a specific API and SubComponent slots require any SubComponents loaded into them to implement a specific API. This macro registers SubComponent APIs with SST Core. If a SubComponent API inherits from another registered SubComponent API (as opposed to, for example, SST::SubComponent directly), the API should instead register using the [`SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API`](sst_eli_register_subcomponent_derived_api) macro.

:::info Important
This macro must reside in a `public` section of the SubComponent API's header file.
:::


## Parameters

* **class_name** (class) The name of the SubComponent API class. This is not a string.

## Examples
<!--- SOURCE_CODE: sst-elements/src/sst/elements/basicSubComponent_subcomponent.h --->

### Example 1
```cpp
class basicSubComponentAPI : public SST::SubComponent
{
public:
    /* 
     * Register this API with SST so that SST can match subcomponent slots to subcomponents 
     */
    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)
 
    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) { }
    virtual ~basicSubComponentAPI() { }

    // These are the two functions described in the comment above
    virtual int compute( int num ) =0;
    virtual std::string compute( std::string comp) =0;
};
 ```

## Header
```cpp
#include <sst/core/subcomponent.h>
```
