---
id: sst-config
title: sst-config
---

## Remarks

sst-config holds information on how the SST Core was compiled and what compiler and flags elements should be compiled with. 

## Syntax
```bash
sst-config
sst-config --<KEY>
sst-config <GROUP> <KEY>

<GROUP>    Name of group to which the key belongs
           (e.g. DRAMSim group contains all DRAMSim
           KEY=VALUE settings).
<KEY>      Name of the setting key to find.
           If <GROUP> not specified this is found in
           the 'SSTCore' default group.

```

## Examples

### All config values
```bash
sst-config
```

### C++ compiler
```bash
sst-config --CXX
```

### C++ compiler flags
```bash
sst-config --ELEMENT_CXXFLAGS
```

### C++ LD flags
```bash
sst-config --ELEMENT_LDFLAGS
```