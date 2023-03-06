---
title: Discrete Distribution
---

The Discrete distribution returns values from a discrete probability distribution. The class accepts two parameters, an array of outcome probabilities and a count of the number of possible outcomes. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, [Mersenne](mersenne) will be used to sample the distribution.

## Constructor
```cpp
DiscreteDistribution(const double* probs, const uint32_t probsCount);
DiscreteDistribution(const double* probs, const uint32_t probsCount, SST:RNG::Random* baseRNG)
```

#### Parameters
* **probs** (double*) Array of probabilities of each discrete outcome
* **probsCount** (uint32_t) Number of discrete outcomes
* **baseRNG** (SST::RNG::Random*) A random number generator for sampling the distribution

## getNextDouble
```cpp
double getNextDouble();
```
Return the next (random) double in the distribution. This will be a double converted from the outcome's probability array index.

#### Parameters
* **returns** (double) The next double in the distribution

## Examples

### Example 1
```cpp
// Create a distribution
// Outcome  | Probability
//    0     |   0.2
//    1     |   0.05
//    2     |   0.3
//    3     |   0.15
//    4     |   0.3
uint32_t outcome_count = 5;
double probabilities[] = { 0.2, 0.05, 0.3, 0.15, 0.3};
SST::RNG::DiscreteDistribution* dist = new SST::RNG::DiscreteDistribution(5, &probabilities);

double next;
next = dist->getNextDouble();
```

## Header
```cpp
#include <sst/core/rng/discrete.h>
```