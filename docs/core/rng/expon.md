---
title: Exponential Distribution
---

This class produces an exponential distribution with a user-provided rate parameter, or lambda. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, [Mersenne](mersenne) will be used.

## Constructor
```cpp
ExponentialDistribution(const double mn);
ExponentialDistribution(const double mn, SST::RNG::Random* baseRNG);
```

#### Parameters
* **mn** (double) The lambda value to use in generating the distribution
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
double getMean();
```
Return the lambda with which the distribution was created.

#### Parameters
* **returns** (double) The distribution's lambda value

## Example

```cpp
SST::RNG::ExponentialDistribution* dist = new SST::RNG::ExponentialDistribution(1.5);

double next;
next = dist->getNextDouble();
```

## Header
```cpp
#include <sst/core/rng/expon.h>
```