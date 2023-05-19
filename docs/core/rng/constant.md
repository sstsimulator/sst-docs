---
title: Constant Distribution
---

The Constant distribution returns a constant value. This can be used in situations where the user may not want to apply a distribution. The constant value is provided by the user.

## Constructor
```cpp
ConstantDistribution(double v);
```

#### Parameters
* **v** (double) The constant value this distribution will prodcue.

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
Return the mean of the distribution, in this case, the constant value.

#### Parameters
* **returns** (double) The mean of the distribution

## Example

```cpp
SST::RNG::ConstantDistribution* dist = new SST::RNG::ConstantDistribution(5.0);

double next;
next = dist->getNextDouble();
```

## Header
```cpp
#include <sst/core/rng/constant.h>
```