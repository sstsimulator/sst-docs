---
id: runningSST
title: How to Run SST
---

## Running SST 
Before running SST, make sure your `$LD_LIBRARY_PATH` environment variable include the location of the dependency and component libraries so that it is searched for shared libraries at runtime. For example, it you followed the wiki page to build and install SST, the `$HOME/local/lib` should be included in your `$LD_LIBRARY_PATH` environment variable.

### Usage 
The SST command line has three parts, the SST binary, options for the binary, and a Python configuration file.

```sh
<SST binary> [SST options] <config file>
```

### SST Options 
Running SST with the "--help" flag prints a help message that includes all of the supported simulator options. Here's a snippet:

```sh
$ ./sst --help
Usage: sst [options] config-file
  Arguments to options contained in [] are optional.
  BOOL values can be expressed as true/false, yes/no or 1/0 and default to true if the option is specified
  Options available to be set in the sdl file (input configuration file) are denoted by (S)

Informational Options
 -h, --help                          Print help message
 -V, --version                       Print SST Release Version

Basic Options (most commonly used)
 -v, --verbose=[level]           (S) Verbosity level to determine what information about core runtime is printed
 -n, --num_threads=NUM           (S) Number of parallel threads to use per rank
      --sdl-file=FILE                Specify SST Configuration file.  Note: this is most often done by just specifying the file without an option.
      --model-options=STR            Provide options to the python configuration script.  Additionally, any arguments provided after a final '-- ' will be appended to the model options
                                     (or used as the model options if --model-options was not specified).
      --print-timing-info=[BOOL] (S) Print SST timing information
      --stop-at=TIME             (S) Set time at which simulation will end execution
      --stopAtCycle=TIME         (S) [DEPRECATED] Set time at which simulation will end execution (deprecated, please use --stop-at instead)
      --exit-after=TIME          (S) Set the maximum wall time after which simulation will end execution.  Time is specified in hours, minutes and seconds, with the following formats
                                     supported: H:M:S, M:S, S, Hh, Mm, Ss (captital letters are the appropriate numbers for that value, lower case letters represent the units and are
                                     required in for those formats).
      --stopAfter=TIME           (S) [DEPRECATED] Set the maximum wall time after which simulation will exit (deprecatd, please use --exit-after instead)
      --timebase=TIMEBASE        (S) Set the base time step of the simulation (default: 1ps)
      --partitioner=PARTITIONER  (S) Select the partitioner to be used. <lib.partitionerName>
      --heartbeat-period=PERIOD  (S) Set time for heartbeats to be published (these are approximate timings, published by the core, to update on progress)
      --output-directory=DIR     (S) Directory into which all SST output files should reside
      --output-prefix-core=STR   (S) set the SST::Output prefix for the core

Configuration Output Options (generates a file that can be used as input for reproducing a run)
      --output-config=FILE       (S) File to write SST configuration (in Python format)
      --output-json=FILE         (S) File to write SST configuration graph (in JSON format)
      --parallel-output=[BOOL]   (S) Enable parallel output of configuration information.  This option is ignored for single rank jobs.  Must also specify an output type (--output-config
                                     and/or --output-json).  Note: this will also cause partition info to be output if set to true.
      --output-xml=FILE          (S) [DEPRECATED] File to write SST configuration graph (in XML format)

Graph Output Options (for outputting graph information for visualization or inspection)
      --output-dot=FILE          (S) File to write SST configuration graph (in GraphViz format)
      --dot-verbosity=INT        (S) Amount of detail to include in the dot graph output
      --output-partition=[FILE]  (S) File to write SST component partitioning information.  When used without an argument and in conjuction with --output-json or --output-config options,
                                     will cause paritition information to be added to graph output.

Advanced Options
      --parallel-load                Enable parallel loading of configuration. This option is ignored for single rank jobs.
      --timeVortex=MODULE        (S) Select TimeVortex implementation <lib.timevortex>
      --interthread-links=[BOOL] (S) [EXPERIMENTAL] Set whether or not interthread links should be used <false>
      --debug-file=FILE          (S) File where debug output will go
      --lib-path=LIBPATH         (S) Component library path (overwrites default)
      --add-lib-path=LIBPATH     (S) Component library path (appends to main path)

Advanced Options - Debug
      --run-mode=MODE            (S) Set run mode [ init | run | both (default)]
      --output-undeleted-events=FILE
                                 (S) file to write information about all undeleted events at the end of simulation (STDOUT and STDERR can be used to output to console)
      --force-rank-seq-startup       Force startup phases of simulation to execute one rank at a time for debug purposes

Advanced Options - Environment Setup/Reporting
      --print-env                    Print environment variables SST will see
      --disable-signal-handlers      Disable signal handlers
      --no-env-config                Disable SST environment configuration
```

## Simulation Examples
SST contains an example Element library (simpleElementExample) that is made up of a number of very simple components.  A few "example" configurations demonstrate simple wire-up, message sending, and other basic features. Other components provide more detailed and specific examples for how to use features of the SST Core (e.g., how to create, update, and output statistics). To run your own input configuration (e.g., *myConfig.py*) or one of the example configurations, pass the name of the configuration file to SST as follows:

```sh
$ sst myConfig.py 
```
```sh
$ sst $SST_HOME/sst/elements/simpleElementExample/tests/example0.py
```

The configuration file specifies the simulation setup (refer to [Python Configuration](configuration/pythonConfigGuide)).
Note that parameters can be passed to the input configuration file (*myConfig.py*) using either the `--model-options` flag or appending a `--` followed by the options to the end of the command, as in:

```sh
$ sst --model-options="--param0=X --param1=Y" myConfig.py
```
```sh
$ sst myConfig.py -- --param0=X --param1=Y
```

### SST Example0
Within simpleElementExample, the first example, *example0*, demonstrates two components each sending to the other a parameterized number of events (e.g., 50 events). The simulation ends when both components receive the expected events. To run this example:

```sh
$ cd $SST_HOME/sst/elements/simpleElementExample/tests
$ sst example0.py
```

This should produce output that looks like this:

```sh
Simulation is complete, simulated time: 52 ns
```

### SST Example1
A second example in simpleElementExample adds a statistic to each Example0 component above that counts the size of each event received. Additionally, the component uses a random number generator to randomly vary the event size. To run this example:
```sh
$ cd $SST_HOME/sst/elements/simpleElementExample/tests
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
mpirun -n 2 sst example0.py
```

Using threads:
```sh
sst -n 2 example0.py
```

Or using both, (although the example here has only two components so SST will warn about not using all four threads/ranks):
```sh
mpirun -n 2 sst -n 2 example0.py
```