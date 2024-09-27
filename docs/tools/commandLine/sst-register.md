---
title: sst-register
---

Use the `sst-register` utility to register element libraries, source code directories, and test directories with SST-Core. These are used by SST to locate libraries and tests.


```bash
sst-register <Dependency Name> (<VAR>=<VALUE>)*
```
* **Dependency Name** Name of dependency to add. For example, the element library name.
* **VAR=VALUE** Variable/value pair to register to the dependency. 

The most common reason to use `sst-register` is to register a new element library and/or test directory with SST. Naming conventions are critical so that SST can locate the library.

## Register element libraries
Register an element library with SST-Core by providing the path to the library as follows. 
`libname` is the name of the library (i.e., `lib<libname>.so`).

```bash
$ sst-register <libname> <libname>_LIBDIR=/path/to/library
```

For example, for an element library named `libsimpleExternalElement.so`, the library would be registered:
```bash
$ sst-register simpleExternalElement simpleExternalElement_LIBDIR=$(CURDIR)
```

## Registering test directories
Register the location of SST test suites with SST-Core as follows. Again, `libname` should be replaced with the name of the library, as in `lib<libname>.so`. The `Dependency Name` argument *must* be `SST_ELEMENT_TESTS`.
```bash
$ sst-register SST_ELEMENT_TESTS <libname>=/path/to/tests/for/library
```

For example:
```bash
$ sst-register SST_ELEMENT_TESTS simpleExternalElement=$(SRCDIR)/tests
```

## Registering source directories
Register the location of SST element source code as follows. These paths are not currently used by SST tools but they are registered by convention in anticipation of using the paths in the future. Tool developers may use this information if needed.
```bash
$ sst-register SST_ELEMENT_SOURCE <libname>=/path/to/tests/for/library
```

## Example: Registering libExample.so
In this example we will register a new library along with its tests and source code. Registration is case-sensitive so that `libexample.so` would use the libname "example" while `libExample.so` uses the libname "Example".

Assume:
* Library is named `libExample.so` and is located at `/home/usr1/install/libExample.so`.
* The source code for the library is at `/home/usr1/source/example/src`.
* The tests for the library are at `/home/usr1/source/example/tests/`.

```sh title="Steps to register libExample.so"
$ sst-register Example Example_LIBDR=/home/usr1/install/libExample.so
$ sst-register SST_ELEMENT_TESTS=/home/usr1/source/example/tests
$ sst-register SST_ELEMENT_SOURCE=/home/usr1/source/example/src
```

## Other uses of sst-register
### Uninstall element libraries.
`sst-register -u <libname>` can be used to uninstall an element library as follows. This does *not* remove the paths from from `SST_ELEMENT_TESTS` or `SST_ELEMENT_SOURCE`. `sst-register -m` will alternately enter an interactive unregister mode where the installed libraries will be listed followed by a prompt to provide the libraries to delete. Finally, providing the `-au` option causes any invalid libraries to be removed. Invalid libraries are those that have invalid paths.

```sh title="Uninstall an element library"
$ sst-register -u <libname> # Unregister libname
$ sst-register -m           # Interactive unregister
$ sst-register -au          # Unregister invalid libraries
```


### List installed libraries
This will list the element libraries installed as well as `SST_ELEMENT_SOURCE` and `SST_ELEMENT_TESTS` if any element libraries have registered source or test directories. If any path registered to a library does not exist, the library will be reported as "INVALID". 
```sh title="List libraries"
$ sst-register -l

A model labeled INVALID means it is registered in
SST, but no longer exists in the specified path.

List of registered models:
1. SST_ELEMENT_LIBRARY      VALID
2. SST_ELEMENT_SOURCE       VALID
3. SST_ELEMENT_TESTS        VALID
4. rtlcomponent             VALID
```

## Advanced: The sstsimulator.conf file

:::danger
Directly modifying `sstsimulator.conf` can corrupt SST's search paths and cause failures. Further, the file is overwritten when SST is reinstalled. Use `sst-register` instead.
:::

