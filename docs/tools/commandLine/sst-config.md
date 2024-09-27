---
title: sst-config
---

`sst-config` is a command line utility that queries SST's configuration to retrieve information about how SST was compiled and libraries that have been registered with it. A common use of this command is to pull compiler flags for element library compilation. Passing the `--help` flag to `sst-config` will print a brief usage description.

```bash
$ sst-config
$ sst-config --<KEY>  # Valid for keys belonging to the SSTCore group only
$ sst-config <GROUP> <KEY>
```
* **`GROUP`** (Optional) Which group to search. Must be used with the `KEY` argument.
* **`KEY`** (Optional) Which key value to return. If `GROUP` is not specified, the `SSTCore` group will be searched.

## Examples

### Print the entire configuration
```bash
$ sst-config
# Group: DRAMSIM ----------------------------------------------------------------
LIBDIR=
# Group: DRAMSIM3 ---------------------------------------------------------------
LIBDIR=
# Group: FDSIM ------------------------------------------------------------------
LIBDIR=
# Group: GOBLIN_HMCSIM ----------------------------------------------------------
LIBDIR=/home/sst/ext/gc64-hmcsim-sst-8.0.0-release
# Group: HBMDRAMSIM -------------------------------------------------------------
LIBDIR=
# Group: HYBRIDSIM --------------------------------------------------------------
LIBDIR=
# Group: NVDIMMSIM --------------------------------------------------------------
LIBDIR=
# Group: RAMULATOR --------------------------------------------------------------
LIBDIR=
# Group: SSTCore ----------------------------------------------------------------
AR=ar
CC=gcc
CFLAGS=
CORE_TEST_ELEMENT_LIBDIR=/home/sst/build/sst-core/lib/sstcore
CPP=gcc -E
CXX=g++
CXXCPP=g++ -E
CXXFLAGS= -std=c++17
ELEMENT_CXXFLAGS= -std=c++17 -fPIC -DHAVE_CONFIG_H -I/home/sst/build/sst-core/include
ELEMENT_LDFLAGS=-shared -fno-common -Wl,-undefined -Wl,dynamic_lookup
LD=/Library/Developer/CommandLineTools/usr/bin/ld
...
...
```

```bash

```

### Locate the compiler used to compile SST
```bash
$ sst-config --CXX
g++
```

### Determine the path to the sst-elements libraries
```bash
$ sst-config SST_ELEMENT_LIBRARY SST_ELEMENT_LIBRARY_BINDIR
/home/sst/build/sst-elements/bin
```

## Understanding the SST configuration file
When SST-Core is compiled, it generates a configuration file. This file can be found in `$SSTCORE_BUILD_DIR/etc/sst/sstsimulator.conf`. As elements are registered with SST using `sst-register`, information about those elements is added to this same file. The file is separated into sections called *groups*. Each group has a name which is enclosed in square brackets. Any lines following a group name belong to the most recently declared group. Common groups that can be found in the file include:
* **SSTCore** Information about the core compilation including compiler and linker flags, compiler version, Python version and flags, etc.
* **SST_ELEMENT_SOURCE** When element libraries register their source code location with SST, the paths are captured in this group. 
* **SST_ELEMENT_TESTS** This group records the location of test suites that have been registered with SST and is used by the SST test infrastructure to locate available tests.
* **SST_ELEMENT_LIBRARY** If you have built and installed elements from the sst-elements repository, you will see this group. It contains the library install path. Other elements should be registered to their own groups, for example the sst-external-element repository registers its `simpleExternalElement` library under a group of the same name: `simpleExternalElement`.


## What is available through `sst-config`

One of the important usages of `sst-config` is to acquire information about how sst was compiled for subsequent element compilations. Some of the critical keys


```bash
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