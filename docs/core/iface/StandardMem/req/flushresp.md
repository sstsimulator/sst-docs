---
title: FlushResp
---

```cpp
// Constructor
SST::Interfaces::StandardMem::FlushResp(id_t id, Addr pAddr, uint64_t size, flags_t flags = 0,
    Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);
SST::Interfaces::StandardMem::FlushResp(FlushAddr* fl, flags_t newFlags = 0);
```

**Response Type** None  &nbsp;  
**Needs Response** `false`  &nbsp;  
**Corresponding request types** [StandardMem::FlushAddr](flushaddr)

The StandardMem::FlushResp request class defines a response to a cache flush ([SST::StandardMem::Request::FlushAddr](flushaddr)). The `id`, `pAddr`, `vAddr`, `size`, `flags` and `tid` fields are copied from the corresponding Flush request. In some memory system implementations, flushes can fail. As such, a `FlushResp` may have the `F_FAIL` flag set on it and the endpoint would need to handle that case appropriately. In the constructor above, the `newFlags` field is added to the existing set of flags copied from the flush request (flushEv).

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::FlushResp` includes the following member variables.
* **id** (id_t) A request or response identifier. This id matches that of the corresponding flush request.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pAddr** (Addr) The physical byte address for the line being flushed
* **vAddr** (Addr) The virtual (if any) address for the line being flushed
* **size** (uint64_t) The number of bytes to flush
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
Returns `nullptr`.

#### needsResponse
```cpp
bool needsResponse();
```
Returns `false`.

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
Returns a formatted string listing all fields of the FlushResp.

```sh
Example Outputs:
ID: 112, Type: FlushResp, Flags: [F_FAIL] PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0
ID: 112, Type: FlushResp, Flags: [] PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```