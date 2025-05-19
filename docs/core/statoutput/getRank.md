---
title: getRank
---

```cpp
RankInfo getRank() const;
```
Returns the RankInfo structure holding rank and thread information for this StatisticOutput object.


## Parameters
* **returns** (RankInfo) The RankInfo structure containing this output object's rank and thread


## Example

<!--- SOURCE_CODE: None --->
```cpp
//highlight-next-line
RankInfo info = getRank();
out->output("I am located on rank %u, thread %u\n", info.rank, info.thread);
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```