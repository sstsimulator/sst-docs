---
title: SST Library Interfaces
---

To enable SST Elements to interoperate in a standard way, a couple common interface APIs are declared in the SST Core. One interface, `simpleNetwork`, defines an interface between a network and an endpoint. A second interface, `StandardMem`, defines an interface between a memory system and a CPU or other compute-type element. Using these interfaces allows various element libraries to be easily swapped at runtime as well as eliminates inter-element-library dependencies.

Interfaces in SST are implemented as SubComponents. The library providing an interface provides a SubComponent that inherits from the desired interface. A Component wishing to communicate with that library would then load the interface SubComponent. For example, there are multiple SST Element libraries that provide the SimpleNetwork interface, including merlin, kingsley, and shogun. Each of these libraries has a SubComponent that inherits from `SST::Interfaces::SimpleNetwork`. An endpoint that sits on a network would then create a SubComponent slot that accepts a SubComponent of type `SST::Interfaces::SimpleNetwork`. The endpoint can then be connected to any of the available networks by loading the appropriate network's interface subcomponent into the endpoint's subcomponent slot. 

## SST Standard Events
In addition to interfaces, SST Core also defines some standard events. These events are simple and targeted towards development and testing use cases. They are not generally useful for "real" simulations where events are typically more complex. The two events provided by the Core are `StringEvent` and `TestEvent`.

