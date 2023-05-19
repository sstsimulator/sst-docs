---
title: WriteUnlock
---

```cpp
// Constructor
SST::Interfaces::StandardMem::WriteUnlock(Addr pAddr, uint64_t size, std::vector<uint8_t> data, 
    bool posted = false, flags_t flags = 0, Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);
```
**Response Type** [StandardMem::WriteResp](writeresp)  &nbsp;  
**Needs Response** Depends on the value of the `posted` variable

The StandardMem::WriteUnlock request class defines a memory write that also unlocks an address. This request should always follow a [StandardMem::ReadLock](readlock). Issuing a StandardMem::WriteUnlock without first issuing a StandardMem::ReadLock is incorrect behavior and particular StandardMem inmplementations may return a fatal error or ignore it, resulting in undefined behavior. An interface that receives this request should return a WriteResp response acknowledging the write completion if the request's `posted` field is `false`. Otherwise, no response is expected. The interface should also unlock the address. Fields for both a virtual and physical address are available, the interpretation of those fields is up to the underlying memory system model. `physAddr` is however required in the constructor. 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::WriteUnlock` includes the following member variables.
* **id** (id_t) A request or response identifier. A request and its response contain the same identifier.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pAddr** (Addr) The physical starting byte address to write to
* **vAddr** (Addr) The virtual (if any) starting byte address to write the data to
* **size** (uint64_t) The number of bytes to write (same as size of data vector)
* **data** (std::vector<uint8_t\>) Bytes to write
* **posted** (bool) Whether the write is posted (does not require a response)
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
Creates a [WriteResp](writeresp) initialized as a response to this write request. 

#### needsResponse
```cpp
bool needsResponse();
```
Returns `false` if the `posted` field is set to `true`, other `false`.

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
Returns a formatted string listing all fields of the WriteUnlock.
```sh
Example Output:
ID: 817, Type: WriteUnlock, Flags: [], PhysAddr: 0x13240, VirtAddr: 0x13240, Size: 4, Posted: F, InstPtr: 0x10ed8, ThreadID: 0, Payload: 0x48656c6c
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```