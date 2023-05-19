---
title: LoadLink
---

```cpp
// Constructor
SST::Interfaces::StandardMem::LoadLink(Addr pAddr, uint64_t size, flags_t flags = 0, Addr vAddr = 0, 
    Addr iPtr = 0, uint32_t tid = 0);
```

**Response Type** [StandardMem::ReadResp](readresp)  &nbsp;  
**Needs Response** `true`

The StandardMem::LoadLink request class defines a request to read an address and track intervening external accesses to the access until a following [StandardMem::StoreConditional](storeconditional). The request must be followed eventually by a StandardMem::StoreConditional to release the link. An interface that receives this request should return a response containing the requested data. Fields for both a virtual and physical address are available, the interpretation of those fields is up to the underlying memory system model. `physAddr` is however required in the constructor. 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::LoadLink` includes the following member variables.
* **id** (id_t) A request or response identifier. A request and its response contain the same identifier.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pAddr** (Addr) The physical starting address for the bytes to be read and locked
* **vAddr** (Addr) The virtual (if any) starting address for the bytes to be read and locked
* **size** (uint64_t) The number of bytes to read and lock
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
Creates a [ReadResp](readresp) initialized as a response to this read request. 
Initializes the `data` field in the response to be `size` bytes with value `0`.

:::info Important

Interfaces *must* set the `data` field in the response after calling this function if the simulation uses data values. The `makeResponse()` function only initializes the field to 0.

:::

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
Returns a formatted string listing all fields of the LoadLink.
```sh
Example Outputs:
ID: 133, Type: LoadLink, Flags: [], PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0
ID: 206, Type: LoadLink, Flags: [F_TRACE], PhysAddr: 0x7ffffcf0, VirtAddr: 0x7ffffcf0, Size: 8, InstPtr: 0x103e2, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```