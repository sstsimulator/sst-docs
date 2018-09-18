---
id: sst-register
title: sst-register
---

## Remarks

The command line utility, sst-register, is used to register an element library. Most often it is called within the makefile as the part of the build process.

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
## See Also

- [Basics: Makefile](guides/files/basics_makefile.md)