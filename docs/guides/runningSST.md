---
title: How to Run SST
---

## Running SST
Prior to running SST, ensure that SST Core is built and installed, as well as one or more Element libraries (e.g., sst-elements). Refer to the SST [Build and Install Instructions](http://sst-simulator.org/SSTPages/SSTMainDocumentation).

### Usage 
The SST command line has three parts: the SST binary, options for the binary, and a Python configuration file.

```sh
$ <SST binary> [SST options] <config file>
```

### SST Options 
Running SST with the "--help" flag prints a help message that includes all of the supported simulator options. Here's a snippet:

```text
Usage: sst [options] config-file
  Arguments to options contained in [] are optional
  Notes on flag options (options that take an optional BOOL value):
   - BOOL values can be expressed as true/false, yes/no, on/off or 1/0
   - Program default for flags is false
   - BOOL values default to true if flag is specified but no value is supplied

Options annotated with 'H' have extended help available
Options annotated with 'S' can be set in the SDL file (input configuration file)
  - Note: Options set on the command line take precedence over options set in the SDL file


Informational Options
-h --usage                            Print usage information.
   --help=option                      Print extended help information for requested option.
-V --version                          Print SST Release Version

Basic Options (most commonly used)
-v --verbose=[level]                S Verbosity level to determine what information about core runtime is printed.  
                                      If no argument is specified, it will simply increment the verbosity level.
-n --num-threads=NUM                S Number of parallel threads to use per rank
   --sdl-file=FILE                    Specify SST Configuration file.  Note: this is most often done by just specifying 
                                      the file without an option.
   --model-options=STR                Provide options to the python configuration script.  Additionally, any arguments 
                                      provided after a final '-- ' will be appended to the model options (or used as 
                                      the model options if --model-options was not specified).
   --print-timing-info=[BOOL]       S Print SST timing information
   --stop-at=TIME                   S Set time at which simulation will end execution
   --exit-after=TIME                S Set the maximum wall time after which simulation will end execution.  Time is
                                      specified in hours, minutes and seconds, with the following formats supported:
                                      H:M:S, M:S, S, Hh, Mm, Ss (capital letters are the appropriate numbers for that 
                                      value, lower case letters represent the units and are required for those formats).
   --partitioner=PARTITIONER        S Select the partitioner to be used. <lib.partitionerName>
   --heartbeat-period=PERIOD        S Set time for heartbeats to be published (these are approximate timings measured
                                      in simulation time, published by the core, to update on progress)
   --heartbeat-wall-period=PERIOD   S Set approximate frequency for heartbeats (SST-Core progress updates) to be 
                                      published in terms of wall (real) time. PERIOD can be specified in hours, 
                                      minutes, and seconds with the following formats supported: H:M:S, M:S, S, Hh, Mm, 
                                      Ss (capital letters are the appropriate numbers for that value, lower case 
                                      letters represent the units and are required for those formats.).
   --heartbeat-sim-period=PERIOD    S Set approximate frequency for heartbeats (SST-Core progress updates) to be 
                                      published in terms of simulated time. PERIOD must include time units (s or Hz) 
                                      and SI prefixes are accepted.
   --output-directory=DIR           S Directory into which all SST output files should reside
   --output-prefix-core=STR         S set the SST::Output prefix for the core

Configuration Output Options (generates a file that can be used as input for reproducing a run)
   --output-config=FILE             S File to write SST configuration (in Python format)
   --output-json=FILE               S File to write SST configuration graph (in JSON format)
   --parallel-output=[BOOL]         S Enable parallel output of configuration information.  This option is ignored for
                                      single rank jobs.  Must also specify an output type (--output-config and/or 
                                      --output-json).  Note: this will also cause partition info to be output if set
                                      to true.

Graph Output Options (for outputting graph information for visualization or inspection)
   --output-dot=FILE                S File to write SST configuration graph (in GraphViz format)
   --dot-verbosity=INT              S Amount of detail to include in the dot graph output
   --output-partition=[FILE]        S File to write SST component partitioning information.  When used without an
                                      argument and in conjuction with --output-json or --output-config options,
                                      will cause partition information to be added to graph output.

Advanced Options
   --timebase=TIMEBASE             HS Set the base time step of the simulation (default: 1ps)
   --parallel-load=[MODE]             Enable parallel loading of configuration. This option is ignored for single rank 
                                      jobs.  Optional mode parameters are NONE, SINGLE and MULTI (default).  If NONE is 
                                      specified, parallel-load is turned off. If SINGLE is specified, the same file 
                                      will be passed to all MPI ranks.  If MULTI is specified, each MPI rank is 
                                      required to have it's own file to load. Note, not all input formats support both 
                                      types of file loading.
   --timeVortex=MODULE              S Select TimeVortex implementation <lib.timevortex>
   --interthread-links=[BOOL]       S [EXPERIMENTAL] Set whether or not interthread links should be used
   --cache-align-mempools=[BOOL]    S [EXPERIMENTAL] Set whether mempool allocations are cache aligned
   --debug-file=FILE                S File where debug output will go
   --lib-path=LIBPATH                 Component library path (overwrites default)
   --add-lib-path=LIBPATH             Component library path (appends to main path)

Advanced Options - Profiling (EXPERIMENTAL)
   --enable-profiling=POINTS       HS Enables default profiling for the specified points.  Argument is a semicolon 
                                      separated list specifying the points to enable.
   --profiling-output=FILE          S Set output location for profiling data [stdout (default) or a filename]

Advanced Options - Debug
   --run-mode=MODE                  S Set run mode [ init | run | both (default)]
   --interactive-console=ACTION     S [EXPERIMENTAL] Set console to use for interactive mode. NOTE: This currently only 
                                      works for serial jobs and this option will be ignored for parallel runs.
   --interactive-start=[TIME]       S [EXPERIMENTAL] Drop into interactive mode at specified simulated time.  If no 
                                      time is specified, or the time is 0, then it will drop into interactive mode 
                                      before any events are processed in the main run loop. This option is ignored if 
                                      no interactive console was set. NOTE: This currently only works for serial jobs 
                                      and this option will be ignored for parallel runs.
   --output-undeleted-events=FILE   S file to write information about all undeleted events at the end of simulation 
                                      (STDOUT and STDERR can be used to output to console)
   --force-rank-seq-startup           Force startup phases of simulation to execute one rank at a time for debug purposes

Advanced Options - Environment Setup/Reporting
   --print-env                        Print environment variables SST will see
   --no-env-config                    Disable SST environment configuration
   --disable-signal-handlers          Disable signal handlers
   --sigusr1=MODULE                HS Select handler for SIGUSR1 signal. See extended help for detail.
   --sigusr2=MODULE                HS Select handler for SIGUSR2 signal. See extended help for detail.
   --sigalrm=MODULE                HS Select handler for SIGALRM signals. Argument is a semicolon separated list
                                      specifying the handlers to register along with a time interval for each. 
                                      See extended help for detail.

Advanced Options - Checkpointing (EXPERIMENTAL)
   --checkpoint-wall-period=PERIOD  S Set approximate frequency for checkpoints to be generated in terms of wall (real)
                                      time. PERIOD can be specified in hours, minutes, and seconds with the following
                                      formats supported: H:M:S, M:S, S, Hh, Mm, Ss (capital letters are the appropriate
                                      numbers for that value, lower case letters represent the units and are
                                      required for those formats.).
   --checkpoint-period=PERIOD       S Set approximate frequency for checkpoints to be generated in terms of simulated
                                      time. PERIOD must include time units (s or Hz) and SI prefixes are accepted. This
                                      flag will eventually be removed in favor of --checkpoint-sim-period
   --checkpoint-sim-period=PERIOD   S Set approximate frequency for checkpoints to be generated in terms of simulated
                                      time. PERIOD must include time units (s or Hz) and SI prefixes are accepted.
   --load-checkpoint                  Load checkpoint and continue simulation. Specified SDL file will be used as the
                                      checkpoint file.
   --checkpoint-prefix=PREFIX      HS Set prefix for checkpoint filenames. The checkpoint prefix defaults to checkpoint
                                      if this option is not set and checkpointing is enabled.
```

## Simulation Examples
SST contains an example Element library (simpleElementExample) that is made up of a number of very simple components. A few "example" configurations demonstrate simple wire-up, message sending, and other basic features. Other components provide more detailed and specific examples for how to use features of the SST Core (e.g., how to create, update, and output statistics). To run your own input configuration (e.g., *myConfig.py*) or one of the example configurations, pass the name of the configuration file to SST as follows:

```sh
$ sst myConfig.py 
```
```sh
$ sst $SST_ELEMENTS_HOME/sst/elements/simpleElementExample/tests/example0.py
```

The configuration file specifies the simulation setup (refer to [Python Configuration](configuration/pythonConfigGuide)).
Note that parameters can be passed to the input configuration file (*myConfig.py*) using either the `--model-options` flag or by appending a `--` followed by the options to the end of the command, as in:

```sh
$ sst --model-options="--param0=X --param1=Y" myConfig.py
```
```sh
$ sst myConfig.py -- --param0=X --param1=Y
```

### SimpleElementExample: Example0
Within simpleElementExample, the first example, *example0*, demonstrates two components each sending to the other a parameterized number of events (e.g., 50 events). The simulation ends when both components receive the expected events. To run this example:

```sh
$ cd $SST_ELEMENTS_HOME/src/sst/elements/simpleElementExample/tests
$ sst example0.py
```

This should produce output that looks like this:

```sh
Simulation is complete, simulated time: 52 ns
```

### SimpleElementExample: Example1
A second example in simpleElementExample adds a statistic to each Example0 component above. The statistic counts the size of each event received. Additionally, the component uses a random number generator to randomly vary the event size. To run this example:
```sh
$ cd $SST_ELEMENTS_HOME/src/sst/elements/simpleElementExample/tests
$ sst example1.py
```

This will produce output that looks like this:
```sh
 c0.EventSizeReceived : Accumulator : Sum.u64 = 696; SumSQ.u64 = 14110; Count.u64 = 50; Min.u64 = 1; Max.u64 = 31; 
 c1.EventSizeReceived : Accumulator : Sum.u64 = 696; SumSQ.u64 = 14110; Count.u64 = 50; Min.u64 = 1; Max.u64 = 31; 
Simulation is complete, simulated time: 52 ns
```

The output shows that component 'c0' received 50 events (Count) and the total size of all events was 696B (Sum). The smallest event received (Min) was 1B and the largest was 31B (Max).
Because the random number generator seed is a hardcoded value in the example1 component, the statistics reported by component 'c1' are identical.

### Running Example0 in Parallel
SST can be run in parallel using MPI:
```sh
$ mpirun -np 2 sst example0.py
```

Using threads:
```sh
$ sst -n 2 example0.py
```

Or using both, (although the example here has only two components so SST will warn about not using all four threads/ranks):
```sh
$ mpirun -np 2 sst -n 2 example0.py
```
