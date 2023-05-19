"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2958],{92596:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2018/08/13/new-tutorial","metadata":{"permalink":"/sst-docs/blog/2018/08/13/new-tutorial","source":"@site/blog/2018-08-13-new-tutorial.md","title":"SST Tutorial (July 2018) Available","description":"The SST Tutorial from July 2018 is now available and can be downloaded here","date":"2018-08-13T00:00:00.000Z","formattedDate":"August 13, 2018","tags":[],"readingTime":0.07,"hasTruncateMarker":false,"authors":[{"name":"SST Development Team"}],"frontMatter":{"title":"SST Tutorial (July 2018) Available","author":"SST Development Team","authorFBID":""},"nextItem":{"title":"SST v8.0.0 Released","permalink":"/sst-docs/blog/2018/05/31/v8.0.0-released"}},"content":"The SST Tutorial from July 2018 is now available and can be downloaded [here](http://sst-simulator.org/SSTPages/SSTTopDocTutorial/)"},{"id":"/2018/05/31/v8.0.0-released","metadata":{"permalink":"/sst-docs/blog/2018/05/31/v8.0.0-released","source":"@site/blog/2018-05-31-v8.0.0-released.md","title":"SST v8.0.0 Released","description":"SST v8.0.0 is now available and can be downloaded here","date":"2018-05-31T00:00:00.000Z","formattedDate":"May 31, 2018","tags":[],"readingTime":1.32,"hasTruncateMarker":true,"authors":[{"name":"SST Development Team"}],"frontMatter":{"title":"SST v8.0.0 Released","author":"SST Development Team","authorFBID":""},"prevItem":{"title":"SST Tutorial (July 2018) Available","permalink":"/sst-docs/blog/2018/08/13/new-tutorial"},"nextItem":{"title":"SST v7.2.0 Released","permalink":"/sst-docs/blog/2017/12/11/v7.2.0-released"}},"content":"SST v8.0.0 is now available and can be downloaded [here](http://sst-simulator.org/SSTPages/SSTMainDownloads)\\n\\n\x3c!--truncate--\x3e\\n\\nThe SST 8.0.0 release follows the standard release process of having our point releases provide improved performance and stability. In this release, we have focused on many under the hood fixes to address bugs as well as improving predictive accuracy and simulation speed.\\n\\nA selection of the improvement highlights are:\\n\\n**SST-Core:**\\n\\n* Added ability to use custom time vortex modules for optimizing event delivery and simulation performance\\n* Added max/min fields for statistics in the core\\n* Fixed a bug handling self-partitioning\\n* Issue warnings for zero latency links\\n\\n**SST-Elements:**\\n\\n* Added the Kingsley network-on-chip mesh model\\n* Added support for Ramulator\\n* Ariel can now forward application data into simulated memory subsystems\\n* Added HyperX topology to Merlin\\n* Fixes several bugs in Ariel memory allocation and page mapping\\n* Added Stake simulation core to Miranda for RISC-V simulation\\n* Added OpenSHMEM model support in Ember motifs\\n* Added new communication pattern motifs for Ember\\n* Several fixes for MPI operations and timing in Ember/FireFly\\n* Improved performance for large-scale network simulations\\n* Fixed an alignment issue with Juno memory operations\\n* Fixes to Samba TLB model for scalable simulation\\n\\n**SST-Macro:**\\n\\n* Bug fixes and performance improvements\\n* Improved auto-skeletonization support\\n* Additional topologies and routing algorithms, including Dragonfly+ and progressive adaptive routing\\n* Integration of fcontext, no more Boost dependencies\\n* Defined hierarchy of congestion models for trading off accuracy/speed of simulation\\n\\n---\\n\\nCurrent release information can be found [here](http://sst-simulator.org/SSTPages/SSTmicroReleaseV8dot0dot0/)\\n\\nWe look forward to hearing your successes with the latest release!"},{"id":"/2017/12/11/v7.2.0-released","metadata":{"permalink":"/sst-docs/blog/2017/12/11/v7.2.0-released","source":"@site/blog/2017-12-11-v7.2.0-released.md","title":"SST v7.2.0 Released","description":"SST v7.2.0 is now available and can be downloaded here","date":"2017-12-11T00:00:00.000Z","formattedDate":"December 11, 2017","tags":[],"readingTime":1.755,"hasTruncateMarker":true,"authors":[{"name":"SST Development Team"}],"frontMatter":{"title":"SST v7.2.0 Released","author":"SST Development Team","authorFBID":""},"prevItem":{"title":"SST v8.0.0 Released","permalink":"/sst-docs/blog/2018/05/31/v8.0.0-released"},"nextItem":{"title":"SST v7.1.0 Released","permalink":"/sst-docs/blog/2017/06/08/v7.1.0-released"}},"content":"SST v7.2.0 is now available and can be downloaded [here](http://sst-simulator.org/SSTPages/SSTMainDownloads)\\n\\n\x3c!--truncate--\x3e\\n\\nThe SST v7.2.0 release follows the standard release process of having our point releases provide improved performance and stability. In this release, we have focused on many under the hood fixes to address bugs as well as improving predictive accuracy and simulation speed.\\n\\nA selection of the improvement highlights are:\\n\\n**SST-Core:**\\n\\n* SST will now dump output (e.g. statistics and debugging) into a specific directory which can be set * from the command line\\n* Fixed an issue with Python flags when using sst-config\\n* Fixed threading hangings on POWER8LE systems\\n* Fixed an issue with memory pool corruption on POWER8LE\\n* Fixed an issue with hanging on POWER7BE systems\\n* Fixed an issue relating to corruption of statistics in heavily threaded runs\\n* Fixed self-partitioner not found issue\\n* SST Info now correctly reports partitioner information\\n* Can now enable all statistics output for SubComponents\\n* Support for output of statistics in JSON format\\n* SST Config will now report being built with MPI\\n\\n**SST-Elements:**\\n\\n* Ariel - added a cycle counter to statistics output\\n* Ember - fixed an issue where reductions may be corrupted when using sub-communicators\\n* FireFly - fixed an issue where recv entries could fail\\n* MemHierarchy - fixed an issue with memory flushing on POWER7BE\\n* MemHierarchy - fixed namespace conflict issues with DRAMSim2 and HBMDramSim2\\n* MemHierarchy - added support for HBMDramSim2 as a third party library\\n* Miranda - fixes multiple-issue per cycle bug\\n* Miranda - fixed issue with address rollover in some loads\\n* VaultSim - enable runs without backing to reduce memory consumption\\n\\n**SST-Macro:**\\n\\n* Improved auto-skeletonization support\\n* Improved OTF2 support\\n* Support for Boost fcontext to reduce context switching overheads\\n* New parallel algorithms optimized for LogP model\\n* Various performance improvements, including avoiding shared_ptr atomic reference count overheads\\n* Various bug fixes, including for call graph and FTQ statistics\\n* Parameter proofreading to reduce input errors\\n\\n---\\n\\nCurrent release information can be found [here](http://sst-simulator.org/SSTPages/SSTmicroReleaseV7dot1dot0/)\\n\\nWe look forward to hearing your successes with the latest release!"},{"id":"/2017/06/08/v7.1.0-released","metadata":{"permalink":"/sst-docs/blog/2017/06/08/v7.1.0-released","source":"@site/blog/2017-06-08-v7.1.0-released.md","title":"SST v7.1.0 Released","description":"SST v7.1.0 is now available and can be downloaded here","date":"2017-06-08T00:00:00.000Z","formattedDate":"June 8, 2017","tags":[],"readingTime":1.055,"hasTruncateMarker":true,"authors":[{"name":"SST Development Team"}],"frontMatter":{"title":"SST v7.1.0 Released","author":"SST Development Team","authorFBID":""},"prevItem":{"title":"SST v7.2.0 Released","permalink":"/sst-docs/blog/2017/12/11/v7.2.0-released"},"nextItem":{"title":"SST v7.0.0 Released","permalink":"/sst-docs/blog/2017/05/10/v7.0.0-released"}},"content":"SST v7.1.0 is now available and can be downloaded [here](http://sst-simulator.org/SSTPages/SSTMainDownloads)\\n\\n\x3c!--truncate--\x3e\\n\\nThe SST v7.1.0 release follows the standard release process of having our point releases provide improved performance and stability. In this release, we have focused on many under the hood fixes to address bugs as well as improving predictive accuracy and simulation speed.\\n\\nA selection of the improvement highlights are:\\n\\n**SST-Core:**\\n\\n* Updates to SST Element component information definitions including version information and additional documentation. These changes lay the foundation for more better component support into SST 8.0 and beyond\\n* Changes to support compile and link flags for external elements on Linux and Mac OS-X\\n* Updates to autoconf to support modern use of tar utility\\n\\n**SST-Elements:**\\n\\n* Fix for crashes that can occasionally occur in Ariel/memHierarchy\\n* Updates to autoconf to support modern use of tar utility\\n\\n**SST-Macro:**\\n\\n* DUMPI configuration fixes, particularly for deprecated MPI-2 functions in MPI-3\\n* Added compiler support for static function and C++ static member variables in skeleton apps\\n* Linker fixes for generating skeleton app element libraries. Updates to new ELI interface.\\n* Improved parallel partitioning on top of sst-core\\n* Documentation updates\\n\\n---\\n\\nCurrent release information can be found [here](http://sst-simulator.org/SSTPages/SSTmicroReleaseV7dot1dot0/)\\n\\nWe look forward to hearing your successes with the latest release!"},{"id":"/2017/05/10/v7.0.0-released","metadata":{"permalink":"/sst-docs/blog/2017/05/10/v7.0.0-released","source":"@site/blog/2017-05-10-v7.0.0-released.md","title":"SST v7.0.0 Released","description":"SST v7.1.0 is now available and can be downloaded here","date":"2017-05-10T00:00:00.000Z","formattedDate":"May 10, 2017","tags":[],"readingTime":1.425,"hasTruncateMarker":true,"authors":[{"name":"SST Development Team"}],"frontMatter":{"title":"SST v7.0.0 Released","author":"SST Development Team","authorFBID":""},"prevItem":{"title":"SST v7.1.0 Released","permalink":"/sst-docs/blog/2017/06/08/v7.1.0-released"}},"content":"SST v7.1.0 is now available and can be downloaded [here](http://sst-simulator.org/SSTPages/SSTMainDownloads)\\n\\n\x3c!--truncate--\x3e\\n\\nThe SST v7.0.0 release follows the standard release process of having our point releases provide improved performance and stability. In this release, we have focused on many under the hood fixes to address bugs as well as improving predictive accuracy and simulation speed.\\n\\nA selection of the improvement highlights are:\\n\\n**SST-Core:**\\n\\n* Overhaul of the SST element information description system to more easily enable externally development elements to interact with the SST framework\\n* Removal of Boost as a dependency from the SST core\\n* New SubComponent handling to make configuration/model construction easier\\n* Improved thread scaling\\n* Several bug fixes for output information related to component connectivity graphs\\n* Implementation of a \u201cstop at\u201d wall time feature for working within scheduled cluster environments\\n* HDF5 support for statistics output\\n* Support for describing co-ordinates of components in Python configuration (to assist in visualizations of simulations)\\n\\n**SST-Elements:**\\n\\n* Initial SST models for Non-Volatile Memory (Messier)\\n* Models for TLB handling (Samba)\\n* Improvements to CramSim (developed by IBM) to enable threaded simulations\\n* Support for Boost as an external dependency\\n* SimpleSimulation demonstration element added as an example component\\n* Support for memory modeling in large-scale network analysis\\n\\n**SST-Macro:**\\n\\n* Accuracy improvements in network models\\n* Improved documentation and updated example configuration files\\n* Integrated job launcher components for simulating PBS or SLURM-like batch systems\\n* Merlin integration. Trace replay and skeleton apps now compatible with Merlin router models.\\n* Beta release of OTF2 trace replay skeleton\\n* Beta release of Clang-based auto-skeletonization source-to-source tools\\n\\n---\\n\\nCurrent release information can be found [here](http://sst-simulator.org/SSTPages/SSTmicroReleaseV7dot0dot0/)\\n\\nWe look forward to hearing your successes with the latest release!"}]}')}}]);