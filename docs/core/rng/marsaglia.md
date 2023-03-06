---
title: Marsaglia RNG
---

The Marsaglia generator uses the Marsaglia method to generate a reasonable distribution of random numbers with low computational cost. Marsaglia generators use two random seeds, `z` and `w`. 

For more information on this algorithm, see the [Multiply-with-carry Random Number Generator](http://en.wikipedia.org/wiki/Multiply-with-carry) article at Wikipedia.


## Constructor
```cpp
// #1 - use random seeds based on time-of-day
// NOTE: this will create variation between runs and between platforms.
MarsagliaRNG::MarsagliaRNG();

// #2 - use explicitly defined seeds
MarsagliaRNG::MarsagliaRNG(unsigned int initial_z, unsigned int initial_w );
```

#### Parameters
* **initial_z** (unsigned int) One of two seeds.
* **initial_w** (unsigned int) One of two seeds.
* **returns** None

## generateNextInt32
```cpp
int32_t generateNextInt32();
```
Generate the next signed 32-bit integer.

#### Parameters
* **returns** (int32_t) The next signed 32-bit integer.


## generateNextInt64
```cpp
int64_t generateNextInt64();
```
Generate the next signed 64-bit integer.

#### Parameters
* **returns** (int64_t) The next signed 64-bit integer.

## generateNextUInt32
```cpp
uint32_t generateNextUInt32();
```
Generate the next unsigned 32-bit integer.

#### Parameters
* **returns** (uint32_t) The next unsigned 32-bit integer.

## generateNextUInt64
```cpp
uint64_t generateNextUInt64();
```
Generate the next unsigned 64-bit integer.

#### Parameters
* **returns** (uint64_t) The next unsigned 64-bit integer

## nextUniform
```cpp
double  nextUniform();
```
Generate the next double within the range [0,1).

#### Parameters
* **returns** (double) The next double within the range [0,1).

## restart
```cpp
void restart(unsigned int new_z, unsigned int new_w);
```
Restart the random number generator with new seeds.

#### Parameters
* **new_z** (unsigned int) One of two seeds.
* **new_w** (unsigned int) One of two seeds.
* **returns** None

## Examples

### Example 1: generateNextInt32()
```cpp
SST::RNG::MarsagliaRNG* rng = new SST::RNG::MarsagliaRNG(11, RandomSeed);

int rndNumber;
rndNumber = (int)(rng->generateNextInt32());
rndNumber = (rndNumber & 0x0000FFFF) ^ ((rndNumber & 0xFFFF0000) >> 16);
rndNumber = abs((int)(rndNumber % 3));

```

### Example 2: generateNextUInt32()
```cpp
SST::RNG::MarsagliaRNG randomGenerator = new SST::RNG::MarsagliaRNG(11, RandomSeed);

int rndNumber;
int index = randomGenerator.generateNextUInt32() % (numWays-1);
```

### Example 3: generateNextUInt64()
```cpp
SST::RNG::MarsagliaRNG rng = new SST::RNG::MarsagliaRNG(11, 201010101);

uint64_t selectA = (rng.generateNextUInt64() % pageCount);
uint64_t selectB = (rng.generateNextUInt64() % pageCount);
```

## Header
```cpp
#include <sst/core/rng/marsaglia.h>
```