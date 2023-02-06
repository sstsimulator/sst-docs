---
title: getPeriod
---

```cpp
UnitAlgebra getPeriod() const;
```

Returns a UnitAlgebra representing the clock period captured by this TimeConverter. 

## Examples

<!--- SOURCE_CODE: None --->
### Example 1
```cpp
#include <sst/core/timeConverter.h>
example::example(ComponentId_t id, Params& params) : Component(id) 
{
    TimeConverter* converter = registerClock("200MHz", new Clock::Handler<example>(this, &example::clockHandler));

    Output* out = getSimulationOutput();
    // Prints "Registered a 200MHz clock."
    out->output("Registered a %s clock.",
        converter->getPeriod().toStringBestSI().c_str());
}
```

## Header
```cpp
#include <sst/core/timeConverter.h
```
