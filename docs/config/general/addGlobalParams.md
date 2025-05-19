---
title: addGlobalParams
---

:::warning Deprecated
"GlobalParam" has been renamed to "SharedParam" in SST 15.0 to better reflect the shared rather than strictly global nature of these parameter sets. See [`addSharedParams`](./addSharedParams.md) instead.
::: 


It is common for multiple components or subcomponents in a simulation to share a common subset of parameters. Global parameter sets can be used to reduce memory usage during simulation construction for such cases. This is particularly helpful for very large simulations where the total state of the simulation graph before it is distributed may exceed the available memory on rank 0. To use global parameters, register parameters to named sets using [`addGlobalParam()`](./addGlobalParam.md) and/or `addGlobalParams()`. Then, subscribe components and subcomponents to the named parameter set(s) using [`addGlobalParamSet()`](../component/addGlobalParamSet.md). In case of conflicts, parameters set directly on components take precedence over those provided in global parameter sets.

## Syntax
```python
sst.addGlobalParams(set_name, params)
```

## Parameters
* **set_name** (type: string) name of the parameter set to add the parameters to. If no set with the name exists, it will be constructed.
* **params** (type: dictionary) a Python dict of key, value pairs
* **returns** none


## Example

```python
import sst

params = { "verbose" : True, "bandwidth" : "50GB/s" }

sst.addGlobalParams("global_set", params)
```

## Import
```python
import sst
```