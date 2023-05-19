---
title: poll
---

```cpp
virtual Request* poll() = 0;
```
Receive an event (request or response) from the interface. Use this method for polling-based applications. 
Register a [handler](handler) for push-based notification of responses. 

Upon receipt of a Request, the receiver takes responsibility for subsequently deleting the Request.

## Requirements
**Memory interface** &nbsp;  
Return a waiting Request. If no Request is available, return `nullptr`. If a [response handler was registered](constructor) with the interface, then this function may always return `nullptr`.

**Endpoint** &nbsp;  
Use this function to get messages from the interface if no handler was registered with the interface.

## Parameters
* **returns** (Request*) A Request that was delivered to the interface from the memory system, or `nullptr` if no Request is available.


## Examples

### Example 1: Implementing poll() in a StandardMem interface
<!--- SOURCE_CODE: sst-elements/src/sst/elements/memHierarchy/standardInterface.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"
// MemHierarchy's StandardInterface requires a handler so poll() always returns nullptr
Request* StandardInterface::poll()
{
    return nullptr;
}
```

### Example 2: Using poll from an endpoint
```cpp
Request* req = mem_iface->poll();

if ( req != nullptr )
{
    /* Handle request here */
    delete req;
}
```

## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```