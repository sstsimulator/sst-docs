---
id: sst-config
title: sst-config
---

:::caution
This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.
:::

## Remarks

The command line utility, sst-config, retrieves information on how the SST Core was compiled. 

Most often it is used when compiling elements. It is called in the makefile to get the correct compiler and flags to use.

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

### In a makefile
```makefile
CXX=$(shell sst-config --CXX)
CXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)
LDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)
```

## See Also

- [Basics: Makefile](guides/files/basics_makefile.md)