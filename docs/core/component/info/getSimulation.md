---
title: getSimulation
---

:::warning Deprecated
This function is deprecated as of SST 13. All functions previously available through SST `getSimulation()` are now directly available through the component classes.
:::

```cpp
Simulation* getSimulation();
```
*Availability:* Component, SubComponent, ComponentExtension

Return the SST simulation instance. Most APIs available via the simulation object are also available through the Component API so this function should not generally be necessary. 


## Parameters
* **returns** (Simulation*) Pointer to the simulation instance

## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/cassini/cacheLineTrack.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/cassini/cacheLineTrack.cc"
void cacheLineTrack::notifyAccess(const CacheListenerNotification& notify)
{
    /** Access handling code here */

    const NotifyAccessType notifyType = notify.getAccessType();
    switch (notifyType) {
        case READ:
        case WRITE:
            auto iter = cacheLines.find(cacheAddr);
            if (iter == cacheLines.end()) {
                // insert a new address 
                //highlight-next-line
                SimTime_t now = getSimulation()->getCurrentSimCycle();
                iter = (cacheLines.insert({cacheAddr, lineTrack(now)})).first;

                /** Remaining access handling code here */
            }
    }
}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
