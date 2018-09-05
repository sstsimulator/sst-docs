---
id: sst-register
title: sst-register
---

## Remarks

sst-register is used to register an element library

## Syntax
```bash
sst-register <Dependency Name> (<VAR>=<VALUE>)*

<Dependency Name>   : Name of the Third Party Dependency
<VAR>=<VALUE>       : Configuration variable and associated value to add to registry.
                      If <VAR>=<VALUE> pairs are not provided, the tool will attempt
                      to auto-register $PWD/include and $PWD/lib to the name

                      Example: sst-register DRAMSim CPPFLAGS="-I$PWD/include"
```

## Examples

### Example 1
```bash
sst-register exC_carWash exC_carWash_LIBDIR=$(CURDIR)
```
