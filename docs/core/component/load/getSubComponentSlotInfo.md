---
title: getSubComponentSlotInfo
---

```cpp
SubComponentSlotInfo* getSubComponentSlotInfo(const std::string& name, bool fatalOnEmptyIndex = false);
```
*Availability:* Component, SubComponent, ComponentExtension

Return information about the SubComponent(s) that have been loaded into the named slot. 

## Parameters
* **name** (string) Name of the slot
* **fatalOnEmptyIndex** If true, throw a fatal error if no SubComponents were loaded into the specified slot
* **returns** (SubComponentSlotInfo*) A pointer to the SubComponentSlotInfo object holding information (types, parameters, etc.) about the SubComponents that were loaded into the specified slot.


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/cacheFactory.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/cacheFactory.cc"
#include <sst_config.h>
#include <sst/core/component.h>

// Excerpt from cache constructor. Cache listeners monitor cache traffic. 
// Multiple listeners can be loaded into the 'listener' subcomponent slot.
void Cache::createListeners(Params& params) {
    //highlight-next-line
    SubComponentSlotInfo* lists = getSubComponentSlotInfo("listener");
    if (lists) {
        for (int i = 0; i < lists->getMaxPopulatedSlotNumber(); i++) {
            if (lists->isPopulated(i))
                listeners_.push_back(lists->create<CacheListener>(i, ComponentInfo::SHARE_NONE));
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