---
title: SST::UnitAlgebra
keywords: [seconds, bytes, bits, events, Hz, hz, Bps, bps, event, SI, unit]
---

The UnitAlgebra class can be used to manipulate values with units that are common in architectural simulations. The class includes support for basic arithmetic with units (addition, subtraction, multiplication, division), as well as conversion between related units such as bits and bytes. UnitAlgebra also handles SI units.

Each UnitAlgebra consists of a value, stored in a decimal fixed point format, and units, which can include both a numerator and denominator (e.g., bytes/second). 

UnitAlgebra supports the following units. For compound units (Hz, Bps, bps), it also automatically converts the numerator/denominator form of the unit to the compound form.
* **s** seconds
* **B** bytes
* **b** bits
* **events** events
* **Hz** 1/s, converts units of '1/s'
* **hz** 1/s
* **Bps** B/s, converts units of 'B/s'
* **bps** b/s, converts units of 'b/s'
* **event** events

All units can also include standard SI prefixes as follows. UnitAlgebra uses the convention that appending an 'i' to a prefix indicates a binary versus a decimal prefix.
* **a** atto, 1e-18
* **f** femto, 1e-15
* **p** pico, 1e-12
* **n** nano, 1e-9
* **u** micro, 1e-6
* **m** milli, 1e-3
* **k**, **K** kilo, 1e3
* **M** mega, 1e6
* **G** giga, 1e9
* **T** tera, 1e12
* **P** peta, 1e15
* **E** exa, 1e18
* **ki**, **Ki** kibi, x1024
* **Mi** mebi, x1024^2
* **Gi** gibi, x1024^3
* **Ti** tebi, x1024^4
* **Pi** pebi, x1024^5
* **Ei**, exbi, x1024^6

## Serialization
The UnitAlgebra class supports serialization and can be used in event serializers.

:::tip Speed Check
UnitAlgebra is designed for convenience, not performance. It employs string operations to manipulate units. Use it outside of SST's run phase for things like parsing parameters and calculating values needed for simulation. During the run phase, use this class sparingly or in situations where performance is not a critical concern (e.g., for pretty-printing debug information).
:::

## Header
```cpp
#include <sst/core/unitalgebra.h>
```