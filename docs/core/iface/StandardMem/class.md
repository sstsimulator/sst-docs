e--
title: SST::Interfaces::StandardMem
---

The StandardMem interface defines an interface between a core or other compute unit (i.e., "endpoint") and a memory system. A memory system library should define a SubComponent that implements the StandardMem interface. Components  can then load that StandardMem SubComponent to interface with the memory system library. As an example, in the picture below, a CPU endpoint Component loads a StandardMemInterface SubComponent. The interface has an SST::Link into the rest of the memory system.

![StdMem implementation example](/img/docs_stdmem_implementation_example.png)

To send requests into the memory system, the CPU uses the interface's [`send`](send) function and passes a request as one of the [StandardMem::Request](req/class) types. The interface converts incoming requests into an implementation-specific SST::Event type using converters which in turn belong to a derived instance of the [StandardMem::RequestConverter](reqconverter) class. These events can then be sent among the memory (or any other compatible) components as shown in the cloud below. As the StandardMem interface is part of the memory system component space, it should have knowledge of these library-internal event types. Finally, when the interface needs to pass an event to the CPU, it passes the event as a StandardMem::Request using a [callback function](handler) (`StdMemCallbackHandler`). Finally, the CPU implements a class based on the StandardMem::RequestHandler class (`derivedRequestHandlerClassInstance`) that provides visitor functions for various StandardMem::Request types. In hte callback function, the CPU invokes this visitor class to allow requests to be handled according to type.

The image describes a concerete implementation of the interface and its use in a system. It is also valid for the StandardMem interface to interact with a memory system via SubComponents rather than Links, or for the endpoint to be a SubComponent rather than a Component. Likewise, the CPU in the example could be replaced by any ohter entity that needs to interact with a memory system. 

## Types
StandardMem defines several types. 
* **Addr** (uint64_t) Represents a memory address.
* [**Request**](req/class) A class representing a memory system request or response, for example a Read, Write, or Acknowledgement. The Request class is a base class for a number of included request and response types.
* [**RequestConverter**](reqconverter) A class to convert a Request to an SST::Event* derived type
* [**RequestHandler**](reqhandler) A class to handle a Request according to type
* [**Handler**](handler) A function to notify the endpoint when the StandardMem interface receives a response


## Implementing a StandardMem interface
In addition to implementing the functions described in this memory interface documentation, StandardMem interfaces must also perform the following tasks. 

* **Respond to every Request that requires a Response**

    Each Request has a function, [`needsResponse`](??) that returns whether a Response is required. StandardMem interfaces must eventually respond to all requests that require a Response.


Additionally, the StandardMem interface supports some features that are not required to be supported but may be useful.
* **Trace memory requests**

StandardMem::Request events can be tagged as traceable. Interfaces, and memory component libraries, can use these fields to generate trace information about tagged Requests.


## Interfacing with a StandardMem interface
Components that load a StandardMem SubComponent, called an *endpoint* in the rest of this documentaiton, must support the following actions.

* **Facilitate SST lifecycle for the SubComponent**

This means that the endpoint must call `init()`, `setup()`, `complete()`, and `finish()` on the interface during its own respective functions. 



## What the interface does not do

* **Make any ordering guarantee**

It is up to particular memory system implementations to define the ordering semantics they support with respect to the order in which requests are accepted and responses are returned. StandardMem itself does not impose any ordering.

* **Impose addressing or alignment restrictions**

While the interface provides functions such as `getLineSize` for convenience, the API itself does not impose any rules around access alignment, access sizes, etc. Particular implementations of the interface may have their own implementation-specific restrictions (e.g., that a cache access cannot span multiple cache lines) and should have some mechanism for notifying users of the restrictions (documentation, error-checking, etc.).
