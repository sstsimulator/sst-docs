---
title: addGlobalParam
---

:::warning Deprecated
"GlobalParam" has been renamed to "SharedParam" in SST 15.0 to better reflect the shared rather than strictly global nature of these parameter sets. See [`addSharedParam`](./addSharedParam.md) instead.
::: 

It is common for multiple components or subcomponents in a simulation to share a common subset of parameters. Global parameter sets can be used to reduce memory usage during simulation construction for such cases. This is particularly helpful for very large simulations where the total state of the simulation graph before it is distributed may exceed the available memory on rank 0. To use global parameters, register parameters to named sets using `addGlobalParam()` and/or [`addGlobalParams()`](./addGlobalParams.md). Then, subscribe components and subcomponents to the named parameter set(s) using [`addGlobalParamSet()`](../component/addGlobalParamSet.md). In case of conflicts, parameters set directly on components take precedence over those provided in global parameter sets.

## Syntax
```python
sst.addGlobalParam(set_name, param_name, param_value)
```

## Parameters
* **set_name** (type: string) name of the parameter set to add this parameter to. If no set with the name exists, it will be constructed.
* **param_name** (type: string) name of the parameter to add
* **param_value** (type:string) value of the parameter to add
* **returns** none


## Example

```python
import sst

sst.addGlobalParam("global_set", "verbose", "true")
sst.addGlobalParam("global_set", "bandwidth", "50GB/s")
```

## Import
```python
import sst
```