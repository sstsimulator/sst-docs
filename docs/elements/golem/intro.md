---
title: golem
---

Golem is an SST element designed for simulating processing using memory (PUM)/in situ computing components. Currently Golem supports analog matrix vector multiplication (MVM) arrays. These arrays can be simulated either through ideal operation emulation or optionally use Sandia's [CrossSim](https://github.com/sandialabs/cross-sim) analog MVM array simulator to incorporate analog non-idealities. For integrating these arrays with other SST components, Golem provides implementations of the RoCC co-processor interface which can be directly connected to a [Vanadis CPU core](../vanadis/intro.md).

## Using CrossSim
Golem searches the `PYTHONPATH` for CrossSim by default. This means CrossSim should be installed with the local python interpreter such that the command `python3 -c 'import simulator'` runs without error. The only officially supported configuration is when the same python interpreter that is used for the SST-Core is used for CrossSim, but other configurations may work so long as both python interpreters are the same version.

:::note At a Glance

**Source Code:** [sst-elements/.../golem](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/golem) &nbsp;  
**SST Name:** `golem` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
* [CrossSim](https://github.com/sandialabs/cross-sim)
* [NumPy](https://numpy.org/) Needed at build time for the CrossSim arrays (`CrossSimFloatArray`, `CrossSimIntArray`). It is found automatically if it is installed for the Python that SST-Core was built with; otherwise, configure SST-Elements with `--with-numpy=/path/to/numpy/include`.


## Elements
Use `sst-info golem` or `sst-info golem.<element>` to see each element's parameters, ports, and statistics. Golem's elements attach to a [Vanadis](../vanadis/intro.md) core: a RoCC accelerator goes in the core's `rocc` slot, and a compute array goes in the accelerator's `array` slot.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `golem` | `RoCCAnalogFloat` | SubComponent | RoCC accelerator interface that issues floating-point matrix-vector multiply (MVM) operations to its compute array |
| `golem` | `RoCCAnalogInt` | SubComponent | RoCC accelerator interface that issues integer MVM operations to its compute array |
| `golem` | `MVMFloatArray` | SubComponent | Compute array that performs ideal floating-point MVM directly |
| `golem` | `MVMIntArray` | SubComponent | Compute array that performs ideal integer MVM directly |
| `golem` | `CrossSimFloatArray` | SubComponent | Compute array that models floating-point analog MVM with CrossSim. Built only when NumPy is found |
| `golem` | `CrossSimIntArray` | SubComponent | Compute array that models integer analog MVM with CrossSim. Built only when NumPy is found |

The excerpt below shows the Golem part of a Vanadis core configuration. See `golem/tests/basic_golem.py` for the full system, and `golem/tests/small` for the test applications.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/golem/tests/basic_golem.py --->
```python title="Attaching a Golem accelerator to a Vanadis core (excerpt from golem/tests/basic_golem.py)"
import sst

cpu = sst.Component("cpu0", "vanadis.core")
# ... decoder, load-store queue, and memory interfaces as for any Vanadis core

# RoCC accelerator in the core's "rocc" slot
rocc = cpu.setSubComponent("rocc", "golem.RoCCAnalogFloat", 0)
rocc.addParams({
    "clock" : "2.3GHz",
    "max_instructions" : 8,
    "inputOperandSize" : 4,
    "outputOperandSize" : 4,
})

# Compute array in the accelerator's "array" slot
array = rocc.setSubComponent("array", "golem.MVMFloatArray")
array.addParams({
    "clock" : "2.3GHz",
    "arrayLatency" : "100ns",
    "numArrays" : 1,
    "arrayInputSize" : 6,
    "arrayOutputSize" : 6,
    "inputOperandSize" : 4,
    "outputOperandSize" : 4,
})

# The accelerator accesses memory through its own interface (connect it to the L1 data cache)
rocc_mem_if = rocc.setSubComponent("memory_interface", "memHierarchy.standardInterface")
```
