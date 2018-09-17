---
id: MarsagliaRNG
title: MarsagliaRNG
---
## Fully Qualified Name
```cpp
SST::RNG::MarsagliaRNG
```

### Remarks
Implements a random number generator using the Marsaglia method.

This method is computationally cheap and provides a reasonable distribution of random numbers. If you need additional strength in the random numbers you may want to consider the Mersenne RNG.

## Requirements

```cpp
#include <sst/core/rng/marsaglia.h>
```

## Functions

### Constructor
```cpp
// #1 - random seeds, NOTE: this will create variation between runs and between platforms.
MarsagliaRNG::MarsagliaRNG()

// #2 - using defined seeds.
MarsagliaRNG::MarsagliaRNG(unsigned int initial_z, unsigned int initial_w )
```

#### Parameters

**initial_z** - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers.

**initial_w** - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers.

#### Return Value

**None**

### generateNextInt32()
```cpp
int32_t generateNextInt32()
```

#### Parameters

**None**

#### Return Value

**int32_t** - the next signed 32-bit integer


### generateNextInt64()
```cpp
int64_t generateNextInt64()
```

#### Parameters

**None**

#### Return Value

**int64_t** - the next signed 64-bit integer

### generateNextUInt32()
```cpp
uint32_t generateNextUInt32()
```

#### Parameters

**None**

#### Return Value

**uint32_t** - the next unsigned 32-bit integer

### generateNextUInt64()
```cpp
uint64_t generateNextUInt64()
```

#### Parameters

**None**

#### Return Value

**uint64_t** - the next unsigned 64-bit integer

### nextUniform()
```cpp
double  nextUniform()
```

#### Parameters

**None**

#### Return Value

**double** - The next double within the range 0 to 1.

### restart()
Restart the random number generator with new seeds.
```cpp
void restart(unsigned int new_z, unsigned int new_w)
```

#### Parameters

**new_z** - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers.

**new_w** - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers.


#### Return Value

**None**

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
