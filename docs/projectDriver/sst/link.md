---
id: link
title: sst.Link()
---

### Remarks

Creates a Link. A Link connects two ports and sends Events between the two ports.

**NOTE**: This only creates and names the link. A call to [connect()](projectDriver/link/connect.md) is required to complete setting up the link.

## Requirements

```python
import sst
```

## Syntax

```python
link = sst.Link("linkName")
```

## Parameters

**linkName** - A name for the link.

## Return Value

**link** - a link object. You can use it to link two components together.

## Examples

### Example 1
```python
link = sst.Link("MyLink")
```

## See Also

- [connect()](projectDriver/link/connect.md)

