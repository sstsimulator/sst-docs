---
title: SST_ELI_DOCUMENT_PARAMS
sidebar_label: Parameters
---

```cpp
/* Macro */
SST_ELI_DOCUMENT_PARAMS	( 
    { "param_name0", "description", "default_value" },
    { "param_name1", "description", "default_value" },
    { "param_name2", "description", "default_value" },
    ...
    { "param_nameX", "description", "default_value" }
 )
```

*Availability:* Component, SubComponent, Module, ProfilePoint

Use this macro to register the parameters that an SST object accepts. The macro accepts a list of triples where each triple contains the name of the parameter, a description of the parameter, and, optionally a default value. All fields are provided as strings.

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters

* **param_nameX** (string) The name of the parameter.
* **description** (string) Description of the parameter. This value is displayed when sst-info is run at the command line.
* **default_value** (string) Optional, a default value that the object assigns the parameter if the parameter is not given in the SST configuration file. If a parameter is required, make this NULL or omit it.

:::info
`param_nameX` must follow SST's [element naming conventions](../../../guides/dev/naming).
:::

## Examples

### Example 1
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicParams.h"
 SST_ELI_DOCUMENT_PARAMS(
    { "int_param",      "Integer parameter",    NULL },     // Required parameter
    { "bool_param",     "Boolean parameter",    "false"},   // Optional parameter
    { "string_param",   "String parameter",     "hello"},
    { "uint32_param",   "uint32_t parameter",   "400"},
    { "double_param",   "double parameter",     "12.5"},
    { "ua_param",       "UnitAlgebra parameter","2TB/s"},
    { "example_param",  "ExampleType parameter","key:5"},
    { "array_param",    "array parameter",      "[]"},
)
```

### Example 2
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0"
SST_ELI_DOCUMENT_PARAMS(
    { "eventsToSend", "How many events this component should send.", NULL},
    { "eventSize",    "Payload size for each event, in bytes.", "16"}
)
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/module.h> // or
#include <sst/core/profiletool.h>
```
