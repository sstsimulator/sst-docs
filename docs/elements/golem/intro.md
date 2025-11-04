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
**Last Released:** 15.1

:::

### Required dependencies
*None*

### Optional dependencies
* [CrossSim](https://github.com/sandialabs/cross-sim)

