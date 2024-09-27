---
title: Signal handling
---

SST handles the `SIGINT`, `SIGTERM`, `SIGUSR1`, and `SIGUSR2` signals.

Signals are only detected and handled during SST's [run phase](../concepts/lifecycle.mdx). Signals sent earlier may be missed. Signals sent later will be ignored.

## SIGINT and SIGTERM
SIGINT and SIGTERM cause SST to initiate an emergency shutdown. It exits the run phase, calls `emergencyShutdown()` on all components in the simulation, and exits.

## SIGUSR1
Sending SST a SIGUSR1 causes the SST-Core to generate a status message with the current simulation time. The output looks like this.
```sh
	CurrentSimCycle:  11090000
```
In parallel simulations, each parallel context (thread and/or rank) will generate its own message.

## SIGUSR2
Sending SST a SIGUSR2 causes the SST-Core to generate a status message and every component in the simulation is also given the opportunity to generate a status update. SST-Core does this by calling the `printStatus()` function on each component.

:::caution
When running SST with OpenMPI, signals sent to the `mpirun` process are not always handled as expected. This can be avoided by sending the signal directly to one of the SST ranks.

When sent to `mpirun`:
* SIGUSR1 and SIGUSR2 signals may be duplicated in SST.
* SIGINT and SIGTERM are not always delivered to the SST processes so emergency shutdown may not occur before SST is terminated.
:::

