---
title: SST::RandomDistribution
---

In addition to random number generators, SST includes several probability distributions. Like the random number generators, these distributions are deterministic and produce the same output across supported compilers and platforms. The distributions use an SST random number generator to produce a sequence of samples.

Distributions include:
* **Constant**
    - `SST::RNG::ConstantDistribution`
    - A distribution which always returns a constant value (provided by user). This can be used in situations where the user ma not want to apply a distribution.
* **Discrete**
    - `SST::RNG::DiscreteDistribution`
    - A discrete distribution that produces the same output across supported platforms and compilers.
* **Exponential**
    - `SST::RNG::ExponentialDistribution`
    - An exponential distribution that produces the same output across supported platforms and compilers.
* **Gaussian**
    - `SST::RNG::GaussianDistribution`
    - A Gaussian (normal) distribution that produces the same output across supported platforms and compilers.
* **Poisson**
    - `SST::RNG::PoissonDistribution`
    - A Poisson distribution that produces the same output across supported platforms and compilers.
* **Uniform**
    - `SST::RNG::UniformDistribution`
    - A Uniform distribution that produces the same output across supported platforms and compilers.

## API
SST distributions implement a function to return the next double in the distribution as follows.
```cpp
virtual double getNextDouble();
```

## Header
```cpp
#include <sst/core/distrib.h>
```