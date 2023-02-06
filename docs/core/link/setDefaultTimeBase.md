---
title: setDefaultTimeBase
---

```cpp
void setDefaultTimeBase(TimeConverter* tc);
```

Sets the default time base for the link. This will be the units of send latency if additional latency is added using `send()` without specifying units. 

:::note
Calls to [`registerClock()`](../component/time/registerClock) and [`registerTimeBase()`](../component/time/registerTimeBase) can also affect a (sub)component's default time base.
:::

## Parameters
* **tc** (TimeConverter*) A TimeConverter representing the default units of latency to use on the link
* **returns** none


## Examples

### Example 1
```cpp
/* Excerpt from kingsley/linkControl.cc */
void LinkControl::init(unsigned int phase)
{
    Event* ev;
    NocInitEvent* init_ev;
    switch ( init_state ) {
        case 0:
            /* Handle case 0 */
        case 1:
            ev = rtr_link->recvInitData();
            if ( NULL == ev ) break;
            init_ev = static_cast<NocInitEvent*>(ev);
            UnitAlgebra flit_size_ua = init_ev->ua_value;
            flit_size = flit_size_ua.getRoundedValue();

            // Compute the link timebase based on the link bandwidth
            UnitAlgebra link_clock = link_bw / flit_size_ua;

            // Set the 'output_timing' link's timebase to match bandwdith
            TimeConverter* tc = getTimeConverter(link_clock);
            output_timing->setDefaultTimeBase(tc);
        
        /* Rest of case handling and init() */
}
```

## Header
```cpp
#include <sst/core/link.h>
```
