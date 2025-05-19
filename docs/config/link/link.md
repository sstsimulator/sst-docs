---
title: Link
---

Creates a Link. A Link connects two ports and enables the components on each port to send events across the link.

**NOTE**: This only creates the link. The link must also be connected to ports via [Link.connect()](../link/connect.md) or [(Sub)Component.addLink()](../component/addLink.md).

## Syntax

```python
link = sst.Link(name, latency=None)
```

## Parameters
* **name** (type: string) Unique, user-defined name for the link. 
* **latency** (type: string or UnitAlgebra) Default latency for the link. This is optional and will be used if no latency is specified in subsequent calls to Link.connect() or (Sub)Component.addLink().
* **returns** Link object

:::info
`name` must follow SST's [element naming conventions](../../guides/dev/naming.md).
:::

## Example

```python
import sst

link = sst.Link("link0")
```

## Import
```python
import sst
```
