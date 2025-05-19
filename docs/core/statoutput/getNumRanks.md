---
title: getNumRanks
---

```cpp
RankInfo getNumRanks() const;
```

Get the number of ranks and threads-per-rank that SST is using.


## Parameters
* **returns** (RankInfo) The number of ranks and threads used by SST


## Example

<!--- SOURCE_CODE: None --->
```cpp
RankInfo myInfo = getRank();
//highlight-next-line
RankInfo sstInfo = getNumRanks();
output.output("I am located on rank %d of %d. There are %d threads on each rank and I am on thread %d\n",
    myInfo.rank, sstInfo.rank, sstInfo.thread, myInfo.thread);
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```