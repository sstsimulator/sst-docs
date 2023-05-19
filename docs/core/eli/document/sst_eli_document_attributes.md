---
title: SST_ELI_DOCUMENT_ATTRIBUTES
sidebar_label: Attributes
---

```cpp
/* Macro */
SST_ELI_DOCUMENT_ATTRIBUTES	( 
    { "key0", "value0" },
    { "key1", "value1" },
    { "key2", "value2" },
    ...
    { "keyX", "valueX" }
 )
```

*Availability:* Component, SubComponent

Use this macro to register arbitrary key/value pairs on an SST object. SST returns these attributes as part of `sst-info` queries and they can be used to assist with lookup and identification of objects. They have no impact on simulation itself.

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters

* **keyX** (string) A key
* **valueX** (string) A value

## Example

```cpp
 SST_ELI_DOCUMENT_ATTRIBUTES(
    { "for_testing",    "true" }
 )

```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h>
```
