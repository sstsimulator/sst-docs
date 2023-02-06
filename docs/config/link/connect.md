---
title: connect
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->

Connects two ports using the link object. 

Actual parameters are two tuples representing the information for the ports to be connected. The fields in the tuple are (comp, port, latency) as describe in the parameter description. 


## Syntax
```python
port_tuple_1 = (component_handle_1, port_name_1, latency_1=default)
port_tuple_2 = (component_handle_2, port_name_2, latency_2=default)
link_handle.connect( port_tuple_1, port_tuple_2 )
```

## Parameters
* **comp** (type: Component or SubComponent) Component or SubComponent object that the port belongs to.
* **port** (type: string) Port to connect to.
* **latency** (type: string or UnitAlgebra) Latency of link from the perspective of the corresponding Component/SubComponent sending an event. This is optional, and if not specified, the default latency of the link will be used. If no latency is set, either in the call or as a default, the call will fatal. 
* **returns** none


## Examples

### Example 1
```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
component1 = sst.Component("c1", "simpleElementExample.example0")

link = sst.Link("component_link")
# Connect components via their ports which are named 'port'
link.connect( (component0, "port", "1ns"), (component1, "port", "1ns") )
```

## Import
```python
import sst
```