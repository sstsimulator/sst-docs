---
title: FlushAddr
---

```cpp
// Constructor
SST::Interfaces::StandardMem::FlushAddr(Addr pAddr, uint64_t size, bool inv, uint32_t depth, 
    flags_t flags = 0, Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);
```
**Response Type** [StandardMem::FlushResp](flushresp)  &nbsp;  
**Needs Response** `true`

The StandardMem::FlushAddr request class defines a request to flush a line from cache by address. An interface that receives this request should return an acknowledgement response. Fields for both a virtual and physical address are available, the interpretation of those fields is up to the underlying memory system model. `physAddr` is however required in the constructor. The `inv` field indicates whether a matching line should also be invalidated from cache as well as written back to memory if dirty. The `depth` field indicates how many components deep the flush should propogate. For example, in a system with an L1, L2, and L3: a value of 1 indicates that the flush should flush data from the L1 only whereas a value of 2 indicates the flush should flush data from both the L1 and L2 caches. 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::FlushAddr` includes the following member variables.
* **id** (id_t) A request or response identifier. A request and its response contain the same identifier.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pAddr** (Addr) The physical starting address for the bytes to be read
* **vAddr** (Addr) The virtual (if any) starting address for the bytes to be read
* **size** (uint64_t) The number of bytes to read
* **inv** (bool) If `true`, the flush should also invalidate the line. If `false`, the line can remain in the cache in a clean state.
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
Creates a [FlushResp](flushresp) initialized as a response to this FlushAddr request. If the memory system implementation allows flushes to fail, the memory interface should subsequently set the F_FAIL flag on the response if necessary.

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
Returns a formatted string listing all fields of the FlushAddr.
```sh
Example Outputs:
ID: 133, Type: FlushAddr, Flags: [], PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, Inv: T, Depth: 2, InstPtr: 0x10176, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```