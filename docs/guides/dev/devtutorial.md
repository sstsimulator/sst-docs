---
title: Creating a component
---

In this tutorial, we will create some PingPong elements based on the classic protocol where a sender sends an event (ping) and a receiver responds with another event (pong). The simulation will be very simple: one ping-pong exchange. We will create two separate component types, a "Sender" to send a "ping" event and a "Responder" that responds with a "pong" event as shown below.

![PingPong simulation](../assets/pingpong.png)

## Prerequisites
* If you are not yet familiar with [running](../runningSST.md) and [configuring](../configuration/configTutorial.mdx) SST simulations, do those tutorials first.
* Install a recent version of the SST-Core. This can be from a release or from the repository. Put your SST `bin/` directory in your `PATH`. 
```sh
$ export PATH=<SST_CORE_INSTALL_DIR>/bin:$PATH
```

## Concepts covered
* What is a component
* Creating a component from SST boilerplate
* Compiling an element library
* Registering an element library with the SST-Core

## Designing SST Components
In this first section, we will take a look at what a component is and the basic boilerplate needed to implement one. Later, we will use this boilerplate to implement the Sender and Responder components.

### What is a component?
Components are the fundamental building block of simulation in SST. A component is a model - in architectural simulations, a component may be a processor, a cache or a network router. Each component is a contained unit of simulation: it executes serially and objects belonging to a component can interact through shared state, function calls, and arbitrary APIs. However, components may only interact with other components by exchanging SST Events. This restriction exists because, as a parallel framework, SST may assign components to different threads or even processes. 

### The component boilerplate
A component is created by defining a C++ class that inherits from `SST::Component` and contains an Element Library Info (ELI) macro that registers the class as a component with SST. The basic boilerplate is shown below in a header (`boilerplate.h`) and  implementation (`boilerplate.cc`) file.

```cpp title="boilerplate.h" showLineNumbers
/*
 * SST Component Boilerplate.
 * Required: Update LIBRARYNAME, CLASSNAME, LibraryNamespace, CLassName, LibraryName, ElementName and Description.
 * Optional: Update  category metadata on line 23 
 */
#ifndef _SST_LIBRARYNAME_CLASSNAME_H 
#define _SST_LIBRARYNAME_CLASSNAME_H

#include <sst/core/component.h>

namespace LibraryNamespace {

class ClassName : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        ClassName,                          // Component class
        "LibraryName",                      // Component library (for Python/library lookup)
        "ElementName",                      // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to the SST version)
        "Description",                      // Description
        COMPONENT_CATEGORY_UNCATEGORIZED    // Category
    )

    // Constructor
    ClassName(SST::ComponentId_t id, SST::Params& params);

    // Destructor
    ~ClassName();
};

} // namespace LibraryNamespace

#endif /* _SST_LIBRARYNAME_CLASSNAME_H */
```

```cpp title="boilerplate.cc" showLineNumbers
/*
 * SST Component Boilerplate.
 * Required: Update LibraryNamespace, boilerplate.h, and ClassName
 */

// This include is REQUIRED in every SST implementation file.
// It should NEVER be included in a header file
#include <sst/core/sst_config.h> 

#include "boilerplate.h"

using namespace LibraryNamespace;

ClassName::ClassName(SST::ComponentId_t id, SST::Params& UNUSED(params)) : SST::Component(id) { }

ClassName::~ClassName() { }
```

There are two key things to pay attention to in the boilerplate.

#### 1. The [`SST_ELI_REGISTER_COMPONENT`](../../core/eli/register/sst_eli_register_component.md) macro (boilerplate.h, lines 17-24)
The first three arguments of this macro let SST set up all of the infrastructure needed for SST-Core to construct a component of type `ClassName` whenever it sees the name "LibraryName.ElementName" in an SST input file. The last three arguments in the macro provide information to users about the component. Once a library is registered with SST, this information can be viewed using SST's `sst-info` command line utility.

