---
id: clock_handler
title: "Clock::Handler"
---
## Fully Qualified Name
```cpp
SST::Clock::Handler<classT, argT>
// classT - The object that contains the handler
// argT - (optional) the type of additional data sent to the handler, if any 
```

### Remarks

This wraps a function to be called at regular intervals. This passes the current cycle, and optionally, extra data to the function.

## Requirements

```cpp
#include <sst/core/component.h>
```

## Syntax

```cpp
//#1 - no data - create a clock handler with a reference to an object and a pointer to its tick function
SST::Clock::Handler<classT>::Handler (classT *const object, PtrMember member)

//#2 - with data - provide additional data to the tick function
SST::Clock::Handler<classT, argT>::Handler (classT *const  object, PtrMember  member, argT  data)
```

## Parameters

**object** - A reference to the object, most often it is this.

**member** - Pointer to the tick function. The tick function signature depends on what constructor was used.
- **Returns true** if the Handler should stop.
- **Returns false** if the Handler should continue.
```cpp
  //#1 - no data
  bool tick(Cycle_t cycle) { ... }

  //#2 - with data
  bool tick(Cycle_t cycle, argT data) { ... }
```
**data** - Additional data to pass to the tick function.

## Examples

### Example 1
```cpp
//#1 - no data
Clock::Handler<MemController>* clockHandler = new Clock::Handler<MemController>(this, &MemController::clock);

bool MemController::clock(Cycle_t cycle) {
    bool unclockLink = true;
    if (clockLink_) {
        unclockLink = link_->clock();
    }

    bool unclockBack = memBackendConvertor_->clock( cycle );
    
    if (unclockLink && unclockBack) {
        memBackendConvertor_->turnClockOff();
        clockOn_ = false;
        return true;
    }

    return false;
}
```
### Example 2
```cpp
//#2 - with data
Clock::Handler<MemController>* clockHandler = new Clock::Handler<simpleCarWash, uint32_t>(this, &simpleCarWash::Clock2Tick, 222)

bool simpleCarWash::Clock2Tick(SST::Cycle_t CycleNum, uint32_t Param)
{
    // NOTE: THIS IS THE 5NS CLOCK 
    std::cout << "  CLOCK #2 - TICK Num " << CycleNum << "; Param = " << Param << std::endl;
    
    // return false so we keep going or true to stop
    if (CycleNum == 15) {
        return true;
    } else {
        return false;
    }
}

```

## See Also

- [Component::registerClock](cpp/component/registerClock.md)