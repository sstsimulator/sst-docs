---
title: initiateInteractive
---

```cpp
void initiateInteractive(const std::string& msg);
```

Calling this will cause this thread to drop into an interactive console once any pending real time actions finish executing. This only works if a console was specified on the SST command line. Otherwise it is ignored. This function takes a message describing the reason the simulation is entering interactive mode.  

## Parameters
* **mgs** (std::string) Reason that interactive console was activated.
* **returns** none


## Example

```cpp
initiateInteractive("A signal was received\n");
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
