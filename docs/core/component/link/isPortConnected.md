---
title: isPortConnected
---

```cpp
bool isPortConnected(const std::string& name) const;
```
*Availability:* Component, SubComponent, ComponentExtension

Determine if a port is connected to a link.


## Parameters
* **name** (string) Name of the port to check
* **returns** (bool) Whether the port is connected


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicLinks.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicLinks.cc"
#include <sst/core/component.h>

basicLinks::basicLinks(ComponentId_t id, Params& params) : Component(id) 
{
    // This example has a port vector. The ports are named port_vectorX where X is the vector index.
    // Configure the ports in the vector that are connected.
    std::string linkprefix = "port_vector";
    std::string linkname = linkprefix + "0";
    int portnum = 0;
    //highlight-next-line
    while (isPortConnected(linkname)) {
        SST::Link* link = configureLink(linkname, new Event::Handler<basicLinks,int>(this, &basicLinks::handleWithEventID, portnum));
        sst_assert(link, CALL_INFO, -1, "Error: Link configuration failed\n");

        linkVector.push_back(link);
        portnum++;
        linkname = linkprefix + std::to_string(portnum);
    }

}
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```
