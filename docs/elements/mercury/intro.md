---
title: mercury
---

The *mercury* library enables simulating the behavior of large-scale applications.
The elements are derived from functionality available in [macro](../macro/intro) and designed for use with the rest of the SST ecosystem.
Mercury achieves accurate results by mimicking (skeletonizing) both the computation and network communication patterns of the application under test.
Work is underway to automate this approach by leveraging compiler frameworks.

:::note At a Glance

**Source Code:** [sst-elements/.../mercury](https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/mercury) &nbsp;  
**SST Name:** `mercury` &nbsp;  
**Maturity Level:** Early Development (1) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None* 

### Optional dependencies
*None* 

## Elements
Mercury registers its elements under the SST library name `hg`. Use `hg`, not `mercury`, when referencing these elements in an SST input file.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `hg` | `Node` | Component | Mercury node |
| `hg` | `NodeCL` | Component | Mercury node using the ComputeLibrary |
| `hg` | `OperatingSystem` | SubComponent | Mercury operating system; loads into a node's `os_slot` |
| `hg` | `OperatingSystemCL` | SubComponent | Mercury operating system using the ComputeLibrary; loads into a `NodeCL` `os_slot` |
| `hg` | `nic` | SubComponent | Mercury NIC; loads into a node's `nic_slot` |

Skeleton applications are built as separate element libraries. Each one registers a `loader` subcomponent under the application's own library name (for example, the `ostest` test application), and is selected through `OperatingSystem` parameters rather than loaded directly.

```python
node = sst.Component("node0", "hg.Node")
os = node.setSubComponent("os_slot", "hg.OperatingSystem")
os.addParams({ "app1.name" : "ostest",
               "app1.exe_library_name" : "ostest" })
```


## External Applications and Skeletonization<a name="chap_appsAndSkeletonization"></a>

### Section 1: Basic Application porting<a name="sec_skel_basic"></a>

There are three parts to successfully taking a C++ code and turning it into a scalable simulation.

-   Symbol Interception: Rather than linking to MPI, pThreads, or other parallel libraries (or even calling `hostname`), these functions must be redirected to Mercury rather than calling the native libraries on the machine running the simulator.
You get all redirected linkage for free by using the Mercury compiler wrappers `hg++` and `hgcc` installed in the `bin` folder.
-   Skeletonization: While Mercury can run in emulation mode, executing your entire application exactly, this is not scalable.
To simulate at scale (i.e. 1K or more MPI ranks) you must strip down or "skeletonize" the application to the minimal amount of computation.
The energy and time cost of expensive compute kernels are then simulated via models rather than explicitly executed.
-   Process encapsulation: Each virtual process being simulated is not an actual physical process.
It is instead modeled as a lightweight user-space thread.
This means each virtual process has its own stack and register variables, but not its own data segment (global variables).
Virtual processes share the same address space and the same global variables.
A Beta version of the auto-skeletonizing clang-based Mercury compiler is available with the 7.X releases.
If the Beta is not stable with your application, manual refactoring may be necessary if you have global variables.

Now in Beta, another possible feature is available:

-   Memoization hooks: Rather than building an app for simulation, build an app with special profiling hooks.
There is no skeletonization or redirected linkage, but the runtime or performance counters obtained by running should be used to build models for simulation.

There are generally 3 modes of using an application common with Mercury:

-   Simulation: As lightweight as possible without sacrificing accuracy.
Intended to be used for performance estimation at large scales.
-   Emulation/Virtualization: Run a parallel or distributed application within a single simulator thread/process - primarily useful for debugging.
-   Memoization: Run a full application within the simulator, collecting performance counters or timers on critical sections

|  | Simulator hooks | Symbol interception | Skeletonization | Process encapsulation |
|--|-----------------|---------------------|-----------------|-----------------------|
| Simulation | Yes | Yes | Yes | Yes |
| Virtualization | Yes | Yes | No | Yes |
| Memoization | Yes | No | No | No |

#### 1.1: Loading external skeletons with the standalone core<a name="subsec_externalAppStandalone"></a>

You should always write your own skeleton applications in an external folder rather then integrating directly into the `sstmac` executable.
Existing make systems can be used unmodified. Rather than producing an executable, though, Mercury produces a shared library.
These shared libraries are then imported into the main `sstmac` executable.

If you follow the example in the `skeletons/sendrecv` folder,
the Makefile shows how to generate an importable skeleton.
If you are using `hg++`, it will automatically convert executables into loadable libraries.
If your application is named `runapp`, you would run it with `sstmac`:

```bash
./runapp -f parameters.ini --exe=./runapp
```

directing to load the library as a skeleton executable.

### Section 2: Auto-skeletonization with Clang {#sec_autoSkeletonization}

