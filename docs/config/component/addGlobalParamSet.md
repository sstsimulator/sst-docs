---
title: addGlobalParamSet
---

:::warning Deprecated
"GlobalParam" has been renamed to "SharedParam" in SST 15.0 to better reflect the shared rather than strictly global nature of these parameter sets. See [`addSharedParamSet`](./addSharedParamSet.md) instead.
::: 

Add a global parameter set to a component's parameters. Using global parameter sets reduces memory overhead and can be useful when simulating very large systems where many components have a common parameter subset. Parameters set directly on a component take precedence over global parameters if there is a conflict. 

## Syntax
```python
component.addGlobalParamSet(set_name)
```

## Parameters
* **set_name** (type: string) Name of the global parameter set. The name must be registered with SST using [`sst.addGlobalParams`](../general/addGlobalParams.md).
* **returns** none

## Example


## Import
```python
import sst

global_params = { 
    "param0" : "val0",
    "param1" : "val1",
    "param2" : "val2",
}

sst.addGlobalParams("example_params", global_params)

component0 = sst.Component(...)
component1 = sst.Component(...)

#highlight-start
component0.addGlobalParamSet("example_params")
component1.addGlobalParamSet("example_params")
#highlight-end
```

## Import
```python
import sst
```
