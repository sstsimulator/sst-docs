---
title: setCallPythonFinalize
---

Sets whether or not `Py_Finalize` will be called when SST model generate finishes. `Py_Finalize` is called by default if this function is not used.

## Syntax
```python
sst.setCallPythonFinalize(call_finalize)
```

## Parameters
* **call_finalize** Whether SST should call `Py_Finalize` or not
* **returns** none

## Example

```python
import sst

sst.setCallPythonFinalize(False)
```

## Import
```python
import sst
```