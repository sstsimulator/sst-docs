---
title: CustomResp
---

```cpp
// Constructor
SST::Interfaces::StandardMem::CustomResp(id_t id, CustomData* data, flags_t flags = 0, 
    Addr iPtr = 0, uint32_t tid = 0);
SST::Interfaces::StandardMem::CustomResp(CustomReq* customReqEv);
```

**Response Type** None  &nbsp;  
**Needs Response** `false`  &nbsp;  
**Corresponding request types** [StandardMem::CustomReq](customreq)

The StandardMem::CustomResp request class defines a response to a custom request ([CustomReq](customreq)). 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::CustomResp` includes the following member variables.
* **id** (id_t) A request or response identifier. This id matches that of the corresponding CustomReq request.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **data** (CustomData*) A custom data structure encapsulating any custom fields provided by this custom response
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
Returns a formatted string listing the fields of the CustomResp request as well as the result of calling `getString()` on the the CustomData object `data`.

```sh
Example Output:
# In this example, data->getString() returns "atomic increment at addr 0x7ffffcf0"
ID: 133, Type: CustomResp, Flags: [],  atomic increment at addr 0x7ffffcf0, InstPtr: 0x0, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```