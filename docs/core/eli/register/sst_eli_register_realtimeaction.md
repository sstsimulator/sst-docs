---
title: SST_ELI_REGISTER_REALTIMEACTION
sidebar_label: RealTimeAction
---

```cpp
SST_ELI_REGISTER_REALTIMEACTION(class_name, "library", "name", 
    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description")
```

RealTimeActions must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the action as "library.name". The version and description fields document the purpose and version of the action. 

:::info Important
This macro must reside in a `public` section of the RealTimeAction's header file.
:::


## Parameters

* **class_name** (class) The name of the RealTimeAction class. This is not a string.
* **library** (string) The name of the library that this action belongs to. If the library name does not exist, it will be created.
* **name** (string) The name that will be used to instantiate this action on the command line or in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the action will be `library.name`.
* **SST_ELI_ELEMENT_VERSION(major, minorX, minorY)** This is a macro that specifies the version of the action. `major`, `minorX`, and `minorY` are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.
* **description** (string) A description of the action

## Example

### Registering a RealTimeAction
The name of the example action below will be `examples.helloExample`.

```cpp title="helloExample.h"
#include <sst/core/realtimeAction.h>
#include <sst/core/rankInfo.h>

class ExampleRealTimeAction : public SST::RealTimeAction
{
    public:

    // ELI macro to register action with SST-Core
    SST_ELI_REGISTER_REALTIMEACTION(
        ExampleRealTimeAction,                  // Class
        "examples",                             // Library name
        "helloExample",                         // Element name
        SST_ELI_ELEMENT_VERSION(0, 1, 0),       // Version
        "Prints hello in response to a signal") // Description

    ExampleRealTimeAction(); // Constructor
    ~ExampleRealTimeAction(); // Destructor

    virtual void execute() override; // Action to take
}
```


## Header
```cpp
#include <sst/core/realtimeAction.h>
```
