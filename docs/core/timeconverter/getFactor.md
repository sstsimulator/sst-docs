---
title: getFactor
---

```cpp
SimTime_t getFactor() const;
```

Returns the factor used for conversions with Core Time.

## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/timeConverter.h>
example::example(ComponentId_t id, Params& params) : Component(id) 
{
    TimeConverter* converter = registerClock("200MHz", new Clock::Handler<example>(this, &example::clockHandler));

    Output* out = getSimulationOutput();
    // Assuming core time base is the default 1ps, converter->getFactor() returns 5ns / 1ps = 5000
    //highlight-start
    out->output("Registered a 200MHz clock. The Core Time base is %s. 200MHz / %s is %" PRIu64 "\n.",
        getCoreTimeBase().toStringBestSI().c_str(), converter->getFactor());
    //highlight-end
}
```

## Header
```cpp
#include <sst/core/timeConverter.h
```
