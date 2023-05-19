---
title: WriteResp
---

```cpp
// Constructor
SST::Interfaces::StandardMem::WriteResp(id_t id, Addr pAddr, uint64_t size, flags_t flags = 0,
    Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);
SST::Interfaces::StandardMem::WriteResp(Write* writeEv);
```

**Response Type** None  &nbsp;  
**Needs Response** `false`  &nbsp;  
**Corresponding request types** [StandardMem::Write](write), [StandardMem::WriteUnlock](writeunlock), [StandardMem::StoreConditional](storeconditional), [StandardMem::MoveData](movedata)

The StandardMem::WriteResp request class defines a response to a memory write. All fields are copied from the corresponding Write request although if the corresponding write request was conditional, the WriteResp may have the F_FAIL flag set if the write failed.

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::WriteResp` includes the following member variables.
* **id** (id_t) A request or response identifier. This id matches that of the corresponding Write request.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pAddr** (Addr) The physical starting address for the bytes written
* **vAddr** (Addr) The virtual (if any) starting address for the bytes written
* **size** (uint64_t) The number of bytes that were requested to be written
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
Returns a formatted string listing all fields of the WriteResp.

```sh
Example Output:
ID: 817, Type: WriteResp, Flags: [], PhysAddr: 0x13240, VirtAddr: 0x13240, Size: 4, InstPtr: 0x10ed8, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```