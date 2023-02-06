---
id: getNumRanks
title: getNumRanks
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
RankInfo getNumRanks() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Get the number of ranks and threads-per-rank that SST is using.


## Parameters
* **returns** (RankInfo) The number of ranks and threads used by SST


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>

// Example event handler in a component
void example::handleEvent(SST::Event* ev) {
    RankInfo myInfo = getRank();
    RankInfo sstInfo = getNumRanks();
    output.output("I am located on rank %d of %d. There are %d threads on each rank and I am on thread %d\n",
        myInfo.rank, sstInfo.rank, sstInfo.thread, myInfo.thread);
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```