---
title: UnitAlgebra (Python)
---

UnitAlgebra allows the manipulation of values with units that are common in architectural simulations. Basic arithmetic (addition, subtraction, multiplication, division, inversion, etc.), comparison functions, and  conversion between related units such as bits and bytes are supported. UnitAlgebra also handles SI units. UnitAlgebra types can be passed into most SST Python API functions that accept strings with units, including as parameters and link latencies. 

Note: UnitAlgebra is also available SST's C++ API, see [SST-Core API - UnitAlgebra](../../core/unitalgebra/class.md).

## Syntax

```python
ua = UnitAlgebra(value)
```

## Parameters
* **value** (type: string) A string containing a numeric value and (optionally), units. The value can also be a numeric value without units. 
* **returns** A UnitAlgebra object

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

## Supported functions 
UnitAlgebra supports these arithmetic and logical functions.
* Arithmetic: \+, \-, \/, \*
* Comparison: \>, \>=, \<, \<=, ==, !=
* Negation: \-

## Examples

```python
from sst import UnitAlgebra

bytes_transferred = UnitAlgebra("100B")
elapsed_time = UnitAlgebra("10s")
bandwidth = bytes_transferred / elapsed_time # Returns '10B/s

total_memory_size = UnitAlgebra("1MiB")
number_of_memories = UnitAlgebra(8)
size_per_memory = total_memory_size / number_of_memories # Returns 131072 B
```

## Import
```python
from sst import UnitAlgebra
```


