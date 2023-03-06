---
title: SST_ELI_DELETE_STAT
sidebar_label: Statistics
---

```cpp
SST_ELI_DELETE_STAT("stat")
```

Use this macro inside an [`SST_ELI_DOCUMENT_STATISTICS`](../document/sst_eli_document_statistics) macro to remove a statistic from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. 

:::info Important
This macro must reside in a `public` section of the object's header file.
:::

## Parameters
* **stat** (string) The name of a statistic to remove

## Examples

### Example 1
```cpp
/* This object only counts sent messages, not received ones */
SST_ELI_DOCUMENT_STATISTICS(
    SST_ELI_DELETE_STAT("numRecv"),
    {"numSent", "# of messages sent", "", 1}
)
```
