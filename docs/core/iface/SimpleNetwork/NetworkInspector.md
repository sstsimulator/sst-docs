---
title: NetworkInspector
---

```cpp
class NetworkInspector : public SubComponent
{
public:
    SST_ELI_REGISTER_SUBCOMPONENT_ELI(SST::Interfaces::SimpleNetwork::NetworkInspector, std::string)

    NetworkInspector(ComponentId_t id) : SubComponent(id) {}

    virtual ~NetworkInspector() {}

    virtual void inspectNetworkData(Request* req) = 0;
};
```

A NetworkInspector is a SubComponent that can be used to inspect events that are in-flight throughout a network. A library that sends Requests through a network, which wrap an Event type custom to that library, can implement a NetworkInspector capable of returning information about the Request and the wrapped custom Event. 

## Requirements
**Network interface** &nbsp;  
Networks that support the SimpleNetwork API are not required to support inspection. If they do, they should use this SubComponent API. To support NetworkInspector, network components (e.g., SimpleNetwork interfaces, routers) throughout the network should support loading NetworkInspector SubComponents, and should call the `inspectNetworkData()` function when a Request is encountered.

### NetworkInspector
Perform some inspection when the `inspectNetworkData` function is called. For example, update a statistic or generate output. Do not modify the Request.

## Parameters
* **returns** none


## Examples

### Example 1: Supporting NetworkInspectors in a network
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/portControl.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/interfaces/portControl.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/portControl.h"
#include <sst/core/interfaces/simpleNetwork.h>

class PortControl : public PortInterface {
public:
    
    /* ELI macros */

    SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
        //highlight-next-line
        {"inspector_slot", "Network inspectors", "SST::Interfaces::SimpleNetwork::NetworkInspector"}
        /* Other subcomponent slots */
    )

private:
    /* Class members */
    //highlight-next-line
    std::vector<SST::Interfaces::SimpleNetwork::NetworkInspector*> network_inspectors;
};
```
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/portControl.cc"
PortControl::PortControl(ComponentId_t cid, Params& params, /* Other function parameters */) :
    PortInterface(cid), /* Other variable initialization */ {
        /* Other constructor code */

        // Create any NetworkInspectors
        for ( unsigned int i = 0; i < inspector_names.size(); i++ ) {
            Params empty;
            //highlight-next-line
            SimpleNetwork::NetworkInspector* ni = loadAnonymousSubComponent<SimpleNetwork::NetworkInspector>
                (inspector_names[i], "inspector_slot", i, ComponentInfo::INSERT_STATS, empty, port_name);
            if ( ni == NULL ) {
                merlin_abort.fatal(CALL_INFO, 1, "NetworkInspector: %s, not found.\n", inspector_names[i].c_str());
            }
            network_inspectors.push_back(ni);
        }

        /* More constructor code */
}

/* handle_output is called when an event is ready to be sent on the PortControl's link */
int PortControl::handle_output(Event* ev) {
    /* Code to locate the event to send, 'send_event' and prepare it */

    // Also send the request to all registered NetworkInspectors
    for ( unsigned int i = 0; i < network_inspectors.size(); i++ ) {
        //highlight-next-line
        network_inspectors[i]->inspectNetworkData(send_event->inspectRequest());
    }

    /* Code to send the event */
}
```

### Example 2: Implementing a NetworkInspector
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/inspectors/testInspector.h --->
<!--- SOURCE_CODE: sst-elements/src/sst/elements/merlin/inspectors/testInspector.cc --->
This inspector counts the number of packets sent on a link. Each time the network calls `inspectNetworkData`, it increments a statistic.

```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/inspectors/testInspector.h"
#include <sst/core/interfaces/simpleNetwork.h>

class TestNetworkInspector : public SimpleNetwork::NetworkInspector {
public:
    SST_ELI_REGISTER_SUBCOMPONENT(
        TestNetworkInspector,
        "merlin",
        "test_network_inspector",
        SST_ELI_ELEMENT_VERSION(1,0,0),
         "Used to test NetworkInspector functionality.  Duplicates send_packet_count in hr_router.",
        SST::Interfaces::SimpleNetwork::NetworkInspector)

    SST_ELI_DOCUMENT_STATISTICS(
        { "test_count", "Count number of packets sent on link", "packets", 1}
    )

private:
    Statistic<uint64_t>* test_count;
public:
    TestNetworkInspector(ComponentId_t id, Params& params, const std::string& sub_id);

    void inspectNetworkData(SimpleNetwork::Request* req);
};
```
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/inspectors/testInspector.cc"
 TestNetworkInspector::TestNetworkInspector(ComponentId_t id, Params& params, const std::string& sub_id) :
        SimpleNetwork::NetworkInspector(id)
{
    test_count = registerStatistic<uint64_t>("test_count", sub_id);
}

void TestNetworkInspector::inspectNetworkData(SimpleNetwork::Request* req) {
    test_count->addData(1);
}

```

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