The build of the Clang toolchain is described in Section [Getting Started](https://github.com/sstsimulator/sst-hgcc#getting-started).
This enables a source-to-source translation capability in the `hg++` compiler that can auto-skeletonize computation and fix global variable references.
Some of this can be accomplished automatically (global variables), but most of it (removing computation and memory allocations) must occur through pragmas.
A good example of skeletonization can be found in the lulesh2.0.3 example in the skeletons folder.
Most of the available Mercury pragmas are used there.
Pragmas are preferred since they allow switching easily back and forth between skeleton and full applications.
This allows much easier validation of the simulation.
The section here briefly introduces the Mercury pragma language.
A complete list fn all available pragmas is given in [Pragma Reference](https://github.com/sstsimulator/sst-hgcc#pragma-reference).

#### 2.1: Redirecting Main<a name="subsec_redirectMain"></a>

Your application's `main` has to have its symbols changed.
The simulator itself takes over `main`.
Mercury therefore has to capture the function pointer in your code and associate it with a string name for the input file.
This is automatically accomplished by defining the macro `sst_hg_user_main_*` either in your code or through a `-D=` build flag to the name of your application (unquoted!).
The value of the macro will become the string name used for launching the application via `app1.name=X`.
Even without Clang, this works for C++. For C, Clang source-to-source is required.

#### 2.2: Memory Allocations<a name="subsec_memoryAllocations"></a>

To deactivate memory allocations in C code that uses `malloc`, use:

```cpp
#pragma sst malloc void* ptr = malloc(...)
```

prior to any memory allocations that should be deactivated during skeleton runs, but active during real runs.

Similarly, for C++ we have

```cpp
#pragma sst new int* ptr = new int[...]
```

#### 2.3: Computation<a name="subsec_computation"></a>

In general, the Mercury compiler captures all `#pragma omp parallel` statements.
It then analyzes the for-loop or code block and attempts to derive a computational model for it.
The computational models are quite simple (skeleton apps!), based simply on the number of flops executed and the number of bytes read (written) from memory.
Consider the example:

```cpp
double A[N], B[N];
#pragma omp parallel for
for (int i=0; i < N; ++i) {
    A[i] = alpha*A[i] + B[i];
}
```

The Mercury compiler deduces 16N bytes read, 8N bytes written, and 16N flops (or 8N if fused-multiplies are enabled).
Based on processor speed and memory speed, it then estimates how long the kernel will take without actually executing the loop.
If not wanting to use OpenMP in the code, `#pragma sst compute` can be used instead of `#pragma omp parallel`.

#### 2.4: Special Pragmas<a name="subsec_specialPragams"></a>

Many special cases can arise that break skeletonization.
This is often not a limit of the Mercury compiler, but rather a fundamental limitation in the static analysis of the code.
This most often arises due to nested loops.
Consider the example:

```cpp
#pragma omp parallel for
for (int i=0; i < N; ++i) {
    int nElems = nElemLookup[i];
    for (int e=0; e < nElems; ++e){ }
}
```

Auto-skeletonization will fail.
The skeletonization converts the outer loop into a single call to a Mercury compute model.
However, the inner loop can vary depending on the index.
This data-dependency breaks the static analysis.
To fix this, a hint must be given to Mercury as to what the "average" inner loop size is.
For example, it may loops nodes in a mesh. In this case, it may almost always be 8.

```cpp
#pragma omp parallel for
for (int i=0; i < N; ++i) {
    int nElems = nElemLookup[i];
    #sst replace nElems 8
    for (int e=0; e < nElems; ++e){ }
}
```

This hint allows Mercury to skeletonize the inner loop and "guess" at the data dependency.

#### 2.5: Skeletonization Issues<a name="subsec_skeletonIssues"></a>

Skeletonization challenges fall into three main categories:

-   Data structures - Memory is a precious commodity when running large simulations, so get rid of every memory allocation you can.
-   Loops - Usually the main brunt of CPU time, so get rid of any loops that don't contain MPI calls or calculate variables needed in MPI calls.
-   Communication buffers - While you can pass in real buffers with data to Mercury MPI calls and they will work like normal, it is relatively expensive.
If they're not needed, get rid of them.

The main issue that arises during skeletonization is data-dependent communication.
In many cases, it will seem like you can't remove computation or memory allocation because MPI calls depend somehow on that data.
The following are some examples of how we deal with those:

-   Loop convergence - In some algorithms, the number of times you iterate through the main loop depends on an error converging to near zero, or some other converging mechanism.
This basically means you can't take out anything at all, because the final result of the computation dictates the number of loops.
In this case, we usually set the number of main loop iterations to a fixed number.
-   Particle migration - Some codes have a particle-in-cell structure, where the spatial domain is decomposed among processes, and particles or elements are distributed among them, and forces between particles are calculated.
When a particle moves to another domain/process, how many particles migrate and how far depends on the actual computed forces.
However, in the skeleton, we are not actually computing the forces - only estimated how long the force computation took.
If all we need to know is that this migration/communication happens sometimes, then we can just make it happen every so many iterations, or even sample from a probability distribution.
-   AMR - Some applications, like adaptive mesh refinement (AMR), exhibit communication that is entirely dependent on the computation.
In this case, skeletonization again depends on making approximations or probability estimates of where and when box refinement occurs without actually computing everything.

For applications with heavy dynamic data dependence, we have the following strategies:

-   Traces  - revert to DUMPI traces, where you will be limited by existing machine size.
Trace extrapolation is also an option here.
-   Synthetic - It may be possible to replace communication with randomly-generated data and decisions, which emulate how the original application worked.
This occurs in the CoMD skeleton.
-   Hybrid - It is possible to construct meta-traces that describe the problem from a real run, and read them into Mercury to reconstruct the communication that happens.
This occurs in the `boxml` applications.

### Section 3: Process Encapsulation<a name="sec_processEncapsulation"></a>

As mentioned above, virtual processes are not real, physical processes inside the OS.
They are explicitly managed user-space threads with a private stack, but without a private set of global variables.
When porting an application to Mercury, global variables used in C programs will not be mapped to separate memory addresses causing incorrect execution or even segmentation faults.
If you have avoided global variables, there is no major issue.
If you have read-only global variables with the same value on each machine, there is still no issue.
If you have mutable global variables, you should use the `hg++` clang-based compiler wrappers to auto-refactor your code (Section [2](#sec_autoSkeletonization)).
This feature is current labeled Beta, but is stable for numerous tests and will be fully supported for release 7.1.

## HGCC

See the documentation for the corresponding [HGCC compiler](hgcc).
