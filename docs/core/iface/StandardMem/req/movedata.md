---
title: MoveData
---

```cpp
// Constructor
SST::Interfaces::StandardMem::MoveData(Addr pSrcAddr, Addr pDstAddr, uint64_t size, bool posted = false,
    flags_t flags = 0, Addr vSrcAddr = 0, Addr vDstAddr = 0, Addr iPtr = 0, uint32_t tid = 0);
```
**Response Type** [StandardMem::WriteResp](writeresp)  &nbsp;  
**Needs Response** Depends on the value of the `posted` variable

The StandardMem::MoveData request class defines a request to move and/or copy data from a source address to a destination address. An example use case would be moving data into a scratchpad by copying data from a source memory address to a destination scratchpad address. Whether the data is migrated (moved) or copied is up to the underlying memory system implementation. An interface that receives this request should return a response containing the requested data if the `posted` field is `false`. Fields for both virtual and physical addresses are available, the interpretation of those fields is up to the underlying memory system model. A physical address is however required in the constructor for both the source and destination locations. 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::MoveData` includes the following member variables.
* **id** (id_t) A request or response identifier. A request and its response contain the same identifier.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **pSrcAddr** (Addr) The physical starting address for the bytes to move
* **pDstAddr** (Addr) The physical starting address of where to move the bytes to
* **vSrcAddr** (Addr) The virtual (if any) starting address for the bytes to move
* **vAddr** (Addr) The virtual (if any) starting address of where to move the bytes to
* **size** (uint64_t) The number of bytes to read
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
Creates a [WriteResp](writeresp) initialized as a response to this MoveData request. 
Initializes the `data` field in the response to be `size` bytes with value `0`.

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
Returns a formatted string listing all fields of the MoveData.
```sh
Example Output:
ID: 12, Type: MoveData, Flags: [], SrcPhysAddr: 0x141a40, SrcVirtAddr: 0x0, DstPhysAddr: 0x5b00, DstVirtAddr: 0x0, Size: 32, Posted: F, InstPtr: 0x0, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```