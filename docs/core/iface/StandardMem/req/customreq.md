---
title: CustomReq
---

```cpp
// Constructor
SST::Interfaces::StandardMem::CustomReq(CustomData* data, flags_t flags = 0, Addr iPtr = 0, 
    uint32_t tid = 0);
```
**Response Type** [StandardMem::CustomResp](customresp)  &nbsp;  
**Needs Response** `true`

The `CustomReq` class allows implementations (endpoints and/or memory systems) to add additional custom memory transactions to the set provided by StandardMem. The class wraps a generic data structure, [`CustomData`](customdata) which can be extended by endpoints and the memory system to dynamically add new request types to the StandardInterface. The `CustomData` class provides a minimal set of functions to enable a memory system to route requests by address, create responses, and generate debug/output for the CustomReq. 

## Member variables
Including those inherited from the `StandardMem::Request` base class, `StandardMem::CustomReq` includes the following member variables.
* **id** (id_t) A request or response identifier. A request and its response contain the same identifier.
* **flags** (flags_t) A 32-bit vector indicating any special flags added to the request
* **data** (CustomData*) A custom data structure encapsulating any custom fields provided by the custom request
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
Creates a [CustomResp](customresp) initialized as a response to this CustomReq request. The `data` field in the response is populated by calling `makeResponse()` on this request's custom data object.

#### needsResponse
```cpp
bool needsResponse();
```
Returns the result of calling `needsResponse()` on the CustomData object `data`.

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
Returns a formatted string listing the fields of the CustomReq request as well as the result of calling `getString()` on the the CustomData object `data`.
```sh
Example Output:
# In this example, data->getString() returns "atomic increment at addr 0x7ffffcf0"
ID: 133, Type: CustomReq, Flags: [],  atomic increment at addr 0x7ffffcf0, InstPtr: 0x0, ThreadID: 0
```


## Header
```cpp
#include <sst/core/interfaces/stdMem.h>
```