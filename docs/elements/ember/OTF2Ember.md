---
title: Capturing and using OTF2 Traces with Ember
---

This page describes how to capture OTF2 traces and use them within Ember to drive traffic from application traces. 

:::info
Utilising this functionality requires a change to the build configuration for SST Elements. See [Building SST Elements for OTF2 Traces](#building-sst-elements-for-otf2-traces)
:::

This file makes use of the [Ember Communication Pattern Library](https://github.com/sstsimulator/ember) for a test application.

## Capturing OTF2 Traces
There are two methods to generate OTF traces, firstly using [TAU](https://www.cs.uoregon.edu/research/tau/home.php)and the second option using [Score-P](https://www.vi-hps.org/projects/score-p/).

This guide assumes that either TAU or Score-P are installed on the system. 

### TAU
TAU generates its own traces which can in turn be converted in to OTF2 traces. 

You must set the TAU_MAKEFILE environment variable to the machine specific makefile: 

    $ export TAU_MAKEFILE=${TAU_INSTALL}/lib/Makefile.tau-intel-mpi-pthread-pdt

The application needs to be compiled with the TAU wrapper like so: 

    $ make CC=tau_cc.sh


```bash title=Example Tau Slurm Script
#!/bin/bash


#SBATCH -N 2
#SBATCH -n 1

export TAU_TRACE=1
export TRACEDIR=${HOME}/traces/halo3d-26
srun -n <tasks> -N <nodes> tau_exec halo3d-26
````

When the application has been run the TAU traces will be located at ${HOME}/traces. 

They can then merge them: 

    $ tau_merge -e events.*.edf -m halo3d-26.edf tautrace.*.trc halo3d-26.trc

And finally convert those to OTF2: 

    $ tau2otf2 halo3d-26.trc tau.edf halo3d26-traces

### Score-P 
TBC

## Building SST Elements for OTF2 Traces
When configuring SST Elements to the use the OTF2 Motif you must enable it with the following configuration flag `--with-otf2`. 

    $ ../configure --with-otf2=${OTF2_INSTALL_PATH} --prefix=$SST_ELEMENTS_HOME --with-sst-core=$SST_CORE_HOME

## Running the OTF2 Motif in SST
This document assumes that a system has been configured in SST, and is ready to use and will just define how to configure the endpoint in python. 

Add the motif to an endpoint like so: 

    ep.addMotif("OTF2 tracePrefix=path/to/trace/halo3d26-traces.otf2")

The number of endpoints must match that of the trace: 

```python
ep = EmberMPIJob(0, 2, 1, 1)
ep.addMotif("Init")
ep.addMotif("OTF2 tracePrefix=halo3d26-traces.otf2")
ep.addMotif("Fini")
# Turn of Verbosity for this endpoint
ep.ember.verbose = 1
````

The path to the traces can be absolute or relative. 

Currently there is an issue with linking to OTF2; so you must set LD_PRELOAD to the OTF2 lib prior to running SST:  

    $ export LD_PRELOAD=${OTF2_INSTALL_PATH}/lib/libotf2.so