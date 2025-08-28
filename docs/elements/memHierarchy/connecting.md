---
title: Connecting to MemHierarchy
---

To connect a processor, MMIO device, or other component to memHierarchy, load MemHierarchy's `memHierarchy.StandardInterface` into a [SubComponent Slot](../../core/eli/document/sst_eli_document_subcomponent_slots.md). Once it is loaded, you can interact with the interface using function calls to send and receive memory requests. Additionally, you may register your endpoint as an MMIO device if you wish which allows other components that are reachable from your device to interact with it via Read and Write requests.

For more detail on `memHierarchy.StandardInterface`'s implementation of `SST::Interfaces::StandardMem` [see the guide here.](./stdmem.mdx). For API documentation of `SST::Interfaces::StandardMem` [see the documentation page.](../../core/iface/StandardMem/class.md)

### Direct, Bus, and Network connectivity
The StandardInterface subcomponent needs to be connected to a memHierarchy subsystem. It can be connected directly to a memHierarchy component (Bus, Cache, MemoryController, etc) or it can be connected to a network that implements the `SST::Core::SimpleNetwork` API and has memHierarchy components on it. The decision can be made at runtime using by configuring the StandardInterface differently in an SST input file.

**Recall:** SST subcomponents can be loaded as *user subcomponents* that you explicitly load in an input file OR they a component can load a subcomponent *anonymously* by instantiating the subcomponent itself. StandardInterface can be instantiated in both ways.

## Modify your component to load `memeHierarchy.StandardInterface`
For an example, take a look at miranda's `RequestGenCPU` (sst-elements/src/sst/elements/miranda/mirandaCPU.h and mirandaCPU.cc). Miranda is a processor that uses a request generator to generate a stream of memory accesses. The variable names are slightly different from below (e.g., 'cache_link' instead of 'memory' for the pointer to a StandardInterface instance) but the process is the same. You can also look at MemHierarchy's test CPU which is located at sst-elements/src/sst/elements/memHierarchy/testcpu/standardCPU.h and standardCPU.cc. The test CPU generates a random stream of memory accesses and is used by memHierarchy tests.

The following class header snippet shows additions needed to load a subcomponent class. 
* **Lines 5-7** Add a new subcomponent slot using the documentation macro
* **Line 10** This is a callback function used to deliver `StandardMem::Request` to your component
* **Lines 13-16** These lifecycle functions need to be added to your component. If you are loading the interface into a subcomponent, you also need to ensure that all "parent" subcomponents, including the ultimate parent component, also implement these functions and invoke them for your subcomponent. See [SST lifecycle](../../guides/concepts/lifecycle.mdx) for more information.
* **Lines 20-34** This class is used by the callback function in line 10 to dispatch Requests by type. Add a `handle` function for each `StandardMem::Request` type your component can handle. For example, if you have a CPU that sends Reads and Writes, you would need to support ReadResponse and WriteResponse.
* **Line 36** Pointer to the loaded StandardInterface subcomponent.
* **Line 37** Pointer to an instance of the `ExampleMemHandlers` class.

```cpp title="ExampleComponent showing additions needed to support StandardInterface" showLineNumbers
class ExampleComponent : public SST::Component {
public:
    // Other documentation macros

    SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(
        { "memory", "Interface to a memory hierarchy", "SST::Interfaces::StandardMem" }
    )

    // A callback that StandardMem will use to deliver incoming events
    void memoryCallback(SST::Interfaces::StandardMem::Request* request); 

    // Add these SST lifecycle functions if you do not already have them
    void init(unsigned int phase) override;
    void setup() override;
    void complete(unsigned int phase) override;
    void finish() override;

private:
    // A class to handle StandardMem::Request by type
    class ExampleMemHandlers : public SST::Interfaces::StandardMem::RequestHandler {
    public:
        friend class ExampleComponent; // Friending the component class is often useful

        ExampleMemHandlers(ExampleComponent* comp, SST::Output* out) : 
                SST::Interfaces::StandardMem::RequestHandler(out), comp(comp) {}
        
        virtual ~ExampleMemHandlers() {}

        // Add a stub for each StandardMem::Request type your component may handle
        virtual void handle(SS::Interfaces::StandardMem::ReadResp* read_resp) override;
        virtual void handle(SS::Interfaces::StandardMem::WriteResp* write_resp) override;

        ExampleComponent* comp;
    };

    SST::Interfaces::StandardMem *memory; // Pointer to StandardMem interface
    ExampleMemHandlers* handlers; // Pointer to an instance of the request handler class
}
```