#### 2. The `sst/core/sst_config.h` include at the top of boilerplate.cc
This must be the first include in every SST implementation file. `sst/core/sst_config.h` is a file that SST's build system generates and *it does not have header guards*. Do not include this file in any header file and always include it at the top of every implementation file.

### Modifying the boilerplate
To create your own component, you will copy the files `boilerplate.h` and `boilerplate.cc` to your own components files, for example, `classname.h` and `classname.cc`. Then you will modify them using these guidelines.

*Header*
* **Lines 6-7, 35:** Header guards. Modify to match your LIBRARYNAME and CLASSNAME.  
* **Lines 11, 33**: Namespace for your element library. Modify "LibraryNamespace" to a unique namespace for your library.  
* **Line 13**: Class declaration. Modify "ClassName" to the name of your class.  
* **Lines 17-24**: This is an Element Library Info (ELI) macro that SST uses to identify your element. It *must* be located in a public section of your class header.
  * **Line 18**: Modify to *exactly match* your class name. It is not a string.  
  * **Line 19**: Modify to match your library name. This name must adhere to [SST's element naming conventions.](./naming.md)
  * **Line 20**: Modify to the name you wish to use to lookup this component. It does not need to match the class name. This name must adhere to [SST's element naming conventions.](./naming.md) 
  * **Line 21**: This is currently unused, leave it as is.
  * **Line 22**: Modify this to provide a brief description of this component to help a user understand what the component is for. It is reported when viewing available components through SST's query tool, `sst-info`.
  * **Line 23**: Modify this to a reasonable category matching the type of your component (see [Component Categories](../../core/eli/other/sst_eli_category_info.md) for options). You may leave this as `COMPONENT_CATEGORY_UNCATEGORIZED` if no other option fits. The category is reported when viewing available components through SST's query tool, [`sst-info`](../../tools/commandLine/sst-info.md). 
* **Line 27**: The component constructor. Modify the ClassName to match your class.
* **Line 30**: The component destructor. Modify the ClassName to match your class.

*Implementation*
* **Line 10** Modify the class header include to include your component header file.
* **Line 12** Change "LibraryNamespace" to match your header modification
* **Lines 14, 16** Change "ClassName" to match the name of your class.
* **Line 14** If you use the `params` argument in your class constructor, remove the "UNUSED" macro around `params`. This suppresses compiler warnings because the argument is unused in the boilerplate. 

## Creating a skeleton element library
Next, we will use the boilerplate introduced above to implement a skeleton of the Sender and Responder components and compile them into a shared library. We'll then register the library with SST-Core and confirm that SST can load our library. For the time being, the components will not do anything - we will fix that in the second set of steps.

### Step 1: Create the Sender component
Create a directory for your element library, such as `$HOME/sst-tutorial`. We'll create all of the files we need for this tutorial in this directory.

```sh
$ mkdir -p $HOME/sst-tutorial
$ cd sst-tutorial
```

In your tutorial directory, create a header file named `sender.h` and an implementation file named `sender.cc`. Use the boilerplate shown above for both files and customize it using the following replacements:
* Replace "LIBRARYNAME" with "PINGPONG"
* Replace "LibraryNamespace" and "LibraryName" with "PingPong"
* Replace "CLASSNAME" with "SENDER"
* Replace "ClassName" with "Sender"
* Replace "ElementName" with "Sender" - Note: This is the same as "ClassName" in this example but that is not required.
* Replace "Description" with "Sends ping events to a responder component"
* Replace "boilerplate.h" in the implementation file with "sender.h"

You will end up with files as shown below. The modified ELI macro tells SST that this class `Sender` is a component and it should be registered to the name "PingPong.Sender" (i.e., "LibraryName.ElementName"). The class doesn't do anything yet, but is complete so we can compile it.

```cpp title="sender.h" showLineNumbers
#ifndef _SST_PINGPONG_SENDER_H
#define _SST_PINGPONG_SENDER_H

#include <sst/core/component.h>

namespace PingPong {

class Sender : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        Sender,                                         // Component class.
        "PingPong",                                     // Component library (for Python/library lookup)
        "Sender",                                       // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),                 // Version of the component (not related to the SST version)
        "Sends ping events to a responder component",   // Description
        COMPONENT_CATEGORY_UNCATEGORIZED                // Category
    )

    // Constructor
    Sender(SST::ComponentId_t id, SST::Params& params);

    // Destructor
    ~Sender();
};

} // namespace PingPong

#endif /* _SST_PINGPONG_SENDER_H */
```

```cpp title="sender.cc" showLineNumbers
#include <sst/core/sst_config.h> 

#include "sender.h"

using namespace PingPong;

Sender::Sender(SST::ComponentId_t id, SST::Params& UNUSED(params)) : SST::Component(id) { }

Sender::~Sender() { }
```

### Step 2: Create the Responder component
Repeat Step 2 for the Responder component to create the files `responder.h` and `responder.cc`. Use the following substitutions in the header boilerplate:
* Replace "LIBRARYNAME" with "PINGPONG"
* Replace "LibraryNamespace" and "LibraryName" with "PingPong"
* Replace "CLASSNAME" with "RESPONDER"
* Replace "ClassName" with "Responder"
* Replace "ElementName" with "Responder" - Note: This is the same as "ClassName" in this example but that is not required.
* Replace "Description" with "Responds to ping events with pong events"
* Replace "boilerplate.h" in the implementation file with "responder.h"

When you finish, you will have two more files, `responder.h` and `responder.cc`, that look like this.

```cpp title="responder.h" showLineNumbers
#ifndef _SST_PINGPONG_RESPONDER_H
#define _SST_PINGPONG_RESPONDER_H

#include <sst/core/component.h>

namespace PingPong {

class Responder : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        Responder,                                  // Component class.
        "PingPong",                                 // Component library (for Python/library lookup)
        "Responder",                                // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),             // Version of the component (not related to the SST version)
        "Responds to ping events with pong events", // Description
        COMPONENT_CATEGORY_UNCATEGORIZED            // Category
    )

    // Constructor
    Responder(SST::ComponentId_t id, SST::Params& params);

    // Destructor
    ~Responder();
};

} // namespace PingPong

#endif /* _SST_PINGPONG_RESPONDER_H */
```

```cpp title="responder.cc" showLineNumbers
#include <sst/core/sst_config.h> 

#include "responder.h"

using namespace PingPong;

Responder::Responder(SST::ComponentId_t id, SST::Params& UNUSED(params)) : SST::Component(id) { }

Responder::~Responder() { }
```

Next, we will compile both components into an element library and register it with SST.

### Step 3: Compile and register the PingPong element library
You can use the build infrastructure of your choice for your element library. SST uses Autotools but is regularly tested against libraries built with Autotools, CMake, and raw Makefiles. This tutorial library is simple so we will use a raw Makefile as shown. Create this file in in the same directory as you created your source files (e.g., `$HOME/sst-tutorial`).

```sh title="Makefile" showLineNumbers
# Acquire compile environment from sst-config utility
CXX=$(shell sst-config --CXX)
CXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)
LDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)

# make all - compile libPingPong.so and register (install) it
all: libPingPong.so install

# Compile library
libPingPong.so: sender.o responder.o
	$(CXX) $(CXXFLAGS) sender.o responder.o -o $@ $(LDFLAGS)

# Install (register) library with SST-Core using sst-register utility
install:
	sst-register PingPong PingPong_LIBDIR=$(CURDIR)

clean:
	rm -rf *.o libPingPong.so
```

Lines 2-4 of the Makefile use sst-config to locate a compiler and get the correct build flags. Lines 10-11 compile the library and line 15 registers it with the SST Core using `sst-register`. You can also run `sst-register` from the command line.

Run `make` in your tutorial directory to build and register your element library. You can check that the registration succeeded using the `sst-info` command line tool. Make sure the argument you provide to `sst-info` matches the one you gave to your element library in line 14 of your `sender.h` and `responder.h` header files. It is case sensitive.

```sh
$ make
$ sst-info PingPong
```

You will see output like this. 

```sh
PROCESSED 1 .so (SST ELEMENT) FILES FOUND IN DIRECTORY(s) /home/install/sst-core/lib/sstcore:/home/sst-tutorial
Filtering output on Element = "PingPong"
================================================================================
ELEMENT LIBRARY 0 = PingPong ()
Components (2 total)
   Component 0: Responder
      Description: Responds to ping events with pong events
      ELI version: 0.9.0
      Compiled on: Mar  4 2025 09:31:56, using file: ./responder.h
      Category: UNCATEGORIZED COMPONENT
      Parameters (0 total)
      Ports (0 total)
      SubComponent Slots (0 total)
      Statistics (0 total)
      Profile Points (0 total)
      Attributes (0 total)

   Component 1: Sender
      Description: Sends ping events to a responder component
      ELI version: 0.9.0
      Compiled on: Mar  4 2025 09:31:54, using file: ./sender.h
      Category: UNCATEGORIZED COMPONENT
      Parameters (0 total)
      Ports (0 total)
      SubComponent Slots (0 total)
      Statistics (0 total)
      Profile Points (0 total)
      Attributes (0 total)
```

Success! You've now registered a new element library containing two new components with SST. Next, we will add a ping and pong exchange to the components and generate a simulation with them.

## Exchanging SST Events

To enable the components to exchange events, we need to (1) define an event type, (2) add a port for sending and receiving events in each component, and (3) add an event handler to each component to handle incoming events.

#### Defining SST Events
In SST, an event is a message between components. Events may contain arbitrary information - whatever is needed by the exchanging components, with two restrictions: (1) an event must be a class that inherits from the `SST::Event` class and (2) events must be *serializable* and provide a serialization function. This is because SST is a parallel framework. When a source and destination component are not on the same process, SST will need to move the event to the destination process. This requires care for pointers in particular as the source and destination components may not share a virtual address space.

#### Event-driven simulation 
As an event-driven simulator, SST progresses simulation by executing events in time order. When an event is ready to execute, SST skips to the delivery time of that event and calls an event handler on the destination component. If the destination, as a result of handling an event, sends a new event, then SST will skip to that new event's delivery time and deliver it. This is the key optimization of event driven simulators: they skip through time, only executing when there is an event to handle. A corollary is that if there are no more events to handle, SST skips to a special sentinel exit event whose 'delivery' time is the end of time. *Therefore, components need to tell SST when a simulation is done.* For the same reason, there must also be *at least one event in SST's event queues at simulation time 0*. Otherwise, SST will skip directly to the sentinel exit event.

To recap:
* **Simulation begin:** At least one event needs to be in the SST event queue at time 0 of the simulation.
* **Simulation end:** Simulation ends when one or more components tell SST the simulation is done. 

For our simulation, this means we need to send our first "ping" event at time 0. SST provides components an opportunity to send these initial events during a `setup()` function provided by the `SST::Component` API. To initiate simulation, we will implement that function and use it to send the first event.

Our simulation should also end when the Sender receives a "pong" event. We will add some function calls to tell SST that the Sender is responsible for determining the end of simulation and also let SST know when the simulation ends.

#### A side note on clocks
SST treats clocks as events as well, or, strictly speaking, as *Activities*, which refer to both Events and Clocks in SST. An Event is a single Activity that gets delivered at certain time while a Clock is a recurring Activity that is triggered on a regular time interval. Thus, *if there is a clock anywhere in the simulation, the activity (event) queue will already have an event in it at time 0*. We do not have a clock in our component so this does not apply, but know that it is an alternate method of kicking off a simulation.

With that said, let's add event handling to our Sender and Responder components.

### 1. Create a new event type
Begin by creating an event class called "PingPongEvent" in a new file, "pingpong_event.h" as shown below. 
```cpp title="pingpong_event.h" showLineNumbers
#ifndef _SST_PINGPONG_EVENT_H
#define _SST_PINGPONG_EVENT_H

namespace PingPong {

class PingPongEvent : public SST::Event
{
public:
    PingPongEvent(bool ping) : SST::Event(), is_ping(ping) { }
    ~PingPongEvent() { }

    void setPing() { is_ping = true; }
    void setPong() { is_ping = false; }
    bool isPing() { return is_ping; }
    bool isPong() { return !is_ping; }

    // These functions and macros are required for SST's serialization
    // serialize_order and ImplementSerializable must be in a public section of the class
    PingPongEvent() : SST::Event() { } // Default constructor 
    
    void serialize_order(SST::Core::Serialization::serializer& ser) override {
        Event::serialize_order(ser); // Always serialize base class first
        SST_SER(is_ping);            // Serialize data members using SST_SER which is a macro
    }

    ImplementSerializable(PingPong::PingPongEvent); // Macro indicating this class is serializable

private:
    // True if a "ping", False if a "pong"
    bool is_ping;
};

} // namespace PingPong

#endif
```
As with components, `PingPongEvent` is largely a standard C++ class. It inherits from `SST:Event` and has one data member, a boolean indicating whether the event is a ping (request) or a pong (response). Lines 17-26 show the three things needed for serialization: (1) a default constructor, (2) a `serialize_order` function, and (3) the `ImplementSerializable` macro with the fully qualified class name. The `serialize_order` function should serialize every member of the event. When serializing events, SST calls this function to pack the event into a buffer and transfers it. SST then creates a new event using the default constructor and calls this function again to unpack the buffer into the newly created event. The `SST_SER` macro accepts POD types (e.g., bool, int, char, etc.), `std::string`, SST types such as `UnitAlgebra`, and C++ standard containers. To serialize a struct, serialize its members.

Include this new file at the top of both `sender.cc` and `responder.cc`.
```cpp title="sender.cc" showLineNumbers
#include <sst/core/sst_config.h>

#include "sender.h"
//highlight-next-line
#include "pingpong_event.h"
```
```cpp title="responder.cc" showLineNumbers
#include <sst/core/sst_config.h>

#include "responder.h"
//highlight-next-line
#include "pingpong_event.h"
```

### 2. Add a port
Ports are part of a component's ELI (recall: Element Library Info). Events may only be sent over Links and all Links are point-to-point and bidirectional.

Add a port to each component's ELI by adding the following documentation macro to their header files. As with the registration macro, this macro must be in a public section of the class. We can give the port any name that complies with the [SST naming conventions](./naming.md); we will use "send_port" and "response_port". The documentation macro takes a list of ports. Each port is a tuple with the port name, a description, and a comma-separated list of event types that the port sends and/or receives. The event types are not enforced by SST but they can help users ensure that connected ports are compatible.

Additionally, add a callback function to handle events arriving on the port and a pointer to the `SST::Link` that will connect to the port.

<div style={{"counter-reset": "line-count 7"}}>

```cpp title="sender.h" showLineNumbers
class Sender : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        Sender,                                         // Component class.
        "PingPong",                                     // Component library (for Python/library lookup)
        "Sender",                                       // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),                 // Version of the component (not related to the SST version)
        "Sends ping events to a responder component",   // Description
        COMPONENT_CATEGORY_UNCATEGORIZED                // Category
    )

    //highlight-start
    SST_ELI_DOCUMENT_PORTS( 
        {"send_port", "A port for sending ping messages and receiving pong messages", {"PingPong.PingPongEvent"} } 
    )
    //highlight-end

    // Constructor
    Sender(SST::ComponentId_t id, SST::Params& params);

    //Destructor
    ~Sender();

//highlight-start
    // Event handler
    void handle(SST::Event* event);

private:
    SST::Link* link;
//highlight-end
};
```

</div>
<div style={{"counter-reset": "line-count 7"}}>

```cpp title="responder.h" showLineNumbers
class Responder : public SST::Component
{
public:

    SST_ELI_REGISTER_COMPONENT(
        Responder,                                  // Component class.
        "PingPong",                                 // Component library (for Python/library lookup)
        "Responder",                                // Component name (for Python/library lookup)
        SST_ELI_ELEMENT_VERSION(1,0,0),             // Version of the component (not related to the SST version)
        "Responds to ping events with pong events", // Description
        COMPONENT_CATEGORY_UNCATEGORIZED            // Category
    )

    //highlight-start
    SST_ELI_DOCUMENT_PORTS( 
        {"response_port", "A port for receiving ping messages and sending pong messages", {"PingPong.PingPongEvent"} } 
    )
    //highlight-end

    // Constructor
    Responder(SST::ComponentId_t id, SST::Params& params);

    // Destructor
    ~Responder();

//highlight-start
    // Event handler
    void handle(SST::Event* event);

private:
    SST::Link* link;
//highlight-end
};
```
</div>

Eventually, to use these components in simulation, we will create an input configuration file for SST that connects a Sender's `send_port` to a Responder's `response_port` via an `SST::Link`. The components need to query which link was connected to their port. To do this, in each component's constructor, use [`configureLink`](../../core/component/link/configureLink.md) to get the link that was connected to the component's port. If the port was not connected in the input configuration, the `configureLink` call returns `nullptr`. We should check for this case and let the user know that they need to connect the port.

<div style={{"counter-reset": "line-count 7"}}>

```cpp title="sender.cc" showLineNumbers
Sender::Sender(SST::ComponentId_t id, SST::Params& UNUSED(params)) : SST::Component(id) { 
    link = configureLink("send_port", new SST::Event::Handler2<Sender, &Sender::handle>(this));
    sst_assert( link != nullptr, CALL_INFO, -1, "Error: 'send_port' is not connected to a link\n");
}
```
</div>
<div style={{"counter-reset": "line-count 7"}}>

```cpp title="responder.cc" showLineNumbers
Responder::Responder(SST::ComponentId_t id, SST::Params& UNUSED(params)) : SST::Component(id) { 
    link = configureLink("response_port", new SST::Event::Handler2<Responder, &Responder::handle>(this));
    sst_assert( link != nullptr, CALL_INFO, -1, "Error: 'response_port' is not connected to a link\n");
}
```
</div>

### 2. Implement event handlers 
SST event handlers are called by SST whenever an event arrives at a component. You already added the function signature to the header so all that remains is to implement it. This is the function we added. Events are delivered as an `SST::Event` pointer and need to be cast to whatever type you expect.
```cpp
void handle(SST::Event* event);
```

#### Sender
On the Sender side, the handler function should be receiving pong events so we can have the handler cast the incoming event to `PingPongEvent` and check that `isPong()` returns `true`. If it doesn't, we will assert a failure. If the event is a pong then the simulation is complete and the Sender will notify SST that the simulation is done.

Add this to the end of `sender.cc`.

<div style={{"counter-reset": "line-count 14"}}>

```cpp title="sender.cc" showLineNumbers
void Sender::handle(SST::Event* event) {
    PingPongEvent* pong = static_cast<PingPongEvent*>(event);
    sst_assert(pong->isPong(), CALL_INFO, -1, "This simulation is misconfigured. Sender did not receive a pong event.\n");
    delete pong; // The event handler is responsible for cleaning up incoming events!
}
```
</div>

#### Responder
On the Responder side things are a little different. The Responder receives a ping and sends a pong in response. The handler should check that an incoming event was a "ping" and then create a new pong event and send it. Once the Responder calls `send`, the component yields ownership of the event `pong` to SST. 

Add this to the end of `responder.cc`.

<div style={{"counter-reset": "line-count 14"}}>

```cpp title="sender.cc" showLineNumbers
void Responder::handle(SST::Event* event) {
    // Handle incoming ping event
    PingPongEvent* ping = static_cast<PingPongEvent*>(event);
    sst_assert(ping->isPing(), CALL_INFO, -1, "This simulation is misconfigured. Responder did not receive a ping event.\n");
    delete ping; // The event handler is responsible for cleaning up incoming events!

    // Send outgoing pong event
    PingPongEvent* pong = new PingPongEvent(false); // false = pong
    link->send(pong);
}
```
</div>
For more information on event handlers, [see the SST Event handler documentation.](../../core/events/event_handler.md)

### 4. Prepare to simulate the first event
Recall that as an event-driven simulator, SST must start simulation with at least one event in its event queues. To facilitate this, SST calls the function `setup()` on every component in the simulation just before it begins the simulation. This is the first opportunity components have to send simulation (sometimes called "timed") events. Any event sent in `setup()` will be sent at time 0.

Add the `setup()` function to `sender.h` and `sender.cc` as shown.

<div style={{"counter-reset": "line-count 30"}}>

```cpp title="sender.h" showLineNumbers
    // Event handler
    void handle(SST::Event* event);

    //highlight-next-line
    void setup();

private:
```
</div>

<div style={{"counter-reset": "line-count 20"}}>

```cpp title="sender.cc" showLineNumbers
void Sender::setup() {
    PingPongEvent* ping = new PingPongEvent(true); // true = ping
    link->send(ping);
}
```
</div>

### 5. Tell SST when to end simulation
The Sender needs to let SST know that it is responsible for detecting the end of simulation. To do this, add the two lines below to the constructor in `sender.cc`.

<div style={{"counter-reset": "line-count 7"}}>

```cpp title="sender.cc" showLineNumbers
Sender::Sender(SST::ComponentId_t id, SST::Params& UNUSED(params)) : SST::Component(id) { 
    link = configureLink("send_port", new Event::Handler2<Sender, &Sender::handle>(this));
    sst_assert( link != nullptr, CALL_INFO, -1, "Error: 'send_port' is not connected to a link\n");

    //highlight-start
    registerAsPrimaryComponent();  // This component is responsible for simulation end
    primaryComponentDoNotEndSim(); // The simulation should not end yet
    //highlight-end
}
```
</div>

[`registerAsPrimaryComponent()`](../../core/component/component/registerAsPrimaryComponent.md) and [`primaryComponentDoNotEndSim()`](../../core/component/component/primaryComponentDoNotEndSim.md) may be called by multiple components. Simulation will finish when *all* primary components indicate that it is OK to exit.

Finally, when Sender receives the pong event, let SST know that simulation is done. Modify its event handler as shown.

<div style={{"counter-reset": "line-count 17"}}>

```cpp title="sender.cc" showLineNumbers
void Sender::handle(SST::Event* event) {
    PingPongEvent* pong = static_cast<PingPongEvent*>(event);
    sst_assert(pong->isPong(), CALL_INFO, -1, "This simulation is misconfigured. Sender did not receive a pong event.\n");
    delete pong; // The event handler is responsible for cleaning up incoming events!

    //highlight-next-line
    primaryComponentOKToEndSim();
}
```

</div>

That's it! The components are ready to simulate. Rebuild and re-register the library.
```sh
$ make clean
$ make
```

## Run the simulation

Create an input configuration in a new Python file, "pingpong.py", as shown below. You'll need to instantiate a Sender and Responder and connect them together via their ports.

```py title="pingpong.py"
import sst

sender = sst.Component("sender", "PingPong.Sender")
responder = sst.Component("responder", "PingPong.Responder")

link = sst.Link("pingpong_link")
link.connect( (sender, "send_port", "1ms"), (responder, "response_port", "1ms") ) 
```

Run the simulation. The only output will be the simulated time since our components don't produce any console or statistics output.
```sh
$ sst pingpong.py
Simulation is complete, simulated time: 2 ms
```

Because we correctly serialized the `PingPongEvent`, the following will also work.
```sh
$ sst -n 2 pingpong.py      # Put sender and responder on different threads
$ mpirun -np 2 pingpong.py  # Put sender and responder on different ranks
```