`sst-register` manipulates a file called `sstsimulator.conf`. The file is automatically generated during SST's installation.
This file is used by SST itself, as well as SST testing and command-line tools like `sst-info` and `sst-config`.

The file looks like this; we have removed some VAR=VALUE pairs for brevity (represented by "..."). Each section corresponds to the "Dependency Name" given to `sst-register` and any VAR=VALUE pairs provided to `sst-register` are appended to the section.

```sh
[SSTCore]
MPICXX=mpic++
MPICC=mpicc
...
prefix=/home/usr1/install/sst-core/
prefix_exec=/home/usr1/install/sst-core/
bindir=/home/usr1/install/sst-core/bin
...

[SST_ELEMENT_LIBRARY]
SST_ELEMENT_LIBRARY_BINDIR=/home/usr1/install/sst-elements/bin
SST_ELEMENT_LIBRARY_BUILDDIR=/home/usr1/sst-elements
SST_ELEMENT_LIBRARY_HOME=/home/usr1/install/sst-elements
SST_ELEMENT_LIBRARY_LIBDIR=/home/usr1/install/sst-elements/lib/sst-elements-library
SST_ELEMENT_LIBRARY_SOURCE_ROOT=/home/usr1/sst-elements

[SST_ELEMENT_TESTS]
Messier=/home/usr1/sst-elements/src/sst/elements/messier/tests
Opal=/home/usr1/sst-elements/src/sst/elements/opal/tests
Samba=/home/usr1/sst-elements/src/sst/elements/samba/tests
ariel=/home/usr1/sst-elements/src/sst/elements/ariel/tests
...
simpleExternalElement=/home/usr1/sst-external-element/src/../tests

[SST_ELEMENT_SOURCE]
Messier=/home/usr1/sst-elements/src/sst/elements/messier
Opal=/home/usr1/sst-elements/src/sst/elements/opal
Samba=/home/usr1/sst-elements/src/sst/elements/samba
ariel=/home/usr1/sst-elements/src/sst/elements/ariel
...
simpleExternalElement=/home/usr1/sst-external-element/src/../tests

[simpleExternalElement]
simpleExternalElement_LIBDIR=/home/usr1/sst-external-element/src
```

**Naming conventions are critical in this file.** The `sst-register` tool is registering the VAR=VALUE pair(s) to the section named "Dependency name" and will create a new section if needed. The following sections are typically found in the file.

### SSTCore
This contains the install and source locations for SST-Core, as well as build and compilation information. The `sst-config` tool looks in this section to provide build information. 

### SST_ELEMENT_LIBRARY
This section contains paths for the libraries included in the SST-Elements repository. In particular, the library search path is `SST_ELEMENT_LIBRARY_LIBDIR`. The SST-Elements install populates this section.

### SST_ELEMENT_TESTS
The SST test utility `sst-test-elements` uses the VAR=VALUE pairs in this section to locate test suites to run.

### SST_ELEMENT_SOURCE
This section contains the path to the root directory of each registered element library's source code.

### Other libraries
Other sections are named for libraries. SST searches these sections for a `libname_LIBDIR` path when locating libraries. 
Following the example above, registering the `libExample.so` library makes the following modifications to `sstsimulator.conf`.

```sh title="Registering libExample.so"
$ sst-register Example Example_LIBDR=/home/usr1/install/libExample.so
$ sst-register SST_ELEMENT_TESTS=/home/usr1/source/example/tests
$ sst-register SST_ELEMENT_SOURCE=/home/usr1/source/example/src
```

```sh title="sstsimulator.conf modifications after libExample.so is registered"
[Example]
Example_LIBDIR=/home/usr1/install/libExample.so

[SST_ELEMENT_TESTS]
Example=/home/usr1/source/example/tests

[SST_ELEMENT_SOURCE]
Example=/home/usr1/source/example/src
```
