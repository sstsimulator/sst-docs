---
title: getRank
---

```cpp
RankInfo getRank() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the RankInfo structure holding rank and thread information for this Component. For SubComponents, returns the RankInfo structure for their parent Component.


## Parameters
* **returns** (RankInfo) The RankInfo structure containing this component's rank and thread


## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/component.h>

//highlight-next-line
RankInfo info = getRank();
out->output("I am located on rank %u, thread %u\n", info.rank, info.thread);
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```