---
title: vaultsim
---

The *vaultsim* library provides components to model a stacked, "vaulted" memory architecture, similar to that of a hybrid memory cube (HMC). 

:::info

This element has been renamed from 'VaultSimC' to 'vaultsim' in an effort to standardize library naming conventions in SST Elements (lowercase or camelcase). Input files from pre-SST 13.1 need to be updated accordingly.

:::

:::note At a Glance

**Source Code:** [sst-elements/.../vaultsim](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/vaultsim) &nbsp;  
**SST Name:** `vaultsim` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info vaultsim` or `sst-info vaultsim.<element>` to see each element's parameters, ports, and statistics.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `vaultsim` | `logicLayer` | Component | Logic layer of one memory cube; routes requests to its vaults over `bus_<N>`, and cubes can be chained through `toCPU`/`toMem` |
| `vaultsim` | `vaultsim` | Component | One memory vault in a cube; connects to the logic layer through its `bus` port |
| `vaultsim` | `cpu` | Component | Simple multithreaded test processor that runs a synthetic application (`app` 0: miniMD-like, 1: phdMesh-like) |

To use vaultsim as the memory behind memHierarchy instead of `vaultsim.cpu`, set the memory controller's backend to `memHierarchy.vaultsim` and connect its `cube_link` port to the first logic layer.

<!--- SOURCE_CODE: sst-elements/src/sst/elements/vaultsim/tests/sdl1.py --->
```python title="A test CPU and a single 8-vault cube (based on vaultsim/tests/sdl1.py)"
import sst

sst.setProgramOption("stop-at", "50us")

num_vaults = 8

# Test CPU
cpu = sst.Component("cpu", "vaultsim.cpu")
cpu.addParams({
    "app" : 0,
    "seed" : 100,
    "threads" : 2,
    "bwlimit" : 4,
    "clock" : "1500Mhz",
})

# Logic layer of the (only, so terminal) cube
ll = sst.Component("ll0", "vaultsim.logicLayer")
ll.addParams({
    "bwlimit" : 32,
    "clock" : "500Mhz",
    "vaults" : num_vaults,
    "terminal" : 1,
    "llID" : 0,
    "LL_MASK" : 0,
})
sst.Link("cpu_ll").connect((cpu, "toMem", "5000ps"), (ll, "toCPU", "5000ps"))

# Vaults
for v in range(num_vaults):
    vault = sst.Component("vault%d" % v, "vaultsim.vaultsim")
    vault.addParams({
        "clock" : "750Mhz",
        "VaultID" : v,
        "numVaults2" : 3,  # log2(num_vaults)
    })
    sst.Link("ll_vault%d" % v).connect((ll, "bus_%d" % v, "1000ps"), (vault, "bus", "1000ps"))

# Print logic layer bandwidth statistics at the end of the run
sst.setStatisticLoadLevel(1)
ll.enableAllStatistics()
```
