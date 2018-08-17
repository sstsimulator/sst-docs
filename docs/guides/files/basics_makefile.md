---
id: basics_makefile
title: Basics: Makefile
---

## Remarks

This is intended to only give a general idea of what is required in a makefile for an SST Element. This is not meant to be an introduction to makefiles in general.

## Syntax

### Overview
Places where you will need to replace are in double brackets, example: [[some label]].

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

The top line get the compiler and flags that are used to compile SST and it's elements
```makefile
CXX=$(shell sst-config --CXX)
CXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)
LDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)
```

Compile and register the element with SST
```makefile
all: [[library name]].so install

[[library name]].so: [[space separated list of C++ files]]
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^

install:
	sst-register [[element name]] [[element name]]_LIBDIR=$(CURDIR)
```

What to delete before doing a clean compile.
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
