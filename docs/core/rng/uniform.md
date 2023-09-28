---
title: Uniform Distribution
---

This class produces a Uniform distribution across a user specified number of outcomes. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, [Mersenne](mersenne) will be used.


## Constructor
```cpp
UniformDistribution(const uint32_t probsCount);
UniformDistribution(const uint32_t probsCount, SST::RNG::Random* baseRNG);
```

#### Parameters
* **probsCount** (double) The number of possible outcomes in the distribution.
* **baseRNG** (SST::RNG::Random*) A random number generator for sampling the distribution


## getNextDouble
```cpp
double getNextDouble();
```
Return the next double in the distribution. This is a double converted from the outcome index.

#### Parameters
* **returns** (double) The next double in the distribution

## Example

```cpp
SST::RNG::UniformDistribution* dist = new SST::RNG::UniformDistribution(5.0);

double next;
next = dist->getNextDouble();
```

## Header
```cpp
#include <sst/core/rng/uniform.h>
```