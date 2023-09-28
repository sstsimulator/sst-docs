---
title: MemHierarchy StandardMem Interface
---

MemHierarchy implements the [`SST::StandardMem`](../../core/iface/StandardMem/class) for integration with a processor model. To use this interface, processors should load the `memHierarchy.standardInterface`.

The StandardMem interface defines a number of functions and request types. MemHierarchy interprets and handles these as follows.

## Events Sent to MemHierarchy's StandardInterface

### [StandardMem::Read](../../core/iface/StandardMem/req/read.md)
A `Read` request sent to memHierarchy is interpreted as a read to the specified address. 
* Requestor - the name of the StandardInterface that issued the request

Assumptions:
* A request must not span multiple cache lines (if cacheable) or multiple distinct memory controller address spaces (if noncacheable). For performance reasons, MemHierarchy will only run checks to detect these conditions if the SST-Core is compiled with `--enable-debug`.
* 

Supported flags:
* F_NONCACHEABLE - The MemHierarchy caches will forward the request until it reaches the appropriate memory. There is no checking for coherence conflicts with currently outstanding cacheable requests.
* 

### [StandardMem::Write](../../core/iface/StandardMem/req/write.md)

### [StandardMem::FlushAddr](../../core/iface/StandardMem/req/flushaddr.md)

### [StandardMem::LoadLink](../../core/iface/StandardMem/req/loadlink.md)

### [StandardMem::StoreConditional](../../core/iface/StandardMem/req/storeconditional.md)

### [StandardMem::ReadLock](../../core/iface/StandardMem/req/readlock.md)

### [StandardMem::WriteUnlock](../../core/iface/StandardMem/req/writeunlock.md)

### [StandardMem::MoveData](../../core/iface/StandardMem/req/movedata.md)

### [StandardMem::CustomReq](../../core/iface/StandardMem/req/customreq.md)


## Events Sent From MemHierarchy's StandardInterface

### [StandardMem::ReadResp](../../core/iface/StandardMem/req/readresp.md)

### [StandardMem::WriteResp](../../core/iface/StandardMem/req/writeresp.md)

### [StandardMem::FlushResp](../../core/iface/StandardMem/req/flushresp.md)

### [StandardMem::InvNotify](../../core/iface/StandardMem/req/invnotify.md)

### [StandardMem::CustomResp](../../core/iface/StandardMem/req/customreq.md)
