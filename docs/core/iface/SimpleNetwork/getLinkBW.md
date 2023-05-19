---
title: getLinkBW
---

```cpp
virtual const UnitAlgebra& getLinkBW() const = 0;
```

Return the network interface's link bandwidth. This can be used, for example, by an endpoint to determine how much bandwidth is available into the network. Bandwidth is measured in bits per second. The units can be checked by using UnitAlgebra's [`hasUnits()`](../../unitalgebra/hasUnits) function.

## Requirements
**Network interface** &nbsp;  
Return how much bandwidth is available on the outgoing link between the SimpleNetwork interface and the network. Does not need to return correct information *until* [isNetworkInitialized()](isNetworkInitialized) returns `true`.

**Endpoint** &nbsp;  
Optional, can call if needed. Cannot call this function prior to network initialization, when `isNetworkInitialized()` returns `true`.

## Parameters
* **returns** (UnitAlgebra) Bandwidth of the interface's link into the network

## Examples

### Example 1: Return the bandwidth from a SimpleNetwork
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/linkControl.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.h"
inline const UnitAlgebra& getLinkBW() const { return link_bw; }
```

### Example 2: Query the bandwidth from an endpoint
<!--- SOURCE_CODE: sst-elements/src/sst/elements/firefly/nic.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/firefly/nic.cc"
void Nic::init( unsigned int phase ) 
{
    /* Some other init() code */

    /* Find out how much bandwidth the NIC has */
    if (m_linkBytesPerSec == 0 && m_linkControl->isNetworkInitialized() ) {
        m_linkBytesPerSec = m_linkControl->getLinkBW().getRoundedValue()/8;
    }
}
```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```