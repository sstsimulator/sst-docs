---
title: Getting Started
---

Scroll down to find resources for getting started with SST and navigating documentation.

## Available simulation libraries
The SST team releases a set of simulation libraries with models for processors, networks, memory and cache, application proxies, and more called SST Elements. Many community developers also release open source models and tools.
* [SST Elements documentation](../elements/intro.mdx)
* [Community libraries and tools](../community/index.md)


## Tutorials
This is a list of the tutorials available in these pages. 
* [Running SST](./runningSST.md)
* [Writing a configuration (input) file](./configuration/configTutorial.mdx)
* [Creating a new element library and component](./dev/devtutorial.md)

We also publish materials from in-person tutorials in SST's [tutorial repository](https://github.com/sstsimulator/sst-tutorials). Materials reflect SST's capabilities and APIs at the time they were published but general concepts covered in older materials are typically still accurate. Code may or may not work with more recent SST releases however.


## Getting SST
Download the latest [release](https://sst-simulator.org/SSTPages/SSTMainDownloads/) or clone the [github repositories](https://github.com/sstsimulator). You will need *sst-core* (the simulation framework) and simulation libraries, typically *sst-elements*. When cloning repositories, use the `master` branch for greatest stability or the `devel` branch to get the very latest features. The `master` branch usually lags `devel` by a few days.


## Dependencies
SST has two major dependencies: Python and OpenMPI. OpenMPI is optional but highly recommended. SST is tested with gcc and llvm (Linux) and clang (macOS). If you are installing from the github repositories, you will also need autotools installed. Consult the [compatibility page](https://sst-simulator.org/SSTPages/SSTElementReleaseMatrix/) for specific version information and see [SST build prerequisites](https://sst-simulator.org/SSTPages/SSTUserSSTBuildPrerequisites) for the latest instructions on acquiring dependencies.


## Building SST
* [Detailed build instructions including required dependencies](https://sst-simulator.org/SSTPages/SSTBuildAndInstall_15dot0dot0_SeriesDetailedBuildInstructions/)
* [Instructions for older releases](https://sst-simulator.org/SSTPages/SSTBuildAndInstall_older_release_documentation/)
* [Supported platforms and tested versions of dependencies](https://sst-simulator.org/SSTPages/SSTElementReleaseMatrix/)

If you have dependencies installed already, select your SST source below for quick-start instructions. For sst-macro, [see the macro user manual.](https://github.com/sstsimulator/sst-macro/blob/v15.0.0_beta/docs/manual/manual.md)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="repo" label="GitHub" default>

  Replace `<CORE_INSTALL_PATH>` and `<ELEM_INSTALL_PATH>` with the directories where you want to install sst-core and sst-elements respectively. For example, `$HOME/mysst/build/sst-core` and `$HOME/mysst/build/sst-elements`.
```sh
$ git clone git@github.com:sstsimulator/sst-core
$ cd sst-core
$ ./autogen.sh
$ ./configure --prefix=<CORE_INSTALL_PATH>
$ make -j install

$ cd ..
$ git clone git@github.com:sstsimulator/sst-elements
$ cd sst-elements
$ ./autogen.sh
$ ./configure --prefix=<ELEM_INSTALL_PATH> --with-sst-core=<CORE_INSTALL_PATH>
$ make -j install
```
  </TabItem>
  <TabItem value="release" label="Release" default>
  
  Replace `<CORE_INSTALL_PATH>` and `<ELEM_INSTALL_PATH>` with the directories where you want to install sst-core and sst-elements respectively. For example, `$HOME/mysst/build/sst-core` and `$HOME/mysst/build/sst-elements`.
```sh
$ tar -xz sstcore.tar.gz
$ cd sst-core
$ ./configure --prefix=<CORE_INSTALL_PATH>
$ make -j install

$ cd ..
$ tar -xz sstelements.tar.gz
$ cd sst-elements
$ ./configure --prefix=<ELEM_INSTALL_PATH> --with-sst-core=<CORE_INSTALL_PATH>
$ make -j install
```
</TabItem>
</Tabs>

After installing, you can add `<CORE_INSTALL_PATH>/bin` to your `$PATH`.
```
$ export PATH=<CORE_INSTALL_PATH>/bin:$PATH
```


## Running a simulation
See ["How to Run SST"](./runningSST.md). Information for specific types of simulations can be found in the [element libraries documentation](../elements/intro.mdx). Learn how to create configuration (input) files for SST [here](./configuration/pythonConfigGuide.md).


## Creating new elements
Information on creating custom element libraries is located in the [developer guide pages](/docs/category/development). The tutorial on [creating a component](./dev/devtutorial.md) is a good starting point. If you wish to share your elements, we welcome additions to the [community page](../community/index.md).

Additionally, the following example elements can be references.
* [Code and configuration examples](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/simpleElementExample)
* [An element library example](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/simpleSimulation)
* [Example of an element library external to the SST-Elements repository](https://github.com/sstsimulator/sst-external-element)


## Understanding SST
For SST terms see the [Glossary](concepts/glossary.md). The [concepts pages](../category/concepts) also have information on different aspects of SST.


## Contributing to SST
To report bugs, use GitHub issues: [sst-core](https://github.com/sstsimulator/sst-core/issues), [sst-elements](https://github.com/sstsimulator/sst-elements/issues), [sst-macro](https://github.com/sstsimulator/sst-macro/issues). Contributions to SST repositories are done through pull requests. Review the [SST Contributing Guide](https://github.com/sstsimulator/sst-core/blob/master/CONTRIBUTING.md) and [Contributing to SST](./dev/contrib.md) before submitting a pull request. To submit documentation improvements to this site or report issues, use the [sst-docs repository](https://github.com/sstsimulator/sst-docs).


## Testing SST
SST's tests can be run locally by using the `sst-test-core` and `sst-test-elements` utilities. See [Running SST Tests](dev/testing.md) for details. To add new tests for existing or new elements, see [Creating Test Suites](dev/testframework.md) and the [Test Framework API](dev/testframeworkapi.md).


## License
SST is released under an open source license which can be found [here](https://github.com/sstsimulator/sst-core/blob/master/LICENSE.md).


## Subscribing to SST Announcements
To receive announcements regarding SST go to the [sst-announcements](https://github.com/sstsimulator/sst-announcements) repository and click the "Watch" button.


## Getting help
Use the GitHub Issues feature to ask questions or report an issue.
* [sst-core issues](https://github.com/sstsimulator/sst-core/issues)
* [sst-elements and general modeling issues](https://github.com/sstsimulator/sst-elements/issues)
* [sst-macro issues](https://github.com/sstsimulator/sst-macro/issues)

You can also contact [SST Support](mailto:wg-sst@sandia.gov?Subject=SST%20Support") for any other questions regarding SST.
