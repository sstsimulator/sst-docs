---
title: setNonLocal
---

Marks the link as non-local: the other end of the link is connected to a component on a different rank and thread. This is used when each MPI rank loads its own configuration file (`--parallel-load=MULTI`), so a rank's file only describes its own components. The link must be connected to exactly one component in the file; it can be connected before or after this call. Each rank's file creates a link with the same name, connects its own side, and calls `setNonLocal()` with the rank and thread that holds the other side.

To connect the link and mark it non-local in one call, use [`connectNonLocal()`](./connectNonLocal.md). See [When to use connectNonLocal](./connectNonLocal.md#when-to-use-connectnonlocal) for when non-local links are needed instead of a regular `connect()` or `addLink()`.

## Syntax
```python
link_handle.setNonLocal(rank, thread)
```

## Parameters
* **rank** (type: int) Rank of the component on the other end of the link.
* **thread** (type: int) Thread of the component on the other end of the link.
* **returns** none

:::note
SST reports an error if the link is already non-local or is already connected to two components.
:::

## Example

<!--- SOURCE_CODE: sst-core/tests/test_setnonlocal0.py --->
<!--- SOURCE_CODE: sst-core/tests/test_setnonlocal1.py --->
Run with `mpirun -np 2 sst --parallel-load=MULTI test_setnonlocal.py`. Rank 0 loads `test_setnonlocal0.py` and rank 1 loads `test_setnonlocal1.py`.

```python title="Excerpt from sst-core/tests/test_setnonlocal0.py (rank 0)"
import sst

sst.setProgramOption("partitioner", "sst.self")

loader0 = sst.Component("Loader0", "coreTestElement.SubComponentLoader")
loader0.setRank(0,0)
sub0 = loader0.setSubComponent("mySubComp", "coreTestElement.SubCompSender",0)

link0 = sst.Link("link0")
# Other end of link0 is on rank 1, thread 0
#highlight-next-line
link0.setNonLocal(1,0)
sub0.addLink(link0, "sendPort", "1 us")
```

```python title="Excerpt from sst-core/tests/test_setnonlocal1.py (rank 1)"
import sst

sst.setProgramOption("partitioner", "sst.self")

loader1 = sst.Component("Loader1", "coreTestElement.SubComponentLoader")
loader1.setRank(1,0)
sub1 = loader1.setSubComponent("mySubComp", "coreTestElement.SubCompReceiver",0)

link0 = sst.Link("link0")
sub1.addLink(link0, "recvPort", "1 us")
# Other end of link0 is on rank 0, thread 0
#highlight-next-line
link0.setNonLocal(0, 0)
```

## Import
```python
import sst
```