There are two common ways to load `memHierarchy.StandardInterface`. The first is to require that it be configured in the SST input file. The second is to check whether the subcomponent was configured in the input file and provide a default configuration if not. Because `StandardInterface` needs a port, if it is not configured in the input file, your component must provide a port for `StandardInterface` to use. If it is configured in the input file, then `StandardInterface` can use its own port.

*Note: StandardMem needs a [`TimeConverter`](../../core/timeconverter/class.md). If your component registers a clock, use the TimeConverter returned by the registration call. If your component does not register a clock, create a TimeConverter to use. This is only used if you add extra latency when sending events so in many cases the value will not matter.*

To require that the subcomponent be configured in the input file, use this code snippet in your component's constructor.
```cpp title="Load memHierarchy.standardMem as a user subcomponent"
// Acquire a timeconverter using one of these methods
// SST::TimeConverter timeconverter = registerClock(rate, handler);
// OR
// SST::TimeConverter timeconverter = getTimeConverter("1ns");

// Function callback for handling requests
auto callback = new SST::StandardMem::Handler<ExampleComponent>(this, &ExampleComponent::memoryCallback);

memory = loadUserSubComponent<SST::Interfaces::StandardMem>("memory", 
        SST::ComponentInfo::SHARE_NONE, &timeconverter, callback);

sst_assert(memory, CALL_INFO, -1, "Error: No subcomponent was found in the 'memory' subcomponent slot.");

handlers = new ExampleRequestHandlers(this, &(getSimulationOutput())); // Any output object is fine
```

To provide an optional default configuration, add this snippet to the constructor instead. Replace `port_to_use` with a port provided by the loading component. That port will need to be connected to a memHierarchy component or to a network with other memHierarchy components in the SST input file.

```cpp title="Load memHierarchy.standardMem as a user subcomponent with a default if not declared"
// Acquire a timeconverter using one of the following
// SST::TimeConverter timeconverter = registerClock(rate, handler);
// OR
// SST::TimeConverter timeconverter = getTimeConverter("1ns");

// Function callback for handling requests
auto callback = new SST::StandardMem::Handler<ExampleComponent>(this, &ExampleComponent::memoryCallback);

memory = loadUserSubComponent<SST::Interfaces::StandardMem>("memory", SST::ComponentInfo::SHARE_NONE, &timeconverter, callback);

if (!memory) { // Fallback path
    Params stdmem_params;
    stdmem_params.insert("port", "port_to_use"); // Replace port_to_use with a port belonging to this component 
	
    memory = loadAnonymousSubComponent<Interfaces::StandardMem>("memHierarchy.standardMem", "memory", 
            0, ComponentInfo::SHARE_PORTS, stdmem_params, &timeconverter, callback);

    sst_assert(memory, CALL_INFO, -1, 
            "Error: No subcomponent was found in the 'memory' subcomponent slot and unable to load a default.");
}

handlers = new ExampleRequestHandlers(this, &(getSimulationOutput())); // Any output object is fine
```

Finally, implement or modify the implementation of for each of the four lifecycle functions. Additionally, implement the `StandardMem::Request` callback and handler functions as shown.

:::info Important
Once an event is delivered via the callback, *your class owns it and is responsible for deleting it*.
:::

