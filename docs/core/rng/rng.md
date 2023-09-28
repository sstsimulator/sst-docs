---
title: SST::Random
---

SST includes a few random number generators (RNGs) that can be used by SST objects. These generators produce identical and deterministic output across all platforms and compilers that SST supports. The RNGs have a shared API. 

Generators include:
* **Marsaglia**
    - `SST::RNG::MarsagliaRNG`
    - An RNG using the Marsaglia method. This is computationally cheap and provides a reasonable distribution of random numbers. The Mersenne RNG is an alternative for a stronger distribution.
* **Mersenne**
    - `SST::RNG::MersenneRNG`
    - A Mersenne-based RNG. This provides better "randomness" compared to Marsaglia but is more computationally expensive.
* **XOR-Shift**
    - `SST::RNG::XORShift`
    - A lightweight and computationally inexpensive RNG based on xor-shift operations. Implements the algorithm described [here](http://en.wikipedia.org/wiki/Xorshift).

## API
Random number generators implement the following API:

### nextUniform
```cpp
virtual double nextUniform();
```
Return the next random number in the range[0,1).

### generateNextUInt32
```cpp
virtual uint32_t generateNextUint32();
```
Generate the next random number as a 32-bit unsigned integer.

### generateNextUInt64
```cpp
virtual uint64_t generateNextUint64();
```
Generate the next random number as a 64-bit unsigned integer.

### generateNextInt32
```cpp
virtual int32_t generateNextInt32();
```
Generate the next random number as a 32-bit signed integer.

### generateNextInt64
```cpp
virtual int64_t generateNextInt64();
```
Generate the next random number as a 64-bit signed integer.


## Header
```cpp
#include <sst/core/rng.h>
```