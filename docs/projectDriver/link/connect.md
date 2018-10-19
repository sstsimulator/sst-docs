---
id: connect
title: connect()
---

### Remarks

Connect ports from two components with a link.

## Requirements

```python
import sst
```

## Syntax

```python
link.connect( (component1, "port1", "delay1"), (component2, "port2", "delay2") )
```

## Parameters

**component1** & **component2** - A component created using [sst.Component](projectDriver/sst/component.md).

**port1** & **port2** - The port within the component to connect to.

**delay1** & **delay2**  - The time it takes to send event from one component to the other. Usually delay1 and delay2 are the same but can be different if events need to move faster/slower between the two components.

## Return Value

**None**

## Examples

### Example 1
```python
link_cpu_tracer = sst.Link("link_cpu_tracer")
link_cpu_tracer.connect((comp_cpu, "mem_link", "100ps"), (comp_tracer, "northBus", "100ps"))
```

### Example 2
```python
sst.Link("MyLink").connect( (carWashComponent, "port", "1ps"), (carGeneratorComponent, "port", "1ps") )
```