```cpp title="ExampleComponent function implementations"

// Modify and/or implement the four lifecycle functions
void ExampleComponent::init(unsigned int phase) {
    memory->init(phase);
}

void ExampleComponent::setup() {
    memory->setup();
}

void ExampleComponent::complete(unsigned int phase) {
    memory->complete(phase);
}

void ExampleComponent::finish() {
    memory->finish();
}

// Use callback to dispatch event to handlers
void ExampleComponent::memoryCallback(StandardMem::Request* req) {
    req->handle(handlers);
    delete req;
}

// Implement handler for each StandardMem::Request type as needed
void ExampleComponent::ExampleMemHandlers::handle(SST::Interfaces::StandardMem::ReadResp* read_resp) {
    /* Do whatever processing of the read response that you need */
}

void ExampleComponent::ExampleMemHandlers::handle(SST::Interfaces::StandardMem::WriteResp* write_resp) {
    /* Do whatever processing of the write response that you need */
}
```

### (OPTIONAL) Register as an MMIO device
You can optionally register your component as an MMIO device using the interface's [`setMemoryMappedAddressRegion()`](../../core/iface/StandardMem/setMemoryMappedAddressRegion.md). This must be called in your component's constructor. The address you give to your device must not overlap with any other mapped address, including memories and MMIO devices. MemHierarchy will always treat accesses to MMIO addresses as noncacheable.

```cpp
// Map 8 bytes starting at address 0 to this device
memory->setMemoryMappedAddressRegion(0, 8);
```

## Connecting to memHierarchy in your input configuration

### Using an anonymous subcomponent (if supported)

:::info Important
You cannot use this approach to connect to a network. Use user-defined subcomponents instead.
:::

If you are loading the subcomponent using the default "fallback" path described earlier, connect a port belonging to your component to a memHierarchy component as shown in the example. Ensure this is the same port you pass in the parameter object given to the `loadAnonymousSubComponent` call in your component's constructor.
```py
cpu = sst.Component("ExampleComponent", "alibrary.ExampleComponent")

cache = sst.Component("L1Cache", "memHierarchy.Cache")

link = sst.Link("link")
# Replace port_to_connect with the SAME port name that you used
# to configure the StandardInterface in your component's constructor
#highlight-next-line
link.connect( (cpu, "port_to_connect", "1ns"), (cache, "highlink", "1ns") )
```

### Using a user-defined subcomponent
User-defined subcomponents are configured in the SST input file using [`setSubComponent()`](../../config/component/setSubComponent.md). Declaring the subcomponent in the input allows its port to be used and allows you to pass parameters to the interface if you wish.

#### To connect directly to a memHierarchy component (Cache, Bus, MemoryController, etc.)
Load the interface into your component and then connect the interface's `lowlink` port to a memHierarchy component. 
```py
cpu = sst.Component("ExampleComponent", "alibrary.ExampleComponent")
#highlight-next-line
iface = cpu.setSubComponent("memory", "memHierarchy.standardInterface")

cache = sst.Component("L1Cache", "memHierarchy.Cache")

link = sst.Link("link")
#highlight-next-line
link.connect( (iface, "lowlink", "1ns"), (cache, "highlink", "1ns") ) 
```

#### To connect through a network to a memHierarchy component
Any memHierarchy element (component or subcomponent) that connects to a network needs to use a MemNIC to manage the translation between memHierarchy events and SimpleNetwork events. You will need to load the `StandardInterface` into your component and then load `memHierarchy.MemNIC` into the `StandardInterface` subcomponent. Connect the MemNIC's port to the network.

```py
cpu = sst.Component("ExampleComponent", "aLibrary.ExampleComponent")
iface = cpu.setSubComponent("memory", "memHierarchy.standardInterface")
#highlight-start
cpu_nic = iface.setSubComponent("lowlink", "memHierarchy.MemNIC")
cpu_nic.addParams( ..params.. )
#highlight-end

rtr = sst.Component("router", "merlin.hr_router")
rtr.addParams( ..params.. )

link = sst.Link("link")
#highlight-next-line
link.connect( (cpu_nic, "port", "1ns"), (rtr, "port0", "1ns") )
```
