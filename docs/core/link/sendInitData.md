---
title: sendInitData
---

:::caution Deprecated
This function is deprecated as of SST 13. Use [sendUntimedData](sendUntimedData) instead.
:::

This function is identical to [`sendUntimedData()`](sendUntimedData).

:::note 
The `sendInitData` and `sendUntimedData` functions are identical. The latter was added when SST added the `complete()` phase to indicate that it could be used during *any* untimed phase, not just `init()`. 
:::

## Header
```cpp
#include <sst/core/link.h>
```
