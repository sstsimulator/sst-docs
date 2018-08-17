---
id: registerClock
title: registerClock()
---

## Requirements

```cpp
 #include <sst/core/component.h>
```

## Syntax

<!--- java used here since it looked liked the highlight was a bit better (in VS code), would need to test and see what looks best --->

```cpp
TimeConverter* registerClock (const UnitAlgebra &freq, Clock::HandlerBase *handler, bool regAll=true)

TimeConverter* registerClock (std::string freq, Clock::HandlerBase *handler, bool regAll=true)

// reactivates an existing Clock and Handler, returns the next time clock handler will fire
Cycle_t reregisterClock (TimeConverter *freq, Clock::HandlerBase *handler)
```

## Parameters

**freq** - How often the handler should be called. This can be either the time between calls ("50ms") or a frequency ("1GHz").

**handler** - a Clock::HandlerBase that wraps a function to be called

**regAll** (optional) - Should this clock period be used as the default time base for all of the links connected to this component

## Return Value

**TimeConverter** - an object to convert between the component's view of time and the simulation's view of time.

**Cycle_t** - then next time the handler willl fire

## Remarks

This sets up a function to be called at regular intervals. Often these Clock::Handler funtions are where a good portion of the work is done.

Tasks that are often performed:

- Handle data queued by event handlers
- Send envents
- Simulate the next step 

## Examples

### Example 1

```cpp
// carwash/carGenerator.cc – lines 20, 24
std::string clockFreq = params.find<std::string>("delay", "60s");

registerClock(clockFreq, new SST::Clock::Handler<carGenerator>(this, &carGenerator::clockTick));
```

### Example 2

```cpp
// dmaEngine.cc - 34-35
TimeConverter *tc = registerClock(params.find<std::string>("clockRate", "1 GHz"),
   new Clock::Handler<DMAEngine>(this, &DMAEngine::clock));
```

### Example 3

```cpp
//Opal.cc - lines 95 - 96
std::string cpu_clock = params.find<std::string>("clock", "1GHz");
registerClock( cpu_clock, new Clock::Handler<Opal>(this, &Opal::tick ) );
```

## See Also

- [Clock::Handler](core/clock/clock_handler.md)