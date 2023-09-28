---
title: SST::Interfaces::SimpleNetwork
---

The SimpleNetwork interface defines an interface between a network and an endpoint. A network library should define a SubComponent that implements the SimpleNetwork interface. Endpoints can then load that SimpleNetwork SubComponent to interface with the network library.

## Types
SimpleNetwork defines several types. 
* **nid_t** A network ID. This is a 64-bit int.
* [**Request**](Request) A data structure representing both a network send and receive. Send functions accept requests of this type and receive functions return requests of this type.
* [**NetworkInspector**](NetworkInspector) A subcomponent that can be implemented to allow inspecting network requests as they go through a network.
* [**Handler**](handler) A function to notify the endpoint when the SimpleNetwork sends or receives a packet


## Implementing a SimpleNetwork interface
In addition to implementing the functions described in this network interface documentation, SimpleNetwork interfaces must also perform the following tasks. 
* **Assign a unique ID to each network endpoint**

    This ID is returned by the [`getEndpointID`](getEndpointID) function, and the IDs are used in SimpleNetwork::Request to identify where a request originates from (src) and to where it should be sent (dest). 
    * [getEndpointID()](getEndpointID)
    * [Request](Request)
    
* **Facilitate untimed data transfer**

During SST's [init()](../../component/lifecycle/init) and [complete()](../../component/lifecycle/init) phases, events can be sent over links. While a network does not need to use these phases itself (although it may), a network *should* support endpoints sending events over network links during these phases. In addition to routing events to specific endpoints, the network must also support broadcasting of messages during the untimed phases when INIT_BROADCAST_ADDRESS is specified as the destination.  This can be done either by the SimpleNetwork object creating an event for each endpoint in the network, or the network routers can use more intelligent algorithms to guarantee that each end point receives exactly one copy of the event.

* **Support both polling and interrupt-based event delivery**

All SimpleNetwork events are delivered via a polling function, [`recv`](recv) which must be called to get an event from a network. SimpleNetworks should also support registering a callback function to notify an endpoint that an event is available. 

* **Support for notification of event send**

A SimpleNetwork implementation should allow an endpoint to register a callback to be called when an event is sent on the SimpleNetwork's output link.  This allows an endpoint that has been blocked due to full buffers to know when to try sending events again. 

Additionally, the SimpleNetwork interface supports some features that are not required to be supported but are commonly useful.
* **Trace requests through the network**

SimpleNetwork::Request events can be tagged as traceable. Interfaces, and network libraries, can use these fields to return trace information about tagged Requests.

## Interfacing with a SimpleNetwork interface
Endpoints that load a SimpleNetwork SubComponent must support the following actions.
* **Facilitate SST lifecycle for the SubComponent**

This means that the endpoint must call `init()`, `setup()`, `complete()`, and `finish()` on the interface during its own respective functions. 

* **Allow network initialization prior to network use**

In addition to calling `init()` on the SimpleNetwork during its own `init()` function, the endpoint must wait for the network to be initialized before using the network. See [isNetworkInitialized](isNetworkInitialized) for details.

* **Use network IDs to address messages on the network**

As described above, SimpleNetworks assign each endpoint an ID. The endpoints must use these IDs to appropriately set the source and destination fields in a network Request. 
