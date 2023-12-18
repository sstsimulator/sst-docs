---
id: basics_makefile
title: "Basics: Makefile"
---

:::warning
This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.
:::

## Remarks

This is intended only to give a general idea of what is required in a makefile for an SST Element. This is not meant to be an introduction to makefiles in general.

## Syntax

### Overview
Content you need to replace appears in double brackets - for example: [[some label]].

```makefile
CXX=$(shell sst-config --CXX)
CXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)
LDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)

all: [[library name]].so install

[[library name]].so: [[space separated list of C++ files]]
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^

install:
	sst-register [[element name]] [[element name]]_LIBDIR=$(CURDIR)

clean:
	rm -f *.o tests/*.dot tests/*.jpg [[library name]].so

```

### Breakdown

The top line gets the compiler and flags that are used to compile SST and its elements
```makefile
CXX=$(shell sst-config --CXX)
CXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)
LDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)
```

Compile and register the element with SST.
```makefile
all: [[library name]].so install

[[library name]].so: [[space separated list of C++ files]]
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^

install:
	sst-register [[element name]] [[element name]]_LIBDIR=$(CURDIR)
```

The last couple of lines are tasks to do before doing a clean compile.
```makefile
clean:
	rm -f *.o tests/*.dot tests/*.jpg [[library name]].so
```

## Examples

### Example 1
```makefile
CXX=$(shell sst-config --CXX)
CXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)
LDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)

all: libexC_carWash.so install

libexC_carWash.so: carWash.cc carGenerator.cc bay.cc
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^

install:
	sst-register exC_carWash exC_carWash_LIBDIR=$(CURDIR)

clean:
	rm -f *.o tests/*.dot tests/*.jpg libexC_carWash.so
```

## See Also

- [sst-config](tools/commandLine/sst-config.md)
- [sst-register](tools/commandLine/sst-register.md)