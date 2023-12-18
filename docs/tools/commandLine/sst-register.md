---
title: sst-register
---

:::warning
This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.
:::

```bash
sst-register <Dependency Name> (<VAR>=<VALUE>)*

<Dependency Name>   : Name of the Third Party Dependency
<VAR>=<VALUE>       : Configuration variable and associated value to add to registry.
                      If <VAR>=<VALUE> pairs are not provided, the tool will attempt
                      to auto-register $PWD/include and $PWD/lib to the name

                      Example: sst-register DRAMSim CPPFLAGS="-I$PWD/include"
```

The command line utility, `sst-register`, is used to register an Element Library with the SST Core.


## Example

```bash
sst-register exC_carWash exC_carWash_LIBDIR=$(CURDIR)
```
## See Also

- [Basics: Makefile](guides/files/basics_makefile.md)