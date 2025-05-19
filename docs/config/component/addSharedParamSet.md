---
title: addSharedParamSet
---

Add a shared parameter set to a component's parameters. Using shared parameter sets reduces memory overhead and can be useful when simulating very large systems where many components have a common parameter subset. Parameters set directly on a component take precedence over shared parameters if there is a conflict. 

## Syntax
```python
component.addSharedParamSet(set_name)
```

## Parameters
* **set_name** (type: string) Name of the shared parameter set. The name must be registered with SST using [`sst.addSharedParams`](../general/addSharedParams.md).
* **returns** none

## Example


## Import
```python
import sst

shared_params = { 
    "param0" : "val0",
    "param1" : "val1",
    "param2" : "val2",
}

sst.addSharedParams("example_params", shared_params)

component0 = sst.Component(...)
component1 = sst.Component(...)

#highlight-start
component0.addSharedParamSet("example_params")
component1.addSharedParamSet("example_params")
#highlight-end
```

## Import
```python
import sst
```