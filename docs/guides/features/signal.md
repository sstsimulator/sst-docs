---
title: Signal handling
---


SST handles the `SIGINT`, `SIGTERM`, `SIGUSR1`, and `SIGUSR2` signals and also uses `SIGALRM` to execute actions that occur on a timer. Actions are defined based on the `RealTimeAction` class. SST provides default actions for each of the signals and allows users to override the default with custom actions for `SIGUSR1`, `SIGUSR2`, and `SIGALRM`.

Signals are only detected and handled during SST's [run phase](../concepts/lifecycle.mdx). Signals sent earlier may be missed. Signals sent later will be ignored.

## The `RealTimeAction` class
`RealTimeAction` objects are actions that execute in response to a signal. SST provides several actions and element libraries may additionally provide their own custom actions. The actions provided by SST are:

* **Exit simulation** (`sst.rt.exit.clean`) - Simulation exits SST's run stage and proceeds to the complete stage. 
* **Exit simulation with error**(`sst.rt.exit.emergency`) - Simulation exits immediately with an error and does not attempt to finish the simulation.
* **SST-Core Status**(`sst.rt.status.core`) - SST-Core reports the simulated time.
* **Simulation Status**(`sst.rt.status.all`) - SST-Core reports the simulated time and [`printStatus()`](../../core/component/lifecycle/printStatus.md) is called on every Component in the simulation.
* **Heartbeat**(`sst.rt.heartbeat`) - SST-Core reports the simulated time and some profiling metrics (size of memory pools, time in synchronization, etc.)
* **Checkpoint**(`sst.rt.checkpoint`) - Creates a checkpoint.
* **Interactive Console**(`sst.rt.interactive`) - Pause simulation and drop into an interactive console to view simulation state. This action requires that an SST console be specified using the command line option `--interactive-console`.

The table below shows the default action for each signal. The "Command line control" column shows command line options that are available to override the default action.
| Signal  | Default RealTimeAction		| Description									| Command line control  |
| ---     | ---     					| ---											| ---					|
| SIGINT  | `sst.rt.exit.emergency` 	| Exit simulation immediately with an error 	| None					|
| SIGTERM | `sst.rt.exit.emergency` 	| Exit simulation immediately with an error		| None					|
| SIGUSR1 | `sst.rt.status.core` 		| Report status of SST-Core						| `--sigusr1` 			|
| SIGUSR2 | `sst.rt.status.all` 		| Report status of SST-Core and all Components	| `--sigusr2` 			|
| SIGALRM | \-                       	| \-											| `--checkpoint-wall-period`, `--heartbeat-wall-period`, `--exit-after`, `--sigalrm` |

When SST receives a signal in a serial simulations, it executes the associated RealTimeAction as soon as the currently-executing event or clock handler returns control to SST-Core. Actions in parallel simulations are deferred until SST-Core's next synchronization point. Therefore, actions may perform global read and synchronization operations.

:::caution
When running SST with OpenMPI, signals sent to the `mpirun` process are not always handled as expected. This can be avoided by sending the signal directly to one of the SST ranks.

When sent to `mpirun`:
* SIGUSR1 and SIGUSR2 signals may be duplicated in SST.
* SIGINT and SIGTERM are not always delivered to the SST processes so emergency shutdown may not occur before SST is terminated.
:::

## Custom RealTimeActions

:::note
Custom RealTimeActions were introduced in SST 14.1. The API stable as of SST 15.0 but new functionality will be added as needed.
:::

### SIGUSR1/SIGUSR2
Actions can be associated with either SIGUSR signal by passing the name of the action to SST on the command line. For example, this simulation will run the heartbeat action when a SIGUSR1 is received:
```sh
$ sst --sigusr1=sst.rt.heartbeat sst_config_file.py
```

### SIGALRM
SST provides three command line options to enable actions that are commonly executed on a recurring interval. These use the SIGALRM signal and the options are:
* `--exit-after=<TIME>` Executes `sst.rt.exit.clean` after the specified `<TIME>`.
* `--checkpoint-wall-period=<TIME>` Creates a checkpoint (using `sst.rt.checkpoint`) on the recurring interval specified by `<TIME>`.
* `--heartbeat-wall-period=<TIME>` Executes the heartbeat action (`sst.rt.heartbeat`) on the recurring interval specified by `<TIME>`.

In addition, custom actions, both those provided by SST and those provided in element libraries, can be registered with a time interval using the `--sigalrm` option.
These actions take a time interval as a parameter.

```sh title="These are equivalent command lines"
$ sst --checkpoint-wall-period=1h --heartbeat-wall-period=15m sst_config_file.py
$ sst --sigalrm="sst.rt.checkpoint(interval=1h)" --sigalrm="sst.rt.heartbeat(interval=15m)" sst_config_file.py
$ sst --sigalrm="sst.rt.checkpoint(interval=1h);sst.rt.heartbeat(interval=15m)" sst_config_file.py
```

```sh title="Example of registering a custom action called 'elemlib.custom_action'"
$ sst --sigalrm="elemlib.custom_action(interval=01:30)" sst_config_file.py
```
