---
title: getMemPoolUsage
---

```cpp
void getMemPoolUsage(int64_t& bytes, int64_t& active_entries);
```

Returns the size of the mem pools via the `bytes` argument and the total number of active (currently allocated) entries via the `active_entries` argument. This function queries only the mem pools present on the *current rank*. Mem pools are shared across threads on a rank.

## Parameters
* **bytes** (int64_t&) The size of the mem pools on the current rank/thread in bytes.
* **active_entries** (int64_t&) Number of currently allocated entries in the mem pools
* **returns** None. Values are return via the parameters.


## Example
In this example, the action collects local (per-rank) mem pool usage and aggregates it to find total usage.
```cpp
void
HeartbeatRealTimeAction::execute()
{
    // Skipping irrelevant code
    ...

    RankInfo rank = getRank();
    RankInfo numRanks = getNumRanks();
    int64_t mempool_size = 0;       // Local size of mempools
    int64_t active_activities = 0;  // Local active entries in mempools

    int64_t global_sum_mempool_size = 0; // Total size of mempools
    int64_t global_max_mempool_size = 0; // Largest mempool size across all ranks
    int64_t global_sum_active_activities = 0; // Total active entries in all mempools

    if ( 0 == rank.thread ) { // Only thread 0 counts since threads are shared
        //highlight-next-line
        getMemPoolUsage(mempool_size, active_activities);

        // Compute global values
        if ( num_ranks.rank > 1 ) {
#ifdef SST_CONFIG_HAVE_MPI
            MPI_Allreduce(&mempool_size, &global_max_mempool_size, 1, MPI_INT64_T, MPI_MAX, MPI_COMM_WORLD);
            MPI_Allreduce(&mempool_size, &global_sum_mempool_size, 1, MPI_INT64_T, MPI_SUM, MPI_COMM_WORLD);
            MPI_Allreduce(&active_activities, &global_sum_active_activities, 1, MPI_INT64_T, MPI_SUM, MPI_COMM_WORLD);
#endif
        } else { /* Serial or thread-only simulation */
            global_max_mempool_size = mempool_size;
            global_sum_mempool_size = mempool_size;
            global_sum_active_activities = active_activities;
        }
        
        // Print values - only rank 0 / thread 0 prints
        if ( rank.rank == 0 ) {
            std::string ua_str;
            ua_str = format_string("%" PRIu64 "B", global_max_mempool_size);
            UnitAlgebra global_max_mempool_size_ua(ua_str);

            ua_str = format_string("%" PRIu64 "B", global_sum_mempool_size);
            UnitAlgebra global_sum_mempool_size_ua(ua_str);

            Output sim_output = getSimulationOutput();
            
            sim_output.output(
                "\tMax mempool usage:               %s\n", global_max_mempool_size_ua.toStringBestSI().c_str());
            sim_output.output(
                "\tGlobal mempool usage:            %s\n", global_sum_mempool_size_ua.toStringBestSI().c_str());
            sim_output.output(
                "\tGlobal active activities         %" PRIu64 " activities\n", global_sum_active_activities);
        }
    }
}
```

## Header
```cpp
#include <sst/core/realtimeAction.h>
```
