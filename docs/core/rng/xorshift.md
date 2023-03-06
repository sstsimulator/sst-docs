---
title: XOR-Shift RNG
---

The XOR-shift generator is a very lightweight random number generator based on XOR shifts. See the Wikipedia article on [Xorshift generators](http://en.wikipedia.org/wiki/Xorshift) for more information. 

## Constructor
```cpp
// #1 - use a random seed based on time-of-day
// NOTE: this will create variation between runs and between platforms.
XORShiftRNG::XORShiftRNG();

// #2 - use explicitly defined seed
XORShiftRNG::XORShiftRNG(unsigned int seed);
```
Create a new XORShift random number generator.

#### Parameters
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

## seed
```cpp
void seed(uint64_t newSeed);
```
Re-seed the random number generator.

#### Parameters
* **newSeed** (uint64_t) A seed.
* **returns** None

## Examples

### Example 1: generateNextInt32()
```cpp
SST::RNG::XORShiftRNG* rng = new SST::RNG::XORShiftRNG(11);

int rndNumber;
rndNumber = (int)(rng->generateNextInt32());
rndNumber = (rndNumber & 0x0000FFFF) ^ ((rndNumber & 0xFFFF0000) >> 16);
rndNumber = abs((int)(rndNumber % 3));

```

### Example 2: generateNextUInt32()
```cpp
SST::RNG::XORShiftRNG randomGenerator = new SST::RNG::XORShiftRNG(11);

int rndNumber;
int index = randomGenerator.generateNextUInt32() % (numWays-1);
```

### Example 3: generateNextUInt64()
```cpp
SST::RNG::XORShiftRNG rng = new SST::RNG::XORShiftRNG(11);

uint64_t selectA = (rng.generateNextUInt64() % pageCount);
uint64_t selectB = (rng.generateNextUInt64() % pageCount);
```

## Header
```cpp
#include <sst/core/rng/xorshift.h>
```