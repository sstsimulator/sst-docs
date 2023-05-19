---
title: Request
---

The Request class defines the data structure used to send and receives events via a network. Each Request includes a number of metadata fields used by networks (e.g., source and destination information) as well as *payload*. The payload is an SST::Event pointer so that any event can be wrapped in the Request type and the payload delivered to the other side of the network. Requests are serializable and may be passed over SST Links.

## Request Metadata
Each Request has several metadata fields. These are public and may be manipulated directly.
* **dest** (nid_t) The ID for the destination
* **src** (nid_t) The ID of the source
* **vn** (int) Which virtual network the Request belongs to
* **size_in_bits** (size_t) The number of bits that a Request should consume on the network.
* **head** (bool) True if this packet is the head of a stream
* **tail** (bool) True if this packet is the tail of a stream
* **allow_adaptive** (bool) True if this packet can be adaptively routed. Individual networks may or may not implement adaptive routing; SimpleNetwork does not require it.

## Payloads
Each Request has a payload, which is a pointer to an SST::Event. The payload is private and must be manipulated via the following accessors. When a payload is given to a Request, the Request takes ownership and deleting the Request will also delete the payload.

### givePayload
```cpp
void givePayload(Event* event);
```
Set the Request's payload to the SST Event. The Request takes ownership of the Event.

### takePayload
```cpp
Event* takePayload();
```
Return the payload that the Request is carrying. The caller takes ownership of the Event and the Request discards its pointer to the event. The caller is responsible for deleting the Event in the future.

### inspectPayload
```cpp
Event* inspectPayload();
```
Return the payload that the Request is carrying, but do not transfer ownership. The Request retains its pointer to the event.

## Debug and Tracing
SimpleNetwork provides functions to enable tracing a Request through a network. These functions can be called on a Request to trace a request. The tracing data fields are protected members of the Request class. Individual networks are not required to implement tracing; they can ignore these fields. However, it is a useful functionality for debugging as well as introspecting the network.

### Trace ID
```cpp
protected:
    int traceID;
public:
    void setTraceID(int id); // Set the Request's ID to id
    int getTraceID(); // Get the trace ID assigned to a Request
```

### Trace Type
```cpp
/* Types of traces supported by SimpleNetwork */
typedef enum {
    NONE,   /* No tracing enabled */
    ROUTE,  /* Trace route information only */
    FULL    /* Trace all movements of packets through network */
} TraceType;

protected:
    TraceType trace;
public:
    void setTraceType(TraceType type); // Set the Request's trace type to `type`
    TraceType getTraceType(); // Return the Request's trace type
```


## Creating Requests
Requests can be created via the following constructors. Note the default values of the metadata fields. Trace fields must be set using the accessors described above.
```cpp
/* Default constructor */
Request() : 
    dest(0), src(0), size_in_bits(0), 
    head(false), tail(false), allow_adaptive(true), 
    payload(nullptr), 
    trace(NONE), traceID(0) 
{ }

Request(nid_t dest, nid_t src, size_t size_in_bits, bool head, bool tail, Event* payload = nullptr) :
    dest(dest), src(src), size_in_bits(size_in_bits),
    head(head), tail(tail), allow_adaptive(true),
    payload(payload),
    trace(NONE), traceID(0)
{ }
```

### Examples
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/memNIC.cc"
void MemNIC::send(MemEventBase* ev) {
    SimpleNetwork::Request *req = new SimpleNetwork::Request();
    MemRtrEvent *mre = new MemRtrEvent(ev); // Wrap the ev in a MemHierarchy event type
    req->src = info.addr; // Set the source to the MemNIC's ID
    req->dest = lookupNetworkAddress(ev->getDst()); // Lookup the network address for the destination
    req->size_in_bits = getSizeInBits(ev); // Calculate the size of the event
    req->vn = 0; // Not using virtual networks
    req->givePayload(mre); // Give the wrapped 'ev' to the req
    sendQueue.push(req); // Enqueue this request to send it over the network
    /* Rest of function to manage MemNIC's send queues */
}
```
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/test/simple_patterns/incast.cc"
SimpleNetwork::Request* req = new SimpleNetwork::Request();
req->dest = targets[curr_packets % targets.size()]; // Pick a new dest
req->src = id;
req->vn = 0;
req->size_in_bits = packet_size_in_bits;
link_control->send(req, 0); // Send the Request to the SimpleNetwork interface on vn=0
```

## Deleting Requests
Deleting a Request will also delete the Request's payload if it currently has one.

## Cloning Requests
Requests, and many events in general, implement a `clone()` function to enable deep copies of the data structures. A Request's clone() function duplicates the Request and does a deep copy of the payload if the Request has one.

## Header
```cpp
#include <sst/core/interfaces/simpleNetwork.h>
```
