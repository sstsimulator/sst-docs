---
title: addSharedParam
---

It is common for multiple components or subcomponents in a simulation to share a common subset of parameters. Shared parameter sets can be used to reduce memory usage during simulation construction for such cases. This is particularly helpful for very large simulations where the total state of the simulation graph before it is distributed may exceed the available memory on rank 0. To use shared parameters, register parameters to named sets using `addSharedParam()` and/or [`addSharedParams()`](./addSharedParams.md). Then, subscribe components and subcomponents to the named parameter set(s) using [`addSharedParamSet()`](../component/addSharedParamSet.md). In case of conflicts, parameters set directly on components take precedence over those provided in shared parameter sets.

## Syntax
```python
sst.addSharedParam(set_name, param_name, param_value)
```

## Parameters
* **set_name** (type: string) name of the parameter set to add this parameter to. If no set with the name exists, it will be constructed.
* **param_name** (type: string) name of the parameter to add
* **param_value** (type:string) value of the parameter to add
* **returns** none


## Example

```python
import sst

# Add two parameters to a parameter set named "shared_params"
sst.addSharedParam("shared_params", "verbose", "true")
sst.addSharedParam("shared_params", "bandwidth", "50GB/s")
```

## Import
```python
import sst
```