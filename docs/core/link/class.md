---
title: SST::Link
---

SST Links connect (sub)components and enable components to send events to each other. Links can be configured to use a callback handler when an event arrives or can be configured without a handler so that they must be polled.

## Simulation LifeCycle and Links
During SST's init() and complete() phases, the sendUntimedData() and recvUntimedData() functions can be used to send events between (sub)components. The regular send() and recv() functions are unvailable, and links must be polled during these phases. Once SST enters setup(), (sub)components can send events on Links using the regular functions and the events will be handled when simulation begins.

## Link latency
Links are declared in the SST configuration input file with a latency. This is the minimum latency that an event will experience on the link. Within (sub)components, the `addSendLatency` and `addRecvLatency` as well as some of the `send` functions can be used to add additional latency to the link. For example, if a link is configured in the input file with 200ns of latency, an event will arrive 200ns after it was sent. If however the sender sends the event with a 20ns latency, the event would arrive 200 + 20 = 220ns later.

Links cannot have a zero latency. The exception to this is a SelfLink. A SelfLink is identical to a Link except that both ends of the link connect to the same component or subcomponent. SelfLinks are often used by components to time internal activities.

## Creation
Links are not created directly by (sub)components. Instead, (sub)components use (Sub)Component API functions such as `configureLink()` to acquire a handle to a link. Links must be declared in the SST input configuration. SelfLinks do not need to be declared in the input configuration, the component can configure these in their constructors.

## Header
```cpp
#include <sst/core/link.h>
```
