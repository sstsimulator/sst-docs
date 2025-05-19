---
title: getPeriod
---

```cpp
UnitAlgebra getPeriod() const;
```

Returns a UnitAlgebra representing the clock period captured by this TimeConverter. 

## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/timeConverter.h>
example::example(ComponentId_t id, Params& params) : Component(id) 
{
    TimeConverter converter = registerClock("200MHz", new Clock::Handler2<example, &example::clockHandler>(this));

    Output* out = getSimulationOutput();
    // Prints "Registered a 200MHz clock."
    //highlight-start
    out->output("Registered a %s clock.",
        converter.getPeriod().toStringBestSI().c_str());
    //highlight-end
}
```

## Header
```cpp
#include <sst/core/timeConverter.h
```
