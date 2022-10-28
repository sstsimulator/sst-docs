---
id: connect
title: connect
---

Connect ports from two components with a link.

## Syntax
```python
port_tuple_1 = (component_handle_1, port_name_1, delay_1)
port_tuple_2 = (component_handle_2, port_name_2, delay_2)
link_handle.connect( port_tuple_1, port_tuple_2 )
```

## Parameters
* **port_tuple_1** (type: tuple) tuple identifying the first port to connect. Syntax for the tuple is `(component_handle, port_name, delay)` as shown above.
  * **component_handle** (type: component object) Python handle for the component to connect
  * **port_name** (type: string) name of the port within the component to connect the link to
  * **delay** (type: string) time it takes to send an event from this port to the port on the other side of the link. Often delays are symmetric, but different delays can be specified if needed. Additional delay can also be added (but not removed) by components during simulation.
* **port_tuple_2** (type: tuple) tuple identifying the second port to connect.
* **returns** none

## Examples

### Example 1
```python
# comp_cpu and comp_tracer are component handles generated from sst.Component(...)
link_cpu_tracer = sst.Link("link_cpu_tracer")
link_cpu_tracer.connect((comp_cpu, "mem_link", "100ps"), (comp_tracer, "northBus", "100ps"))
```

### Example 2
```python
# carWashComponent, carGeneratorComponent are component handles generated from sst.Component(...)
port0 = (carWashComponent, "port", "1ps")
port1 = (carGeneratorComponent, "port", "1ps")
sst.Link("MyLink").connect( port0, port1 )
```

## Import
```python
import sst
```