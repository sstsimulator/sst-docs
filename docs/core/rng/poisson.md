---
title: Poisson Distribution
---

This class produces Poisson distribution with a user-provided lambda. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, [Mersenne](mersenne) will be used.


## Constructor
```cpp
PoissonDistribution(double mn);
PoissonDistribution(double mn, SST::RNG::Random* baseRNG);
```

#### Parameters
* **mn** (double) The lambda for the distribution.
* **baseRNG** (SST::RNG::Random*) A random number generator for sampling the distribution

## getNextDouble
```cpp
double getNextDouble();
```
Return the next double in the distribution.

#### Parameters
* **returns** (double) The next double in the distribution

## getLambda
```cpp
double getLambda();
```
Return the lambda of the distribution.

#### Parameters
* **returns** (double) The lambda of the distribution

## Examples

### Example 1
```cpp
SST::RNG::PoissonDistribution* dist = new SST::RNG::PoissonDistribution(5.0);

double next;
next = dist->getNextDouble();
```

## Header
```cpp
#include <sst/core/rng/poisson.h>
```