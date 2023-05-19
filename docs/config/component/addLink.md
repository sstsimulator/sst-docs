---
title: addLink
---

<!---
SAND2022-6843 O
Source: sst-documentation/manuals/python
--->


Connects a link to the specified port with the specified latency on the link. You can also connect a link by using [`Link.connect()`](../link/connect). This function applies to both Components and SubComponents.

## Syntax
```python
component.addLink(link, port, latency=link_default)
```

## Parameters
* **link** (type: sst.Link) sst.Link object that will be connected to the port 
* **port** (type: string) name of the port to connect the link to 
* **latency** (type: string or sst.UnitAlgebra) Latency of the link from the perspective of this Component/SubComponent sending an event. This parameter is optional and the call will use the default latency set on the link if it’s not specified in the call. 
* **returns** none


## Example

```python
import sst

component0 = sst.Component("c0", "simpleElementExample.example0")
link0 = sst.Link("link")

#highlight-next-line
component0.addLink(link0, "port", "1ns")
```

## Import
```python
import sst
```
