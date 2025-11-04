---
title: addSharedParamSet
---

Add a shared parameter set to a PortModule's parameters. Using shared parameter sets reduces memory overhead and can be useful when simulating very large systems where many elements have a common parameter subset. Parameters set directly on a PortModule take precedence over shared parameters if there is a conflict. 

## Syntax
```python
portmodule.addSharedParamSet(set_name)
```

## Parameters
* **set_name** (type: string) Name of the shared parameter set. The name must be registered with SST using [`sst.addSharedParams`](../general/addSharedParams.md).
* **returns** none

## Example

```python
import sst

shared_params = { 
    "param0" : "val0",
    "param1" : "val1",
    "param2" : "val2",
}

sst.addSharedParams("example_params", shared_params)

# Pseudo-code: Create two components and attach
# a port module to each
component0 = sst.Component(...)
portmodule0 = component0.addPortModule(...)
component1 = sst.Component(...)
portmodule1 = component1.addPortModule(...)

#highlight-start
portmodule0.addSharedParamSet("example_params")
portmodule1.addSharedParamSet("example_params")
#highlight-end
```

## Import
```python
import sst
```