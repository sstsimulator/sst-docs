---
title: addData
---
```cpp
template <class... InArgs>
void addData(InArgs&&... args);
```

Adds data to a statistic. This call also increments the number of times data has been added to the statistic by one.


## Parameters
* **args** (Varies) The data to add to the Statistic. Type matches the Statistic type which is set when the statistic is registered.
* **returns** none

## Examples

### Example 1
```cpp
stat_GetXReqReceived->addData(1);
```

### Example 2
```cpp
stat_MSHROccupancy->addData(mshr->getSize());
```

### Example 3
```cpp
m_evStat->addData( time - m_issueTime );
```

### Example 4
```cpp
if ( issue( req ) ) {
    stat_cyclesWithIssue->addData(1);
} else {
    stat_cyclesAttemptIssueButRejected->addData(1);
    break;
}
```

### Example 5
```cpp
if( !memSystem->getStats( &tbandwidth, TOTAL_BANDWIDTH ) ){
TBandwidth->addData(tbandwidth);
}

if( !memSystem->getStats( &bytes_transferred, TOTAL_BYTES_TRANSFERRED ) ){
BytesTransferred->addData(bytes_transferred);
}

if( !memSystem->getStats( &total_reads, TOTAL_READS ) ){
TotalReads->addData(total_reads);
}

if( !memSystem->getStats( &total_writes, TOTAL_WRITES ) ){
TotalWrites->addData(total_writes);
}

if( !memSystem->getStats( &total_xactions, TOTAL_TRANSACTIONS ) ){
TotalXactions->addData(total_xactions);
}

if( !memSystem->getStats( &pending_reads, PENDING_READ_TRANSACTIONS ) ){
PendingReads->addData(pending_reads);
}

if( !memSystem->getStats( &pending_rtns, PENDING_RTN_TRANSACTIONS ) ){
PendingRtns->addData(pending_rtns);
}
```

## Header
The statistic header file is included with any SST object that supports statistics.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h>
```