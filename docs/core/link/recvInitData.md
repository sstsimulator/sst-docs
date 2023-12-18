---
title: recvInitData
---

:::warning Deprecated
This function is deprecated as of SST 13. Use [recvUntimedData](recvUntimedData) instead.
:::

This function is identical to [`recvUntimedData()`](recvUntimedData).

:::note 
The `recvInitData` and `recvUntimedData` functions are identical. The latter was added when SST added the `complete()` phase to indicate that it could be used during *any* untimed phase, not just `init()`. 
:::


## Header
```cpp
#include <sst/core/link.h>
```
