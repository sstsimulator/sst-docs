---
id: getRank
title: getRank
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
RankInfo getRank() const;
```
*Availability:* Component, SubComponent, ComponentExtension

Returns the RankInfo structure holding rank and thread information for this Component. For SubComponents, returns the RankInfo structure for their parent Component.


## Parameters
* **returns** (RankInfo) The RankInfo structure containing this omponent's rank and thread


## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/component.h>

RankInfo info = getRank();
out->output("I am located on rank %u, thread %u\n", info.rank, info.thread);
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```