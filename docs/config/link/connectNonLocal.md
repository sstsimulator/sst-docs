---
title: connectNonLocal
---

Connects one port to the link and marks the link as non-local, meaning the other end of the link is on a different rank and thread. This is equivalent to connecting the port with [`addLink()`](../component/addLink.md) and then calling [`setNonLocal()`](./setNonLocal.md). See `setNonLocal()` for how non-local links are used with `--parallel-load=MULTI`.

The first argument is a tuple describing the local port, with the same fields as [`connect()`](./connect.md). The second is a tuple giving the rank and thread of the other end.

## When to use connectNonLocal
Most configuration files describe the whole simulation, and every rank loads the same file (or rank 0 loads it and distributes the graph). In that case, both ends of every link are in the file, so use [`connect()`](./connect.md) or [`addLink()`](../component/addLink.md). SST works out which links cross rank or thread boundaries when it partitions the graph.

Use `connectNonLocal()` only when each rank loads its own configuration file with `--parallel-load=MULTI`. Each file describes just the components on that rank, so a link that crosses to another rank has only one end in the file. `connect()` cannot be used because the remote component doesn't exist in the file. A link with only one end connected by `addLink()` is reported as a dangling link unless it is marked non-local. `connectNonLocal()` connects the local end and records where the remote end lives. The file on the other rank must create a link with the same name and connect its end in the same way.

Splitting a large configuration into per-rank files lets each rank build only its part of the graph, which can speed up loading for very large simulations. You rarely need to write these files by hand: running SST with `--output-config` and `--parallel-output` on multiple ranks writes one Python file per rank, and those files use `connectNonLocal()` for every link that crosses ranks. They can then be loaded with `--parallel-load=MULTI`.

:::note
A non-local link can have only one component connected to it in the file. SST reports an error if a second component is connected to it.
:::

## Syntax
```python
port_tuple = (component_handle, port_name, latency=default)
remote_tuple = (rank, thread)
link_handle.connectNonLocal( port_tuple, remote_tuple )
```

## Parameters
* **comp** (type: Component or SubComponent) Component or SubComponent object that the port belongs to.
* **port** (type: string) Port to connect to.
* **latency** (type: string or UnitAlgebra) OPTIONAL. Latency of the link from the perspective of this Component/SubComponent. If not specified, the default latency of the link is used.
* **rank** (type: int) Rank of the component on the other end of the link.
* **thread** (type: int) Thread of the component on the other end of the link.
* **returns** none

## Example

```python
import sst

sub0 = loader0.setSubComponent("mySubComp", "coreTestElement.SubCompSender", 0)

link0 = sst.Link("link0")
# Connect sub0's 'sendPort' to link0; the other end is on rank 1, thread 0
#highlight-next-line
link0.connectNonLocal( (sub0, "sendPort", "1 us"), (1, 0) )
```

To have SST generate per-rank files from an existing configuration and then load them:
```sh
# Writes my_config0.py and my_config1.py, one per rank
mpirun -np 2 sst --run-mode=init --output-config=my_config.py --parallel-output my_sim.py
# Each rank loads its own file
mpirun -np 2 sst --parallel-load=MULTI my_config.py
```

## Import
```python
import sst
```
