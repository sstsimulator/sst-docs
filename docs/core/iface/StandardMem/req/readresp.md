---
title: ReadResp
---

```cpp
// Constructor
SST::Interfaces::StandardMem::ReadResp(id_t id, Addr pAddr, uint64_t size, 
    std::vector<uint8_t> data, flags_t flags = 0, Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);
SST::Interfaces::StandardMem::ReadResp(Read* readEv, std::vector<uint8_t> data);
```

**Response Type** None  &nbsp;  
**Needs Response** `false`  &nbsp;  
**Corresponding request types** [StandardMem::Read](read), [StandardMem::ReadLock](readlock), [StandardMem::LoadLink](loadlink)

The StandardMem::ReadResp request class defines a response to memory reads. The `id`, `pAddr`, `vAddr`, `size`, `flags` and `tid` fields are copied from the corresponding request.

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::ReadResp` includes the following member variables.
* **id** (id_t) A request or response identifier. This id matches that of the corresponding Read request.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pAddr** (Addr) The physical starting address for the bytes returned by this response
* **vAddr** (Addr) The virtual (if any) starting address for the bytes read
* **size** (uint64_t) The number of bytes read, equivalent to the size of the data field.
* **iPtr** (Addr) An instruction pointer. This is optional metadata.
* **tid** (uint32_t) An optional thread ID, can be used by memory systems if needed
* **data** (std::vector<uint8_t\>) A vector containing the read data

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
Returns a formatted string listing all fields of the ReadResp.

```sh
Example Outputs:
ID: 133, Type: ReadResp, Flags: [] PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0, Payload: 0xf003010000000000
ID: 206, Type: ReadResp, Flags: [F_TRACE,F_NONCACHEABLE] PhysAddr: 0x7ffffcf0, VirtAddr: 0x7ffffcf0, Size: 8, InstPtr: 0x103e2, ThreadID: 0, Payload: 0x0000000000000000
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```