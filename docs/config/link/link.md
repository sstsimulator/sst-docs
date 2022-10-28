---
id: link
title: Link
---

Creates a Link. A Link connects two ports and enables the components on each port to send events across the link.

**NOTE**: This only creates and names the link. A call to [connect()](connect) is required to complete setting up the link.

## Syntax

```python
link = sst.Link("linkName")
```

## Parameters
**linkName** - A unique, user-defined name for the link
**returns** - a handle to the newly created link object. The handle can then be used to connect each end of the link to Component ports.

## Examples

### Example 1
```python
link = sst.Link("MyLink")
```

## Import
```python
import sst
```
