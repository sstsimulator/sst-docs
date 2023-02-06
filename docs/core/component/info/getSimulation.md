---
id: getSimulation
title: getSimulation
---
<!---
SAND202X-XXXX X
Source: location of source document if any
--->
```cpp
Simulation* getSimulation();
```
*Availability:* Component, SubComponent, ComponentExtension

Return the SST simulation instance. Most APIs available via the simulation object are also available through the Component API so this function should not generally be neccessary. 

:::caution

This function may be removed in a future release.

:::

## Parameters
* **returns** (Simulation*) Pointer to the simulation instance

## Examples

<!--- SOURCE_CODE: sst-elements/src/sst/elements/cassini/cacheLineTrack.cc --->
### Example 1
```cpp
// Excerpt from cassini/cacheLineTrack.cc
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