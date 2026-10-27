---
title: mercury
---

The *mercury* library enables simulating the behavior of large-scale applications. The elements are derived from functionality available in [macro](../macro/intro) and designed for use with the rest of the SST ecosystem. Mercury achieves accurate results by mimicking (skeletonizing) both the computation and network communication patterns of the application under test. Work is underway to automate this approach by leveraging compiler frameworks.

:::note At a Glance

**Source Code:** [sst-elements/.../mercury](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/mercury) &nbsp;  
**SST Name:** `mercury` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.0

:::

### Required dependencies
*None* 

### Optional dependencies
*None* 

## Elements
Mercury registers its elements under the SST library name `hg`. Use `hg`, not `mercury`, when referencing these elements in an SST input file.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `hg` | `Node` | Component | Mercury node |
| `hg` | `NodeCL` | Component | Mercury node using the ComputeLibrary |
| `hg` | `OperatingSystem` | SubComponent | Mercury operating system; loads into a node's `os_slot` |
| `hg` | `OperatingSystemCL` | SubComponent | Mercury operating system using the ComputeLibrary; loads into a `NodeCL` `os_slot` |
| `hg` | `nic` | SubComponent | Mercury NIC; loads into a node's `nic_slot` |

Skeleton applications are built as separate element libraries. Each one registers a `loader` subcomponent under the application's own library name (for example, the `ostest` test application), and is selected through `OperatingSystem` parameters rather than loaded directly.

```python
node = sst.Component("node0", "hg.Node")
os = node.setSubComponent("os_slot", "hg.OperatingSystem")
os.addParams({ "app1.name" : "ostest",
               "app1.exe_library_name" : "ostest" })
```


