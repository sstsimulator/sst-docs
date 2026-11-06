---
title: ember
---

The *ember* library provides infrastructure for modeling network endpoints and generating network traffic for large-scale network simulations. Applications are modeled as motifs which generate network traffic. Both MPI-like and SHMEM-like motifs are supported. Ember integrates with Firefly which models the NIC and uses the Hermes interface. These in turn integrate with network simulators that implement the [SST:SimpleNetwork](../../core/iface/SimpleNetwork/class) interface.

:::note At a Glance

**Source Code:** [sst-elements/.../ember](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ember) &nbsp;  
**SST Name:** `ember` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies
*None*

## Elements
Use `sst-info ember` or `sst-info ember.<element>` to see each element's parameters, ports, and statistics. Ember registers more than 120 motifs, so they are grouped by family below. In a configuration, a motif's name drops the `Motif` suffix: the `ember.AllreduceMotif` element is added with `ep.addMotif("Allreduce")`.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `ember` | `EmberEngine` | Component | Endpoint engine for one rank; runs its queue of motifs through the Hermes APIs (e.g., `firefly.hadesMP`) of the OS in its `OS` slot. Created by the `sst.ember` job classes |
| `ember` | `InitMotif`, `FiniMotif`, `NullMotif`, `StopMotif` | SubComponent | Setup and control motifs: MPI init and finalize, an idle motif that generates no traffic, and a motif that performs a barrier and then stops the simulation with a fatal error |
| `ember` | `AllreduceMotif`, `ReduceMotif`, `BcastMotif`, `BarrierMotif`, `AllgatherMotif`, `AllgathervMotif`, `AlltoallMotif`, `AlltoallvMotif`, `ScatterMotif`, `ScattervMotif` | SubComponent | MPI collective-operation motifs |
| `ember` | `PingPongMotif`, `BiPingPongMotif`, `AllPingPongMotif`, `SendrecvMotif`, `RingMotif`, `MsgRateMotif`, `IncastMotif`, `NtoMMotif`, `HotSpotsMotif`, `RandomMotif`, `TrafficGenMotif`, `TestMotif`, `TestanyMotif`, `WaitanyMotif`, `CommMotif`, `CommDoubleMotif` | SubComponent | MPI point-to-point, traffic-pattern, and communicator motifs |
| `ember` | `Halo2DMotif`, `Halo2DNBRMotif`, `Halo3DMotif`, `Halo3D26Motif`, `Halo3DSVMotif`, `Sweep2DMotif`, `Sweep3DMotif`, `3DAMRMotif`, `FFT3DMotif`, `LQCDMotif`, `NASLUMotif`, `CMT1DMotif`, `CMT2DMotif`, `CMT3DMotif`, `CMTCRMotif`, `BFSMotif`, `TriCountMotif`, `UnstructuredMotif` | SubComponent | Motifs that model the communication patterns of applications and kernels (halo exchanges, sweeps, AMR, FFT, LQCD, NAS LU, CMT, graph algorithms) |
| `ember` | `DetailedRingMotif`, `DetailedStreamMotif` | SubComponent | Motifs that use a detailed compute model |
| `ember` | `SIRIUSTraceMotif` | SubComponent | Motif that replays a SIRIUS MPI trace |
| `ember` | `Shmem*Motif` (e.g., `ShmemPutIntMotif`, `ShmemGetLongMotif`, `ShmemAddIntMotif`, `ShmemBarrierAllMotif`, `ShmemReductionDoubleMotif`, `ShmemFAM_PutMotif`) | SubComponent | SHMEM motifs for puts, gets, atomics, synchronization, and collectives over the supported data types, plus fabric-attached memory (FAM) variants; used with `EmberSHMEMJob` |
| `ember` | `TestNetworkIOMotif` | SubComponent | Motif that tests the network storage I/O API |
| `ember` | `mpiLib`, `shmemLib`, `miscLib`, `networkIOLib` | Module | Libraries that motifs use to call each Hermes API; loaded automatically for each API the engine is given |
| `ember` | `ConstDistrib`, `GaussianDistrib` | Module | Models of compute time: constant, or with Gaussian noise; selected with the `distribModule` parameter |
| `ember` | `LinearMap`, `CustomMap` | Module | Rank mappers: linear, or a custom mapping read from a file; selected with the `rankmapper` parameter |

## Configuring Ember simulations
Build Ember simulations with the `sst.ember` Python module together with the `sst.merlin.*` modules for the network. `sst.ember` provides job classes such as `EmberMPIJob` and `EmberSHMEMJob`: you add motifs to a job with `addMotif()`, and the job builds the Firefly NIC and Hermes OS stack for each node. See [Running Motifs](./RunningMotifs.md) for a complete walkthrough.

The `ember/test/emberLoad.py` script and the helper files next to it (`EmberEP.py`, `loadInfo.py`, the parameter files, ...) are the older way to configure Ember. They are deprecated and should not be used for new configurations.


import DocCardList from '@theme/DocCardList';

<DocCardList />

