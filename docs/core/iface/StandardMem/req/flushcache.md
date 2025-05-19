---
title: FlushCache
---

```cpp
// Constructor
SST::Interfaces::StandardMem::FlushCache( uint32_t depth=std::numeric_limits<uint32_t>::max(), 
    flags_t flags = 0, Addr iPtr = 0, uint32_t tid = 0);
```
**Response Type** [StandardMem::FlushResp](flushresp)  &nbsp;  
**Needs Response** `true`

The StandardMem::FlushCache request class defines a request to flush the entire cache hierarchy. An interface that receives this request should return an acknowledgement response once the flush is complete. The `depth` field indicates how many components deep the flush should propagate. For example, in a system with an L1, L2, and L3: a value of 1 indicates that the flush should flush data from the L1 only whereas a value of 2 indicates the flush should flush data from both the L1 and L2 caches. 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::FlushCache` includes the following member variables.
* **id** (id_t) A request or response identifier. A request and its response contain the same identifier.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **depth** (uint32_t)  How many levels down the memory hierarchy the flush should propagate
* **iPtr** (Addr) An instruction pointer. This is optional metadata.
* **tid** (uint32_t) An optional thread ID, can be used by memory systems if needed

## Member functions
### Defined in [`Request`](class) base class
* `getId`
* `setNoncacheable`
* `unsetNoncacheable`
* `getNoncacheable`
* `setSuccess`
* `unsetSuccess`
* `getSuccess`
* `setFail`
* `unsetFail`
* `getFail`
* `setTrace`
* `unsetTrace`
* `getTrace`
* `setFlag`
* `unsetFlag`
* `getFlag`
* `clearAllFlags`
* `getAllFlags`
* `getFlagString`

### Virtual functions inherited from the [`Request`](class) base class
#### makeResponse
```cpp
Request* makeResponse();
```
Creates a [FlushResp](flushresp) initialized as a response to this FlushCache request. If the memory system implementation allows flushes to fail, the memory interface should subsequently set the F_FAIL flag on the response if necessary.

#### needsResponse
```cpp
bool needsResponse();
```
Returns `true`.

#### convert
```cpp
SST::Event* convert(RequestConverter* converter);
```
Invokes `convert()` on the supplied `converter` visitor class to return an SST::Event in an implementation-specific format.

#### handle
```cpp
virtual void handle(RequestHandler* handler) =0;
```
Invokes `handle()` on the supplied `handler` visitor class to handle the event according to type.


#### getString
```cpp
virtual std::string getString() =0;
```
Returns a formatted string listing all fields of the FlushCache.
```sh
Example Outputs:
ID: 133, Type: FlushCache, Flags: [], Depth: 2, InstPtr: 0x10176, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```