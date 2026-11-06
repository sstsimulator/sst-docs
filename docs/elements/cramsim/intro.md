---
title: cramSim
---

The *cramSim* element implements a memory controller and memory models for DDR and HBM. The controller can either accept a trace file or can be connected to memHierarchy components to use within a larger simulation. More detailed information resides in a README in the cramSim source repository.

:::info

This element has been renamed from 'CramSim' to 'cramSim' in an effort to standardize library naming conventions in SST Elements (lowercase or camelcase). Input files from pre-SST 13.1 need to be updated accordingly.

:::

:::note At a Glance

**Source Code:** [sst-elements/.../cramSim](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/cramSim) &nbsp;  
**SST Name:** `cramSim` &nbsp;  
**Maturity Level:** Prototype (2) &nbsp;  
**Development Path:** Maintenance &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info cramSim` or `sst-info cramSim.<element>` to see each element's parameters, ports, and statistics. Most parameters (DRAM timings, organization, scheduling policies) are normally read from one of the configuration files shipped in the `cramSim` directory, such as `ddr4_verimem.cfg`, `ddr4_3200.cfg`, or `hbm_pseudo_4h.cfg`. The same parameters are passed to every cramSim element.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `cramSim` | `c_Controller` | Component | Memory controller; its subcomponent slots hold the scheduling, conversion, and device-driver stages below |
| `cramSim` | `c_Dimm` | Component | DRAM device model (ranks, bank groups, banks) that executes the controller's commands |
| `cramSim` | `c_MemhBridge` | Component | Bridge that connects a memHierarchy memory controller (through the `memHierarchy.cramsim` backend) to a cramSim controller |
| `cramSim` | `c_TxnGen` | Component | Test transaction generator that issues random or sequential reads and writes |
| `cramSim` | `c_TraceFileReader` | Component | Test transaction generator that replays a trace file (default or USIMM format) |
| `cramSim` | `c_TxnDispatcher` | Component | Distributes transactions from one generator across multiple lanes (controllers), using address bits |
| `cramSim` | `c_AddressHasher` | SubComponent | Maps addresses to channel, rank, bank group, bank, row, and column; set in the controller's `AddrMapper` slot |
| `cramSim` | `c_TxnScheduler` | SubComponent | Orders queued transactions (e.g., FCFS, read-first); set in the controller's `TxnScheduler` slot |
| `cramSim` | `c_TxnConverter` | SubComponent | Turns transactions into DRAM commands (activate, read, write, precharge) under an open- or closed-page policy; set in the `TxnConverter` slot |
| `cramSim` | `c_CmdScheduler` | SubComponent | Orders DRAM commands before they are issued; set in the controller's `CmdScheduler` slot |
| `cramSim` | `c_DeviceDriver` | SubComponent | Tracks DRAM bank state and enforces timing constraints before commands go to the DIMM; set in the `DeviceDriver` slot |

<!--- SOURCE_CODE: sst-elements/src/sst/elements/cramSim/tests/test_txngen.py --->
```python title="A cramSim controller and DIMM driven by a test generator (based on cramSim/tests/test_txngen.py)"
import sst

# Read cramSim parameters from a configuration file ("key value" per line),
# e.g. sst-elements/src/sst/elements/cramSim/ddr4_verimem.cfg
params = {}
with open("ddr4_verimem.cfg") as cfg:
    for line in cfg:
        tokens = line.split()
        if len(tokens) >= 2:
            params[tokens[0]] = tokens[1]

sst.setProgramOption("timebase", params["clockCycle"])
sst.setProgramOption("stop-at", params["stopAtCycle"])

# Transaction generator
txngen = sst.Component("TxnGen", "cramSim.c_TxnGen")
txngen.addParams(params)
txngen.addParams({
    "maxTxns" : 100000,
    "numTxnPerCycle" : 1,
    "maxOutstandingReqs" : 64,
    "readWriteRatio" : 0.5,
    "mode" : "seq",
})

# Controller and its pipeline stages
controller = sst.Component("MemController0", "cramSim.c_Controller")
controller.addParams(params)
for slot, element in [("TxnScheduler", "cramSim.c_TxnScheduler"),
                      ("TxnConverter", "cramSim.c_TxnConverter"),
                      ("AddrMapper",   "cramSim.c_AddressHasher"),
                      ("CmdScheduler", "cramSim.c_CmdScheduler"),
                      ("DeviceDriver", "cramSim.c_DeviceDriver")]:
    controller.setSubComponent(slot, element).addParams(params)

# DRAM device
dimm = sst.Component("Dimm0", "cramSim.c_Dimm")
dimm.addParams(params)

# Links
sst.Link("txngen_ctrl").connect((txngen, "memLink", params["clockCycle"]),
                                (controller, "txngenLink", params["clockCycle"]))
sst.Link("ctrl_dimm").connect((controller, "memLink", params["clockCycle"]),
                              (dimm, "ctrlLink", params["clockCycle"]))

# Print statistics at the end of the run
sst.setStatisticLoadLevel(1)
txngen.enableAllStatistics()
```

## Additional Documentation
The cramSim library includes a [README](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/cramSim/README) with additional documentation. 

