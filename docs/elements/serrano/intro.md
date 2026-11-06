---
title: serrano
---

*Serrano* is an experimental high-level model of a coarse-grain reconfigurable processor. 

:::note At a Glance

**Source Code:** [sst-elements/.../serrano](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/serrano) &nbsp;  
**SST Name:** `serrano` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Experimental &nbsp;   
**Last Released:** Never

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info serrano` or `sst-info serrano.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `serrano` | `Serrano` | Component | Coarse-grain reconfigurable array (CGRA) model; runs one or more kernels, each a graph file of units and links given by the `kernel0`, `kernel1`, ... parameters |
| `serrano` | `SerranoIteratorUnit` | SubComponent | Unit that produces a sequence of values (`ITERATOR` nodes in a kernel graph) |
| `serrano` | `SerranoBasicUnit` | SubComponent | Unit that applies a simple operation to its inputs (`ADD` and `SUB` nodes) |
| `serrano` | `SerranoPrinterUnit` | SubComponent | Unit that prints the values it receives (`PRINTER` nodes) |

The units are created automatically from the nodes in each kernel graph. For example, `serrano/tests/graphs/sum.graph` adds two integer sequences and prints the result:

<!--- SOURCE_CODE: sst-elements/src/sst/elements/serrano/tests/graphs/sum.graph --->
```text title="serrano/tests/graphs/sum.graph"
NODE 0 ITERATOR INT32 start 0 step 1 end 100
NODE 1 ITERATOR INT32 start 100 step 1 end 200
NODE 2 ADD INT32
NODE 3 PRINTER INT32

LINK 0 0 2
LINK 1 1 2
LINK 2 2 3
```

<!--- SOURCE_CODE: sst-elements/src/sst/elements/serrano/tests/test_serrano.py --->
```python title="Running the sum kernel (based on serrano/tests/test_serrano.py)"
import sst

sst.setProgramOption("timebase", "1ps")

serrano = sst.Component("serrano", "serrano.Serrano")
serrano.addParams({
    "kernel0" : "sum.graph",
})
```
