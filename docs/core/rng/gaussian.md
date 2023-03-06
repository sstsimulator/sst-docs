---
title: Gaussian Distribution
---

This class produces Gaussian or normal distribution with a user-provided mean and standard deviation. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, [Mersenne](mersenne) will be used.

## Constructor
```cpp
GaussianDistribution(double mn, double sd);
GaussianDistribution(double mn, double sd, SST::RNG::Random* baseRNG);
```

#### Parameters
* **mn** (double) The mean of the distribution
* **sd** (double) The standard deviation of the distribution
* **baseRNG** (SST::RNG::Random*) A random number generator for sampling the distribution

## getNextDouble
```cpp
double getNextDouble();
```
Return the next double in the distribution.

#### Parameters
* **returns** (double) The next double in the distribution

## getMean
```cpp
double getMean();
```
Return the mean of the distribution.

#### Parameters
* **returns** (double) The mean of the distribution

## getStandardDev
```cpp
double getStandardDev();
```
Return the standard deviation of the distribution.

#### Parameters
* **returns** (double) The mean of the distribution

## Examples

### Example 1
```cpp
SST::RNG::GaussianDistribution* dist = new SST::RNG::GaussianDistribution(22.5, 1.1);

double next;
next = dist->getNextDouble();
```

## Header
```cpp
#include <sst/core/rng/gaussian.h>
```